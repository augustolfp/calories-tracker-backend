import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default function tokenValidationMW(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const jwtKey: string = process.env.JWT_SECRET!;
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if (!token) {
    throw Error('Formato de token inválido');
  }

  try {
    const tokenEmbeddedData = jwt.verify(token, jwtKey);
    res.locals.userData = tokenEmbeddedData;
    next();
  } catch (error) {
    throw Error('Token inválido');
  }
}
