import { prisma } from '../config/database';

export async function linkMealToCountedDay(
  countedDayId: number,
  mealId: number
) {
  return await prisma.countedDaysMeals.create({
    data: {
      countedDayId,
      mealId
    }
  });
}
