import { prisma } from '../config/database';

export async function search(term: string) {
  return await prisma.tacoTable.findMany({
    where: {
      description: {
        search: term
      }
    }
  });
}
