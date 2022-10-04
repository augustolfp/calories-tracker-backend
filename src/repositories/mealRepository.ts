import { prisma } from '../config/database';
import { IMealData } from '../types/mealTypes';

export async function create(meal: IMealData) {
  return await prisma.meals.create({
    data: meal
  });
}
