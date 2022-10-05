import { Request, Response } from 'express';
import * as mealService from '../services/mealService';
import { IMealData } from '../types/mealTypes';

export async function createMeal(req: Request, res: Response) {
  const meal: Omit<IMealData, 'userId'> = req.body.meal;
  const countedDayId: number = req.body.countedDayId;

  const insertMeal = await mealService.create(
    {
      ...meal,
      userId: res.locals.userData.userId
    },
    countedDayId
  );

  return res.status(201).send(insertMeal);
}

export async function getMealById(req: Request, res: Response) {
  const mealId = Number(req.params.id);

  const meal = await mealService.getMealById(mealId);

  return res.status(200).send(meal);
}
