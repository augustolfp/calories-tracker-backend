import jwt from 'jsonwebtoken';
import { Users } from '@prisma/client';

const jwtKey: string = process.env.JWT_SECRET!;

export function validateToken(token: string, user: Users) {
  const payload = jwt.verify(token, jwtKey);

  if (
    payload.email === user.email &&
    payload.name === user.name &&
    payload.userId === user.id
  ) {
    return true;
  }
  return false;
}
