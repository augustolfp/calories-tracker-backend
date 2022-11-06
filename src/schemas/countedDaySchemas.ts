import coreJoi from 'joi';
import joiDate from '@joi/date';
import { ICountedDayData } from '../types/countedDayType';

const Joi = coreJoi.extend(joiDate) as typeof coreJoi;

export const countedDaySchema = Joi.object<Omit<ICountedDayData, 'userId'>>({
  day: Joi.date().format('YYYY-MM-DD').required(),
  notes: Joi.string().allow('').optional(),
  caloriesTarget: Joi.number().required(),
  proteinsTarget: Joi.number().required()
});
