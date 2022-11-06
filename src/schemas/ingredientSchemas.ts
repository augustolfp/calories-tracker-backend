import Joi from 'joi';
import { IIngredientData } from '../types/ingredientTypes';

const ingredientSchema = Joi.object<IIngredientData>({
  name: Joi.string().required(),
  mealId: Joi.number().required(),
  weight: Joi.number().required(),
  carbs: Joi.number().required(),
  fats: Joi.number().required(),
  proteins: Joi.number().required(),
  kcals: Joi.number().required()
});

export const ingredientListSchema = Joi.object({
  ingredients: Joi.array().items(ingredientSchema)
});
