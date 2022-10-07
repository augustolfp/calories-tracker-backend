import { prisma } from '../../../src/config/database';
import * as userFactory from './userFactory';
import * as tokenFactory from './tokenFactory';

export async function deleteDbData() {
  await prisma.$transaction([
    prisma.$executeRaw`TRUNCATE TABLE ingredients CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE meals CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE "countedDays" CASCADE`,
    prisma.$executeRaw`TRUNCATE TABLE users CASCADE`
  ]);
}

export async function loggedUser() {
  const user = await userFactory.insertUserOnDB();
  const token = tokenFactory.createToken(user);
  const authHeader = 'Bearer ' + token;
  return { authHeader, user };
}
