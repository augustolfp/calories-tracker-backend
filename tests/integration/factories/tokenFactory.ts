import jwt from 'jsonwebtoken';
import { Users } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const jwtKey: string = process.env.JWT_SECRET!;

export function validateToken(token: string, user: Users) {
  const payload = jwt.verify(token, jwtKey);

  if (
    typeof payload !== 'string' &&
    payload.email === user.email &&
    payload.name === user.name &&
    payload.userId === user.id
  ) {
    return true;
  }
  return false;
}

export function createToken(user: Users) {
  const token = jwt.sign(
    {
      email: user.email,
      name: user.name,
      userId: user.id
    },
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.JWT_SECRET!,
    {
      expiresIn: '1h'
    }
  );

  return token;
}
