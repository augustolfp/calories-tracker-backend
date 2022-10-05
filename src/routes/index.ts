import { Router } from 'express';
import authRouter from './authRouter';
import searchRouter from './searchRouter';
import mealRouter from './mealRouter';
import ingredientRouter from './ingredientRouter';
import countedDayRouter from './countedDayRouter';

const router = Router();

router.use(authRouter);
router.use(searchRouter);
router.use(mealRouter);
router.use(ingredientRouter);
router.use(countedDayRouter);

export default router;
