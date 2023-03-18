import jwt from 'jsonwebtoken';
import { IUsuario } from './interface/usuario-interface';

export default class GenerarToken {
    static generarToken = (usuario: IUsuario): string => {
        const payload: any = {
            id: usuario._id,
            usuario: usuario.username,
            nombrePerfil: usuario.profilename,
            elo: usuario.elo,
        };

        return jwt.sign(payload, process.env.JWT!, {
            expiresIn: '2d',
        });
    }
}