import { prisma } from '../config/database';
import { IIngredientData } from '../types/ingredientTypes';

export async function create(ingredient: IIngredientData) {
  return await prisma.ingredients.create({
    data: ingredient
  });
}

export async function getIngredientOwnerId(ingId: number) {
  type Result = {
    userId: number;
  };

  return await prisma.$queryRaw<Result[]>`
    SELECT
	    c."userId" AS "userId"
    FROM
	    ingredients i
	    JOIN meals m ON i."mealId" = m.id
	    JOIN "countedDays" c ON m."countedDayId" = c.id
    WHERE i.id = ${ingId}
  `;
}

export async function deleteOne(ingId: number) {
  return await prisma.ingredients.delete({
    where: {
      id: ingId
    }
  });
}
