import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { IUserData } from '../../../src/types/userTypes';
import { prisma } from '../../../src/config/database';

export async function createUser() {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(10)
  };
}

export async function checkUserOnDB(user: IUserData) {
  const userOnDb = await prisma.users.findFirst({
    where: {
      email: user.email
    }
  });

  if (!userOnDb) return false;

  const passwordTest = bcrypt.compareSync(user.password, userOnDb.password);
  const nameTest = user.name === userOnDb.name;
  const emailTest = user.email === userOnDb.email;

  if (passwordTest && nameTest && emailTest) return true;

  return false;
}

export async function insertUserOnDB() {
  const user = await createUser();
  return await prisma.users.create({ data: user });
}
