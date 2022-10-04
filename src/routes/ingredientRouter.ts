import { Router } from 'express';
import * as ingredientController from '../controllers/ingredientController';
import tokenValidationMW from '../middlewares/tokenValidationMW';
import validateSchemaMW from '../middlewares/validateSchemaMW';
import { ingredientListSchema } from '../schemas/ingredientSchemas';

const ingredientRouter = Router();

ingredientRouter.post(
  '/add-ingredients',
  tokenValidationMW,
  validateSchemaMW(ingredientListSchema),
  ingredientController.insertIngredients
);

export default ingredientRouter;
