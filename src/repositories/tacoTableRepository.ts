import { prisma } from '../config/database';

export async function search(term: string) {
  return await prisma.$queryRaw`
    SELECT *
    FROM "tacoTable"
    WHERE
      description ILIKE ${'%' + term + '%'}`;
}
