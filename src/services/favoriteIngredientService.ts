import * as favoriteIngRepo from '../repositories/favoriteIngredientRepository';
import { IIngredientData } from '../types/ingredientTypes';

export async function create(
  favIng: Omit<IIngredientData, 'mealId'>,
  userId: number
) {
  function truncNumber(number: number) {
    return Math.round(number * 10) / 10;
  }

  const truncIng = {
    userId,
    description: favIng.name,
    baseQty: truncNumber(favIng.weight),
    proteins: truncNumber(favIng.proteins),
    carbs: truncNumber(favIng.carbs),
    fats: truncNumber(favIng.fats),
    kcals: truncNumber(favIng.kcals)
  };

  return await favoriteIngRepo.create(truncIng);
}

export async function search(term: string, userId: number) {
  return await favoriteIngRepo.search(term, userId);
}
