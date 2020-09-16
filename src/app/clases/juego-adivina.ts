import { Juego } from '../clases/juego'

export class JuegoAdivina extends  Juego {

  numeroSecreto: number = 0;
  numeroIngresado = 0;
  resultado:string;
  intentos:number = 0;

  constructor(nombre?: string, gano?: boolean, jugador?:string) {
      super("Adivina el número",gano,jugador);
    }

  public verificar() {
    this.intentos++;
    if (this.numeroIngresado == this.numeroSecreto) {
      this.resultado = "Ganó";
    }
    else{
      if (this.intentos < 10) {
        this.resultado = "Jugando";
      } else {
        this.resultado = "Perdió";
      }
    }
    return this.resultado;
  }

  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }
  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return "Falta";
    }
    return "Te pasate";
  }
}
