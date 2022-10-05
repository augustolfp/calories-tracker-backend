import Joi from 'joi';
import { IMealData } from '../types/mealTypes';

const newMealSchema = Joi.object<Omit<IMealData, 'userId'>>({
  name: Joi.string().required(),
  description: Joi.string().required()
});

export const newMealBodySchema = Joi.object({
  meal: newMealSchema,
  countedDayId: Joi.number().required()
});
