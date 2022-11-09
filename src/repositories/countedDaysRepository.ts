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
    COALESCE(SUM(ing."carbs"),0) AS carbs, 
    COALESCE(SUM(ing."fats"),0) AS fats, 
    COALESCE(SUM(ing."proteins"),0) AS proteins, 
    COALESCE(SUM(ing.kcals),0) AS kcals, 
    json_agg(
      row_to_json(ing)
    ) AS "ingredientList" 
  FROM 
    meals 
    LEFT JOIN ingredients ing ON meals.id = ing."mealId" 
  WHERE 
    meals."countedDayId" IN (
      SELECT 
        cdays.id 
      FROM 
        "countedDays" cdays 
      WHERE 
        cdays."userId" = ${userId}
    ) 
  GROUP BY 
    meals.id
), 
meal_resume AS (
  SELECT 
    cdays.id AS "countedDayId", 
    COALESCE(SUM(rdmeals.carbs),0) AS carbs, 
    COALESCE(SUM(rdmeals.fats),0) AS fats, 
    COALESCE(SUM(rdmeals.proteins),0) AS proteins, 
    COALESCE(SUM(rdmeals.kcals),0) AS kcals, 
    json_agg(
      row_to_json(rdmeals)
    ) AS "dayMeals" 
  FROM 
    resumed_day_meals rdmeals 
    JOIN "countedDays" cdays ON rdmeals."countedDayId" = cdays.id 
  GROUP BY 
    cdays.id
) 
SELECT 
  cdays.*, 
  COALESCE(mr.carbs,0) AS carbs, 
  COALESCE(mr.fats,0) AS fats, 
  COALESCE(mr.proteins,0) AS proteins, 
  COALESCE(mr.kcals,0) AS kcals, 
  mr."dayMeals" 
FROM 
  "countedDays" cdays 
  LEFT JOIN meal_resume mr ON cdays.id = mr."countedDayId" 
WHERE 
  cdays."userId" = ${userId}
ORDER BY cdays.day DESC
  `;
}

export async function getUserDay(userId: number, date: Date) {
  return await prisma.countedDays.findFirst({
    where: {
      AND: [{ userId: userId }, { day: date }]
    }
  });
}

export async function getDayById(dayId: number) {
  return await prisma.countedDays.findUnique({
    where: {
      id: dayId
    }
  });
}

export async function deleteOne(dayId: number) {
  return await prisma.countedDays.delete({
    where: {
      id: dayId
    }
  });
}
