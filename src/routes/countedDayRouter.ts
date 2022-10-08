import { Router } from 'express';
import * as countedDayController from '../controllers/countedDayController';
import tokenValidationMW from '../middlewares/tokenValidationMW';

const countedDayRouter = Router();

countedDayRouter.post(
  '/add-counted-day',
  tokenValidationMW,
  countedDayController.addDay
);

countedDayRouter.get(
  '/get-days-data',
  tokenValidationMW,
  countedDayController.getDaysFromUser
);

countedDayRouter.get(
  '/get-day/:dayid',
  tokenValidationMW,
  countedDayController.getDayCompleteData
);

export default countedDayRouter;
