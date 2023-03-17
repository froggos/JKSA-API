import { Response, Request } from 'express';
import Usuario from '../model/usuario';

export class UsuarioController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    crearUsuario = async (request: Request, response: Response) => {
        const { username, password } = request.body;
        const usuario = this._model.usuario({
            username, password
        });

        try {
            await usuario.save();
            response.status(200).json(usuario);
        } catch(error) {
            response.status(500).json({
                msg: error
            });
        }
    }
}