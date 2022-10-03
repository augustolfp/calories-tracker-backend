import { Router } from 'express';
import authRouter from './authRouter';
import searchRouter from './searchRouter';

const router = Router();

router.use(authRouter);
router.use(searchRouter);

export default router;
