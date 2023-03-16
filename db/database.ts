import { MongoClient } from "mongodb";

export default class Conexion {
    private url: string = 'mongodb://localhost:27017';
    private client: MongoClient = new MongoClient(this.url);

    constructor() {}

    conectar = () => {
        
    }
}

