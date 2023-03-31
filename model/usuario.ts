import { model, Document } from "mongoose";
import bcrypt from 'bcrypt';
import { usuarioSchema } from "../schemas/usuario.schema";
import { IUsuario } from "./interface/usuario-interface";

export default class Usuario {
    private _usuarioModel: any;
    private _password: string = '';
    private _username: string = '';
    private _email: string = '';
    private _profilename: string = '';
    private _profile_picture: string = '/perfiles/default.jpg';
    private _medals: string[] = [];
    private _elo: number = 0;
    private _ranking: boolean = false;
    private _settingstring: string = 'theme:default;show_medals:false;save_session:false;medal_order:none;';

    constructor() {
        this._usuarioModel = model<Document>('usuario', usuarioSchema);
    }

    set setPassword(pass: string) {
        this._password = pass;
    }

    set setUsername(user: string) {
        this._username = user;
    }

    set setEmail(email: string) {
        this._email = email;
    }

    set setProfilename(name: string) {
        this._profilename = name;
    }

    set setProfilePicture(ppicture: string) {
        this._profile_picture = ppicture;
    }

    set setMedals(medals: string[]) {
        this._medals = medals;
    }

    set setElo(elo: number) {
        this._elo = elo;
    }

    set setRanking(ranking: boolean) {
        this._ranking = ranking;
    }

    set setSettingString(sstring: string) {
        this._settingstring = sstring;
    }

    validar = (passwordBd: string, passwordBody: string): boolean => {
        return bcrypt.compareSync(passwordBody, passwordBd);
    }

    public crear = () => {
        const passHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(10));
        return this._usuarioModel.create({
            username: this._username,
            password: passHash,
            email: this._email,
            profilename: this._profilename,
            profile_picture: this._profile_picture,
            medals: this._medals,
            elo: this._elo,
            ranking: this._ranking,
            settingstring: this._settingstring,
        });
    }

    public obtener = async (username: string): Promise<IUsuario> => {
        const usuario: IUsuario = await this._usuarioModel.findOne({
            'username': username,
        });

        return usuario;
    }

    public ingresarLadder = async (username: string) => {
        const query = {
            username: username
        }

        return this._usuarioModel.findOneAndUpdate(query, {
            $set: {
                elo: 1000,
                ranking: true,
            }
        });
    }

    get usuarioModel() {
        return this._usuarioModel;
    }
}