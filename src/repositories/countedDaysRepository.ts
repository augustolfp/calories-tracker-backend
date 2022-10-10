import { prisma } from '../config/database';
import { ICountedDayData } from '../types/countedDayType';

export async function addDay(countedDay: ICountedDayData) {
  return await prisma.countedDays.create({
    data: countedDay
  });
}

export async function getDaysSummarizedData(userId: number) {
  return await prisma.$queryRaw`
      WITH resumed_day_meals AS (
        SELECT
          meals.id AS "mealId",
          meals."countedDayId" AS "countedDayId",
          meals.name AS "mealName",
          meals.description AS "mealDescription",
          meals."createdAt" AS "mealCreationDate",
          SUM (ing."carbsInGrams") AS carbs,
          SUM (ing."fatsInGrams") AS fats,
          SUM (ing."proteinsInGrams") AS proteins,
          SUM (ing.kcals) AS kcals,
          json_agg(row_to_json(ing)) AS "ingredientList"
        FROM meals
          LEFT JOIN ingredients ing ON meals.id =ing."mealId"
        WHERE meals."countedDayId" IN (
        SELECT cdays.id FROM "countedDays" cdays WHERE cdays."userId" = ${userId}
        )
        GROUP BY meals.id
	    )
	
    SELECT
      cdays.*,
      SUM (rdmeals.carbs) AS carbs,
      SUM (rdmeals.fats) AS fats,
      SUM (rdmeals.proteins) AS proteins,
      SUM (rdmeals.kcals) AS kcals,
      json_agg(row_to_json(rdmeals)) AS "dayMeals"
    FROM resumed_day_meals rdmeals
      RIGHT JOIN "countedDays" cdays ON rdmeals."countedDayId" = cdays.id
    GROUP BY cdays.id
  `;
}
