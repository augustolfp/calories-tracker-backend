import * as ingredientRepo from '../repositories/ingredientRepository';
import { IIngredientData } from '../types/ingredientTypes';

export async function create(ingredient: IIngredientData) {
  function truncNumber(number: number) {
    return Math.round(number * 10) / 10;
  }

  const truncIng = {
    ...ingredient,
    weight: truncNumber(ingredient.weight),
    carbs: truncNumber(ingredient.carbs),
    fats: truncNumber(ingredient.fats),
    proteins: truncNumber(ingredient.proteins),
    kcals: truncNumber(ingredient.kcals)
  };

  return await ingredientRepo.create(truncIng);
}

export async function deleteOne(ingId: number, userId: number) {
  const userCheck = await ingredientRepo.getIngredientOwnerId(ingId);

  if (userCheck[0].userId !== userId) {
    throw Error('Ingrediente não pertence ao usuário');
  }

  return await ingredientRepo.deleteOne(ingId);
}
