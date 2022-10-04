import { Meals } from '@prisma/client';

export type IMealData = Omit<Meals, 'id' | 'createdAt'>;
