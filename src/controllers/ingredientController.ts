import { Request, Response } from 'express';
import * as ingredientService from '../services/ingredientService';
import { IIngredientData } from '../types/ingredientTypes';

export async function insertIngredient(req: Request, res: Response) {
  const ingredient: IIngredientData = req.body;

  const result = await ingredientService.create(ingredient);

  return res.status(201).send(result);
}

export async function deleteOneIngredient(req: Request, res: Response) {
  const ingId = Number(req.params.id);
  const userId = res.locals.userData.userId;

  await ingredientService.deleteOne(ingId, userId);
  return res.status(200).send('Ingrediente apagado com sucesso!');
}
