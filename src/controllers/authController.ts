import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { IUserData } from '../types/userTypes';

export async function signUp(req: Request, res: Response) {
  const user: IUserData = req.body;

  await userService.create(user);
  return res.status(201).send('Usuário cadastrado com sucesso!');
}
