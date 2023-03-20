import { Router } from 'express';
import { AuthController } from '../controller/auth.controller';

const authRouter = Router();
const authController: AuthController = new AuthController();

authRouter.post('/verificar-cuenta', authController.login);

export { authRouter };