import { Application } from "express";

const express = require('express');
const path = require('path');
const cors = require('cors');
const env = require('dotenv');

env.config();

class Server {
    private app: Application;
    private _rutas: any = {};

    constructor() {
        this.app = express();
        this.middlewares();
        this._rutas = {
            autenticar: 'autenticar',
        };
        this.rutas();
    }

    private middlewares = (): void => {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private rutas = (): void => {
        this.app.use(this._rutas.autenticar, require('../routes/auth.route'));
    }

    public escuchar = () => {
        this.app.listen(process.env.PORT);
        console.log('Servidor inicializado');
    }
}

module.exports = Server;