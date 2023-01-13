import Joi from 'joi';
import { IIngredientData } from '../types/ingredientTypes';

export const favoriteIngSchema = Joi.object<Omit<IIngredientData, 'mealId'>>({
  name: Joi.string().required(),
  weight: Joi.number().required(),
  carbs: Joi.number().required(),
  fats: Joi.number().required(),
  proteins: Joi.number().required(),
  kcals: Joi.number().required()
});
