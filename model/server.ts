import express, { Application } from "express";
import cors from 'cors';
import env from 'dotenv';
import { authRouter } from '../routes/auth.route';
import { Database } from '../db/database';
import { usRouter } from "../routes/usuario.route";

env.config();

export default class Server {
    private app: Application;
    private _rutas: any = {};
    private db: Database; 

    constructor() {
        this.db = new Database();
        this.app = express();
        this.middlewares();
        this._rutas = {
            autenticar: '/autenticar',
            usuario: '/usuario',
        };
        this.rutas();
        this.db.conectar();
    }

    private middlewares = (): void => {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private rutas = (): void => {
        this.app.use(this._rutas.autenticar, authRouter);
        this.app.use(this._rutas.usuario, usRouter);
    }

    public escuchar = () => {
        this.app.listen(80);
        console.log('Servidor inicializado en el puerto ' + process.env.PORT);
    }
}