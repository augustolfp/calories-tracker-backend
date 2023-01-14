import { prisma } from '../config/database';
import { IFavoriteIngredientData } from '../types/ingredientTypes';

export async function create(favIng: IFavoriteIngredientData) {
  return await prisma.favoriteIngredients.create({
    data: favIng
  });
}

export async function search(term: string, userId: number) {
  return await prisma.$queryRaw`
    SELECT
      f.id,
      f.description,
      f."baseQty",
      f.proteins,
      f.carbs,
      f.fats,
      f.kcals
    FROM "favoriteIngredients" f
    WHERE
      "userId" = ${userId}
      AND description ILIKE ${'%' + term + '%'}`;
}
