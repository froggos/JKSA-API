import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';
import { usuarioSchema } from "../schemas/usuario.schema";
import { IUsuario } from "./interface/usuario-interface";

export default class Usuario {
    private _usuario: any;

    constructor() {
        this._usuario = model<Document>('usuario', usuarioSchema);
    }

    validar = (passwordBd: string, passwordBody: string): boolean => {
        return bcrypt.compareSync(passwordBody, passwordBd);
    }

    crear = (password: string, username: string, email: string) => {
        const passHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        return this._usuario.create({
            username: username,
            password: passHash,
            email: email,
            profilename: username,
            profile_picture: '/perfiles/default.jpg',
            medals: [],
            elo: 0,
            ranking: false,
            settingstring: 'theme:default;show_medals:false;save_session:false;medal_order:none;',
        });
    }

    obtener = async (username: string): Promise<IUsuario> => {
        const usuario: IUsuario = await this._usuario.findOne({
            'username': username,
        });

        return usuario;
    }

    ingresarLadder = async (username: string) => {
        const query = {
            username: username
        }
        
        return this._usuario.findOneAndUpdate( query, { $set: {
            elo: 1000,
            ranking: true,
        }});
    }

    get usuario() {
        return this._usuario;
    }
}