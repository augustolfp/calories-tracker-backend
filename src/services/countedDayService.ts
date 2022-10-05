import * as countedDayRepo from '../repositories/countedDaysRepository';
import { ICountedDayData } from '../types/countedDayType';

export async function addDay(countedDay: ICountedDayData) {
  return await countedDayRepo.addDay(countedDay);
}
