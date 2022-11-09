import { Router } from 'express';
import * as ingredientController from '../controllers/ingredientController';
import tokenValidationMW from '../middlewares/tokenValidationMW';
import validateSchemaMW from '../middlewares/validateSchemaMW';
import { ingredientSchema } from '../schemas/ingredientSchemas';

const ingredientRouter = Router();

ingredientRouter.post(
  '/add-ingredients',
  tokenValidationMW,
  validateSchemaMW(ingredientSchema),
  ingredientController.insertIngredient
);

ingredientRouter.delete(
  '/delete-ingredient/:id',
  tokenValidationMW,
  ingredientController.deleteOneIngredient
);

export default ingredientRouter;
