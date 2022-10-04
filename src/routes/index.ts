import { Router } from 'express';
import authRouter from './authRouter';
import searchRouter from './searchRouter';
import mealRouter from './mealRouter';

const router = Router();

router.use(authRouter);
router.use(searchRouter);
router.use(mealRouter);

export default router;
