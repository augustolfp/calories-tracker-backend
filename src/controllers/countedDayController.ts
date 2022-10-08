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

export async function getDaysFromUser(req: Request, res: Response) {
  const userId = res.locals.userData.userId;

  const result = await countedDayService.getDaysSummarizedData(userId);
  return res.status(200).send(result);
}

export async function getDayCompleteData(req: Request, res: Response) {
  const dayId = Number(req.params.dayid);

  const result = await countedDayService.getDayById(dayId);

  return res.status(200).send(result);
}
