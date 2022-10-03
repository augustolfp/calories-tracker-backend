import { Request, Response } from 'express';
import * as tacoTableService from '../services/tacoTableService';

export async function search(req: Request, res: Response) {
  const term: string = req.body.term;

  const result = await tacoTableService.search(term);

  return res.status(200).send({ results: result });
}
