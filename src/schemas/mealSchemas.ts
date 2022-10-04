import Joi from 'joi';
import { IMealData } from '../types/mealTypes';

export const newMealSchema = Joi.object<Omit<IMealData, 'userId'>>({
  name: Joi.string().required(),
  description: Joi.string().required()
});
