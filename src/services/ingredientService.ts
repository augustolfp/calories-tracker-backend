import * as ingredientRepo from '../repositories/ingredientRepository';
import { IIngredientData } from '../types/ingredientTypes';

export async function create(ingredient: IIngredientData) {
  return await ingredientRepo.create(ingredient);
}
