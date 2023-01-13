import { Request, Response } from 'express';
import * as tacoTableService from '../services/tacoTableService';
import * as favoriteIngService from '../services/favoriteIngredientService';

export async function search(req: Request, res: Response) {
  const term: string = req.params.term;
  const userId = res.locals.userData.userId;

  const tacoResults = await tacoTableService.search(term);
  const favoriteIngResults = await favoriteIngService.search(term, userId);

  return res.status(200).send({ tacoResults, favoriteIngResults });
}
