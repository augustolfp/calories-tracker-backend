import Joi from 'joi';
import { ICountedDayData } from '../types/countedDayType';

export const countedDaySchema = Joi.object<Omit<ICountedDayData, 'userId'>>({
  day: Joi.string().required(),
  notes: Joi.string().optional(),
  caloriesTarget: Joi.number().required(),
  proteinsTarget: Joi.number().required()
});
