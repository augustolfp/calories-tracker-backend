import { Router } from 'express';
import * as authController from '../controllers/authController';
import validateSchemaMW from '../middlewares/validateSchemaMW';
import { signUpSchema } from '../schemas/authSchemas';

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validateSchemaMW(signUpSchema),
  authController.signUp
);

export default authRouter;
