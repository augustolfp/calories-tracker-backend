import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { prisma } from '../../../src/config/database';

export async function createDay() {
  const randomDay = faker.date.recent();

  return {
    day: dayjs(randomDay).format('DD-MM-YYYY'),
    notes: faker.lorem.sentence(5)
  };
}

export async function insertRandomDayOnDB(userId: number) {
  const day = await createDay();
  return await prisma.countedDays.create({
    data: { ...day, userId }
  });
}
