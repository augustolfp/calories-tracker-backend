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

mealRouter.get('/get-meal/:id', tokenValidationMW, mealController.getMealById);

mealRouter.delete(
  '/delete-meal/:id',
  tokenValidationMW,
  mealController.deleteMeal
);

export default mealRouter;
