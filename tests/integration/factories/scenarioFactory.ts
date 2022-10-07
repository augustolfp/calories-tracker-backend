import { prisma } from '../../../src/config/database';

export async function deleteDbData() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE ingredients CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE meals CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "countedDays" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE users CASCADE`
  ]);
}
