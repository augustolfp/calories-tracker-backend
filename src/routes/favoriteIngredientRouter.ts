import { Router } from 'express';
import * as favoriteIngController from '../controllers/favoriteIngredientController';
import tokenValidationMW from '../middlewares/tokenValidationMW';
import validateSchemaMW from '../middlewares/validateSchemaMW';
import { favoriteIngSchema } from '../schemas/favoriteIngredientSchema';

const favoriteIngRouter = Router();

favoriteIngRouter.post(
  '/add-favorite-ingredient',
  tokenValidationMW,
  validateSchemaMW(favoriteIngSchema),
  favoriteIngController.insertFavoriteIngredient
);

export default favoriteIngRouter;
