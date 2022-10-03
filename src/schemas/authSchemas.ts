import Joi from 'joi';
import { IUserData, ILoginUserData } from '../types/userTypes';

export const signUpSchema = Joi.object<IUserData>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const signInSchema = Joi.object<ILoginUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
