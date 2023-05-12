import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { IUserData, ILoginUserData } from '../types/userTypes';
import axios from 'axios';

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

export async function githubSignIn(req: Request, res: Response) {
  const code = req.body.code;

  const config = {
    headers: {
      Accept: 'application/json'
    }
  };

  const tokenRequestBody = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: code
  };

  const githubTokenRequest = await axios.post(
    process.env.GITHUB_TOKEN_URL,
    tokenRequestBody,
    config
  );

  const githubToken = githubTokenRequest.data.access_token;
  console.log(githubTokenRequest.data);

  const userResponse = await axios.get(process.env.GITHUB_API_URL, {
    headers: {
      Authorization: `Bearer ${githubToken}`
    }
  });
  console.log(userResponse.data);

  return res.status(200).send({ ...userResponse.data });
}
