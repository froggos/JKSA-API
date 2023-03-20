import { Response, Request } from 'express';
import { MongoServerError } from 'mongodb';
import { IUsuario } from '../model/interface/usuario-interface';
import Usuario from '../model/usuario';

export class UsuarioController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    crearUsuario = async (request: Request, response: Response) => {
        const { password, username, email } = request.body;
        await this._model.crear(password, username, email)
        .then((res: IUsuario) => {
            // Se crea el usuario
            return response.status(200).json({
                crear: true,
                msg: `Usuario ${res.username} creado`,
            });

            // Enviar email
            
            //
            //
            //
        })
        .catch((error: MongoServerError) => {
            console.log(error);
            return response.status(200).json({
                crear: false,
                msg: `Error al crear usuario`,
            });
        });
    }

    ingresarUsuarioLadder = async (request: Request, response: Response) => {
        const { username } = request.body;
        await this._model.ingresarLadder(username).then((usuario: IUsuario) => {
            return response.status(200).json({
                entrar_ranking: true,
                msg: `Usuario ${usuario.username}`
            });
        }).catch((error: MongoServerError) => {
            console.log(error);
            return response.status(200).json({
                entrar_ranking: false,
                msg: 'Error al modificar ranking.'
            });
        });
    }
}