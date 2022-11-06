import { prisma } from '../config/database';
import { IIngredientData } from '../types/ingredientTypes';

export async function create(ingredient: IIngredientData) {
  return await prisma.ingredients.create({
    data: ingredient
  });
}
