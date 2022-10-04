import { Request, Response } from 'express';
import * as ingredientService from '../services/ingredientService';
import { IIngredientData } from '../types/ingredientTypes';

export async function insertIngredients(req: Request, res: Response) {
  const ingredients: IIngredientData[] = req.body.ingredients;

  const result = await ingredientService.createMany(ingredients);

  return res.status(201).send(result);
}
