import { Router } from 'express';
import * as countedDayController from '../controllers/countedDayController';
import tokenValidationMW from '../middlewares/tokenValidationMW';

const countedDayRouter = Router();

countedDayRouter.post(
  '/add-counted-day',
  tokenValidationMW,
  countedDayController.addDay
);

export default countedDayRouter;
