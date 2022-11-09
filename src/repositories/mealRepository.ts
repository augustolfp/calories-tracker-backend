import { prisma } from '../config/database';
import { IMealData } from '../types/mealTypes';

export async function create(meal: IMealData) {
  return await prisma.meals.create({
    data: meal
  });
}

export async function getMealStatsById(mealdId: number) {
  const query = await prisma.$queryRaw<object[]>`
    SELECT
      meals.id,
      meals.name AS name,
      meals.description AS description,
      SUM (ing."carbsInGrams") AS carbs,
      SUM (ing."fatsInGrams") AS fats,
      SUM (ing."proteinsInGrams") AS proteins,
      SUM (ing.kcals) AS kcals,
      json_agg(row_to_json(ing)) AS "mealIngredients"
    FROM meals
      JOIN ingredients ing ON ing."mealId" = meals.id
    WHERE meals.id = ${mealdId}
    GROUP BY meals.id
  `;

  return query[0];
}

export async function getMealOwnerId(mealId: number) {
  type Result = {
    userId: number;
  };

  return await prisma.$queryRaw<Result[]>`
    SELECT
	    c."userId" AS "userId"
    FROM
	    meals m
	    JOIN "countedDays" c ON m."countedDayId" = c.id
    WHERE m.id = ${mealId}
  `;
}

export async function deleteOne(mealId: number) {
  return await prisma.meals.delete({
    where: {
      id: mealId
    }
  });
}
