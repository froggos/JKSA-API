import { IUsuario } from "./interface/usuario-interface";

export class Ladder {
    constructor() {}

    modificarElo = (ganador: IUsuario, perdedor: IUsuario) => {
        let ptjGanador = 1 / (1 + 10 * ((perdedor.elo - ganador.elo) / 400));
        let ptjPerdedor = 1 / (1 + 10 * ((ganador.elo - perdedor.elo) / 400));

        
    }
}