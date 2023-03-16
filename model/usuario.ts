export default class Usuario {
    private id!: number;
    private usuario!: string;
    private password!: string;
    
    constructor(id: number, usuario: string, password: string) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
    }

    validar = () => {

    }

    crear = () => {

    }

    modificar = () => {

    }

    eliminar = () => {

    }

    setUsuario = () => {

    }

    build = (): Usuario => {
        return new Usuario(this.id, this.usuario, this.password);
    }
}