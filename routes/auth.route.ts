import { Router } from 'express';
import { AuthController } from '../controller/auth-controller';

const router = Router();

const authController: AuthController = new AuthController();

router.post('/verificar-cuenta', authController.login);

module.exports = router;