import { Router } from 'express';
import * as countedDayController from '../controllers/countedDayController';
import tokenValidationMW from '../middlewares/tokenValidationMW';
import { countedDaySchema } from '../schemas/countedDaySchemas';
import validateSchemaMW from '../middlewares/validateSchemaMW';

const countedDayRouter = Router();

countedDayRouter.post(
  '/add-counted-day',
  tokenValidationMW,
  validateSchemaMW(countedDaySchema),
  countedDayController.addDay
);

countedDayRouter.get(
  '/get-days-data',
  tokenValidationMW,
  countedDayController.getDaysFromUser
);

export default countedDayRouter;
