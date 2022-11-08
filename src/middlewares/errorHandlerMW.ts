import { NextFunction, Request, Response } from 'express';

export default function errorHandlerMW(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  function errorMessageToStatusCode(message?: string) {
    if (message === 'Email já cadastrado') return 403;
    if (message === 'Credenciais inválidas') return 401;
    if (message === 'Formato de token inválido') return 401;
    if (message === 'Token inválido') return 401;
    if (message === 'Usuário já contém o dia registrado') return 409;
    return 400;
  }
  return res.status(errorMessageToStatusCode(err.message)).send(err.message);
}
