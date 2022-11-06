import { Request, Response } from 'express';
import * as ingredientService from '../services/ingredientService';
import { IIngredientData } from '../types/ingredientTypes';

export async function insertIngredient(req: Request, res: Response) {
  const ingredient: IIngredientData = req.body;

  const result = await ingredientService.create(ingredient);

  return res.status(201).send(result);
}
