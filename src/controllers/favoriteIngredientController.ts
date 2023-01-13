import { Request, Response } from 'express';
import * as favoriteIngService from '../services/favoriteIngredientService';
import { IIngredientData } from '../types/ingredientTypes';

export async function insertFavoriteIngredient(req: Request, res: Response) {
  const favIng: Omit<IIngredientData, 'mealId'> = req.body;
  const userId = res.locals.userData.userId;

  const result = await favoriteIngService.create(favIng, userId);

  return res.status(201).send(result);
}
