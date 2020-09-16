import { Juego } from "../clases/juego";

export class JuegoAgilidad extends Juego {
    public numeroIngresado:number;
    public primerNumero:number;
    public operador:string;
    public segundoNumero:number;
    public gano:Boolean;

    public numeroUno : number;
    public numeroDos : number;
    public cantCuentas : number = 0;
    public cantAciertos : number = 0;
    public resultado : number;
    public cuenta : any;

    constructor(usuario ? : string, juego ? : string, gano ? : boolean)
    {
        super("Agilidad matemática",gano,usuario);
    }

    public verificar()
    {
        
    }
}
