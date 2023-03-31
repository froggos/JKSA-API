import { Response, Request } from 'express';
import { MongoServerError } from 'mongodb';
import { IUsuario } from '../model/interface/usuario-interface';
import Usuario from '../model/usuario';
import nodemailer from 'nodemailer';

export class UsuarioController {
    private _model: Usuario;

    constructor() {
        this._model = new Usuario();
    }

    public crearUsuario = async (request: Request, response: Response) => {
        const { password, username, email } = request.body;
        this._model.setPassword = password;
        this._model.setUsername = username;
        this._model.setEmail = email;
        this._model.setProfilename = username;
        try {
            const respuesta: IUsuario = await this._model.crear();
            if (respuesta._id) {
                const transportador = nodemailer.createTransport({
                    host: '',
                    port: 587,
                    secure: false,
                    auth: {
                        user: respuesta.username,
                        pass: respuesta.password,
                    }
                });

                await transportador.sendMail({
                    from: '',
                    to: respuesta.email,
                    subject: 'Confirmación de cuenta de usuario',
                    html: `
                        
                    `,
                });

                return response.status(200).json({
                    msg: 'Usuario creado',
                    usuario: respuesta,
                });
            }
        } catch (error: any) {
            console.log(error);
            return response.status(500).json({
                msg: 'Error interno del servidor.'
            })
        }
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