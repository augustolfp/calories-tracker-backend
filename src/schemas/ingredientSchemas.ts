import Joi from 'joi';
import { IIngredientData } from '../types/ingredientTypes';

const ingredientSchema = Joi.object<IIngredientData>({
  name: Joi.string().required(),
  mealId: Joi.number().required(),
  weightInGrams: Joi.number().required(),
  carbsInGrams: Joi.number().required(),
  fatsInGrams: Joi.number().required(),
  proteinsInGrams: Joi.number().required(),
  kcals: Joi.number().required()
});

export const ingredientListSchema = Joi.object({
  ingredients: Joi.array().items(ingredientSchema)
});
