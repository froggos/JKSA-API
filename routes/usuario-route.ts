import { Router } from "express";
import { UsuarioController } from '../controller/usuario-controller';

const usRouter = Router();
const usController: UsuarioController = new UsuarioController();

usRouter.post('/crear', usController.crearUsuario);

export { usRouter };