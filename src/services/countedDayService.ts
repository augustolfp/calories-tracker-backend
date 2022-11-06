import * as countedDayRepo from '../repositories/countedDaysRepository';
import { ICountedDayData } from '../types/countedDayType';

export async function addDay(countedDay: ICountedDayData) {
  const date = new Date(countedDay.day);
  const repeatedDayCheck = await countedDayRepo.getUserDay(
    countedDay.userId,
    date
  );

  if (repeatedDayCheck?.day) {
    throw Error('Usuário já contém o dia registrado');
  }

  return await countedDayRepo.addDay({
    ...countedDay,
    day: date
  });
}

export async function getDaysSummarizedData(userId: number) {
  return await countedDayRepo.getDaysSummarizedData(userId);
}
