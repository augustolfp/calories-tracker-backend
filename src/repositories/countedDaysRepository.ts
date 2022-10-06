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
          SUM (ing."carbsInGrams") AS carbs,
          SUM (ing."fatsInGrams") AS fats,
          SUM (ing."proteinsInGrams") AS proteins,
          SUM (ing.kcals) AS kcals
        FROM meals
          JOIN ingredients ing ON ing."mealId" = meals.id
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
      SUM (rdmeals.kcals) AS kcals
    FROM resumed_day_meals rdmeals
      JOIN "countedDays" cdays ON cdays.id = rdmeals."countedDayId"
    GROUP BY cdays.id
  `;
}
