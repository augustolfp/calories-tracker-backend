import { CountedDays } from '@prisma/client';

export type ICountedDayData = Omit<CountedDays, 'id'>;
