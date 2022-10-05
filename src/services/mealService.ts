import * as mealRepo from '../repositories/mealRepository';
import { IMealData } from '../types/mealTypes';
import * as countedDaysMealsRepo from '../repositories/countedDaysMealsRepository';

export async function create(meal: IMealData, countedDayId: number) {
  const newMeal = await mealRepo.create(meal);
  await countedDaysMealsRepo.linkMealToCountedDay(countedDayId, newMeal.id);
  return 'Refeição cadastrada com sucesso!';
}
