import { prisma } from '../config/database';
import { IIngredientData } from '../types/ingredientTypes';

export async function createMany(ingredients: IIngredientData[]) {
  return await prisma.ingredients.createMany({
    data: ingredients
  });
}
