import * as ingredientRepo from '../repositories/ingredientRepository';
import { IIngredientData } from '../types/ingredientTypes';

export async function createMany(ingredient: IIngredientData) {
  return await ingredientRepo.create(ingredient);
}
