import { prisma } from '../config/database';
import { IFavoriteIngredientData } from '../types/ingredientTypes';

export async function create(favIng: IFavoriteIngredientData) {
  return await prisma.favoriteIngredients.create({
    data: favIng
  });
}
