import { Router } from 'express';
import { validarUsuario } from '../controller/usuario-controller';
import { validarCampos } from '../middleware/usuario.middleware';

const router = Router();

router.post('/verificar-cuenta', validarCampos, validarUsuario);

module.exports = router;