import * as userRepo from '../repositories/userRepository';
import { IUserData, ILoginUserData } from '../types/userTypes';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function create(userData: IUserData) {
  const emailCheck = await userRepo.getUserByEmail(userData.email);

  if (emailCheck?.email) {
    throw Error('Email already used');
  }

  const passwordHash = bcrypt.hashSync(userData.password, 10);

  await userRepo.create({
    name: userData.name,
    email: userData.email,
    password: passwordHash
  });

  return 'Usuário criado com sucesso!';
}

export async function login(loginUserData: ILoginUserData) {
  const getUser = await userRepo.getUserByEmail(loginUserData.email);

  if (!getUser?.email) {
    throw Error('Wrong credentials');
  }

  if (!bcrypt.compareSync(loginUserData.password, getUser.password)) {
    throw Error('Wrong credentials');
  }

  const token = jwt.sign(
    {
      email: getUser.email,
      name: getUser.name,
      userId: getUser.id
    },
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.JWT_SECRET!,
    {
      expiresIn: '1h'
    }
  );

  return { token, name: getUser.name };
}
