import * as mealRepo from '../repositories/mealRepository';
import { IMealData } from '../types/mealTypes';

export async function create(meal: IMealData) {
  return await mealRepo.create(meal);
}
