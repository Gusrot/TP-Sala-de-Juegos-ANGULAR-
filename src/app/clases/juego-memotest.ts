import { Juego } from "../clases/juego";

export class JuegoMemotest extends Juego 
{
    public cantidad:number;
    public resultado : string;

    constructor(nombre?: string, Gano?: any, jugador?: any) {
        super("Memotest", Gano, jugador);
        //this.numeroSecreto = Math.floor((Math.random() * 90) + 1);
    }

    verificar(){}
}
