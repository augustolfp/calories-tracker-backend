import Joi from 'joi';
import { IUserData } from '../types/userTypes';

export const signUpSchema = Joi.object<IUserData>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
