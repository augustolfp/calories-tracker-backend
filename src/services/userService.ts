import * as userRepo from '../repositories/userRepository';
import { IUserData } from '../types/userTypes';
import bcrypt from 'bcrypt';

export async function create(userData: IUserData) {
  const emailCheck = await userRepo.getUserByEmail(userData.email);

  if (emailCheck?.email) {
    throw {
      type: 'error_email_already_used',
      message: 'Email já cadastrado na plataforma!'
    };
  }

  const passwordHash = bcrypt.hashSync(userData.password, 10);

  await userRepo.create({
    name: userData.name,
    email: userData.email,
    password: passwordHash
  });

  return 'Usuário criado com sucesso!';
}
