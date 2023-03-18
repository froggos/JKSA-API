import mongoose from "mongoose";

export class Database {
    private url: string = 'mongodb://localhost:27017/jksa';

    constructor() { }

    conectar = async () => {
        await mongoose.connect(this.url, {
            family: 4,
        })
        .then(() => console.log('Conexión exitosa'))
        .catch((error) => {
            console.log(error);
        });
    }
}