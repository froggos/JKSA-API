import { Router } from "express";
import { UsuarioController } from '../controller/usuario.controller';
import { validarToken } from "../middleware/token.middleware";

const usRouter = Router();
const usController: UsuarioController = new UsuarioController();

usRouter.post('/crear', validarToken, usController.crearUsuario);
usRouter.post('/ingresar-ranking', usController.ingresarUsuarioLadder);

export { usRouter };