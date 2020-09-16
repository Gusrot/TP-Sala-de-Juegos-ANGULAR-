import { Juego } from "./juego";

export class JuegoTateti extends Juego {
    lugares = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    resultado: string;
    espacio = 0;

    constructor(usuario?: string, nombre?: string, gano?: boolean) {
        super("Tateti", gano, usuario);
    }

    verificar() {
        console.log(this.resultado);

    }

    signo(signo, jugador) {
        let x: string = "";

        for (let i = 0; i < this.lugares.length; i=i+3) {
            console.log(i);
            if (this.lugares[i] == signo && this.lugares[i+1] == signo && this.lugares[i+2] == signo) {
                if (jugador == "jugador") {
                    x = "Gano";
                }
                if (jugador == "maquina") {
                    x = "Perdio";
                }    
            }
        }

        for (let i = 0; i < this.lugares.length; i++) {
            console.log(i);
            if (this.lugares[i] == signo && this.lugares[i+3] == signo && this.lugares[i+6] == signo) {
                if (jugador == "jugador") {
                    x = "Gano";
                }
                if (jugador == "maquina") {
                    x = "Perdio";
                }
            }
        }
        
        if (this.lugares[0] == signo && this.lugares[4] == signo && this.lugares[8] == signo) {
            if (jugador == "jugador") {
                x = "Gano";
            }
            if (jugador == "maquina") {
                x = "Perdio";
            }
        }
        else if (this.lugares[2] == signo && this.lugares[4] == signo && this.lugares[6] == signo) {
            if (jugador == "jugador") {
                x = "Gano";
            }
            if (jugador == "maquina") {
                x = "Perdio";
            }
        }

        for (let i = 0; i < 10; i++) {
            if (this.lugares[i] != "-") {
                this.espacio = this.espacio + 1;
            }
        }
        
        if (x == "" && this.espacio == 10)
            x = "Empate";

        this.espacio = 0;
        console.log(x);
        return x;
    }

    movimientoMaquina()
    {
        
    }
}
