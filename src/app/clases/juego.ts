export abstract class Juego {
  public usuario : any = 'Sin nombre';
  public juego : any = 'Sin juego';
  public gano : any = false;

  constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.juego = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.usuario=jugador;
    else
      this.usuario= "natalia natalia";
  }


  

  public abstract verificar():any; 
  
  public retornarAyuda() {
    
    return "NO hay Ayuda definida";
  }
}
