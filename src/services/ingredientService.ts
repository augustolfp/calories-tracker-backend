import * as ingredientRepo from '../repositories/ingredientRepository';
import { IIngredientData } from '../types/ingredientTypes';

export async function createMany(ingredients: IIngredientData[]) {
  return await ingredientRepo.createMany(ingredients);
}
