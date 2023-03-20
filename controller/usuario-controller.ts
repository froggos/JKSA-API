import { Response, Request } from 'express';
import Usuario from '../model/usuario';
import bcrypt from 'bcrypt';

export class UsuarioController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    crearUsuario = async (request: Request, response: Response) => {
        const { password, username, email } = request.body;
        const usuario = this._model.usuario;
        const passHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        try {
            usuario.create({
                username: username,
                password: passHash,
                email: email,
                profilename: username,
                profile_picture: '/perfiles/default.jpg',
                medals: [],
                elo: 0,
                ranking: false,
                settingstring: 'theme:default;show_medals:false;save_session:false;medal_order:none;',
            }, (error: any) => {
                return response.status(400).json({
                    crear: false,
                    msg: 'Error la crear usuario',
                    error,
                });
            });

            return response.status(200).json({
                crear: true,
                msg: 'Usuario creado.',
            })
        } catch(error) {
            return response.status(500).json({
                crear: false,
                msg: 'Error la crear usuario',
            });
        }
    }
}