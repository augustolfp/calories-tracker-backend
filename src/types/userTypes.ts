import { Users } from '@prisma/client';

export type IUserData = Omit<Users, 'id' | 'createdAt'>;
export type ILoginUserData = Omit<Users, 'id' | 'name' | 'createdAt'>;
