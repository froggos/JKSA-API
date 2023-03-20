import { Response, Request } from "express";
import Usuario from '../model/usuario';
import { IUsuario } from '../model/interface/usuario-interface';
import GenerarToken from '../model/token';

export class AuthController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    login = async (request: Request, response: Response): Promise<Response<any, Record<string, any>>> => {
        const { password, username } = request.body;
        const usuario = this._model.usuario;

        try {
            const encontrado: IUsuario = await usuario.findOne({'username': username});

            if(encontrado === null) {
                return response.status(400).json({
                    login: false,
                    msg: 'Usuario o contraseña incorrecta.',
                });
            }

            if(!this._model.validar(encontrado.password, password)) {
                return response.status(400).json({
                    login: false,
                    msg: 'Usuario o contraseña incorrecta.'
                });
            }

            // Crear cookie para los datos del usuario.

            //
            //
            //

            return response.status(200).json({
                login: true,
                usuario: encontrado,
                token: GenerarToken.generarToken(usuario),
            });
        } catch(error) {
            console.log(error);
            return response.status(500).json({
                msg: error
            });
        }
    }
}