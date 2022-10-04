import { Router } from 'express';
import authRouter from './authRouter';
import searchRouter from './searchRouter';
import mealRouter from './mealRouter';
import ingredientRouter from './ingredientRouter';

const router = Router();

router.use(authRouter);
router.use(searchRouter);
router.use(mealRouter);
router.use(ingredientRouter);

export default router;
