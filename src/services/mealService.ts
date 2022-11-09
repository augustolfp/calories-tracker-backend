import * as mealRepo from '../repositories/mealRepository';
import { IMealData } from '../types/mealTypes';

export async function create(meal: IMealData) {
  const newMeal = await mealRepo.create(meal);
  return newMeal;
}

export async function getMealById(mealdId: number) {
  return await mealRepo.getMealStatsById(mealdId);
}

export async function deleteOne(mealId: number, userId: number) {
  const userCheck = await mealRepo.getMealOwnerId(mealId);

  if (userCheck[0].userId !== userId) {
    throw Error('Refeição não pertence ao usuário');
  }

  return await mealRepo.deleteOne(mealId);
}
