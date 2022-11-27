import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { IUserData, ILoginUserData } from '../types/userTypes';

export async function signUp(req: Request, res: Response) {
  const user: IUserData = req.body;

  await userService.create(user);
  return res.status(201).send('Usuário cadastrado com sucesso!');
}

export async function signIn(req: Request, res: Response) {
  const user: ILoginUserData = req.body;

  const loginData = await userService.login(user);
  return res.status(201).send(loginData);
}

export async function validateToken(req: Request, res: Response) {
  const id = res.locals.userData.userId;
  const name = res.locals.userData.name;
  return res.status(200).send({ id, name });
}
