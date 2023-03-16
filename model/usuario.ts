export default class Usuario {
    private id: number;
    private usuario: string;
    private password: string;
    
    constructor(id: number, usuario: string, password: string) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
    }

    crear = () => {

    }

    modificar = () => {

    }

    eliminar = () => {

    }

    get Id() {
        return this.id;
    }

    get Usuario() {
        return this.usuario;
    }

    get Password() {
        return this.password;
    }
}