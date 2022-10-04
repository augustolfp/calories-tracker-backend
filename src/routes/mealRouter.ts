import { Router } from 'express';
import * as mealController from '../controllers/mealController';
import validateSchemaMW from '../middlewares/validateSchemaMW';
import { newMealSchema } from '../schemas/mealSchemas';
import tokenValidationMW from '../middlewares/tokenValidationMW';

const mealRouter = Router();

mealRouter.post(
  '/add-meal',
  tokenValidationMW,
  validateSchemaMW(newMealSchema),
  mealController.createMeal
);

export default mealRouter;
