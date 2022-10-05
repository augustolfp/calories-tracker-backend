import { Request, Response } from 'express';
import * as countedDayService from '../services/countedDayService';
import { ICountedDayData } from '../types/countedDayType';

export async function addDay(req: Request, res: Response) {
  const countedDay: Omit<ICountedDayData, 'userId'> = req.body;

  const result = await countedDayService.addDay({
    ...countedDay,
    userId: res.locals.userData.userId
  });
  return res.status(201).send(result);
}
