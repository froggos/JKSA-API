import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcrypt';

export default class Usuario {
    private _usuario: any;

    constructor() {
        const usuarioSchema = new Schema({
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            email: { type: String, required: true },
            profilename: { type: String, required: true },
            profile_picture: { type: String },
            medals: [],
            elo: { type: Number },
            ranking: { type: Boolean, required: true },
            settingstring: { type: String, required: true },
        }, {
            collection: 'usuario',
        });

        this._usuario = model<Document>('usuario', usuarioSchema);
    }

    validar = (passwordBd: string, passwordBody: string): boolean => {
        return bcrypt.compareSync(passwordBody, passwordBd);
    }

    get usuario() {
        return this._usuario;
    }
}