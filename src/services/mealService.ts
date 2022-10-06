import * as mealRepo from '../repositories/mealRepository';
import { IMealData } from '../types/mealTypes';

export async function create(meal: IMealData) {
  const newMeal = await mealRepo.create(meal);
  return newMeal;
}

export async function getMealById(mealdId: number) {
  return await mealRepo.getMealStatsById(mealdId);
}
