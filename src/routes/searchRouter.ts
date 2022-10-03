import { Router } from 'express';
import * as searchController from '../controllers/searchController';
import tokenValidationMW from '../middlewares/tokenValidationMW';

const searchRouter = Router();

searchRouter.get('/search', tokenValidationMW, searchController.search);

export default searchRouter;
