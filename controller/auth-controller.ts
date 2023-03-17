import { Response, Request } from "express";
import Usuario from '../model/usuario';

export class AuthController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    login =  async (request: Request, response: Response) => {
        const { password, username } = request.body;
        const usuario = this._model.usuario();

        try {
            const usuarioEncontrado = await usuario.findOne({username});
            response.status(200).json(usuarioEncontrado);
        } catch(error) {
            response.status(500).json({
                msg: error
            });
        }
    }
}