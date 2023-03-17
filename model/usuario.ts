import { Schema, model, Document } from "mongoose";

export default class Usuario {
    private _usuario: any;

    constructor() {
        const usuarioSchema = new Schema({
            username: { type: String, required: true, unique: true },
            password: { type: Number, required: true },
        }, {
            collection: 'usuario',
        });

        this._usuario = model<Document>('usuario', usuarioSchema);
    }

    get usuario() {
        return this._usuario;
    }
}