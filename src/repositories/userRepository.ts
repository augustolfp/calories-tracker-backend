import { prisma } from '../config/database';
import { IUserData } from '../types/userTypes';

export async function create(userData: IUserData) {
  return await prisma.users.create({ data: userData });
}

export async function getUserByEmail(email: string) {
  return await prisma.users.findUnique({
    where: {
      email
    }
  });
}
