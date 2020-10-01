import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { JuegoOrdenarNumeros } from '../../clases/juego-ordenar-numeros';

@Component({
  selector: 'app-ordenar-numeros',
  templateUrl: './ordenar-numeros.component.html',
  styleUrls: ['./ordenar-numeros.component.css']
})
export class OrdenarNumerosComponent implements OnInit {

  nuevoJuego:JuegoOrdenarNumeros;
  orden:number[] = [];
  cantidad:number = 0;
  resultado:string = '';
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  clicked1:boolean;
  clicked2:boolean;
  clicked3:boolean;
  clicked4:boolean;
  boton1:boolean;
  boton2:boolean;
  boton3:boolean;
  boton4:boolean;
  intentos:number = 0;
  juegoTerminado:boolean;
  nombreJugador : string;

  constructor(private servicio : MiHttpService) { 
    this.nuevoJuego = new JuegoOrdenarNumeros();
    this.boton1 = true;
    this.boton2 = true;
    this.boton3 = true;
    this.boton4 = true;
    this.juegoTerminado = false;
  }

  iniciar(){
    this.juegoTerminado=false;
    this.ocultarVerificar=true;
    this.nuevoJuego.numeroUno = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroDos = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroTres = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroCuatro = Math.floor((Math.random() * 100) + 1);
    this.setearFalsos();
    this.resultado = '';
    this.cantidad = 0;
    this.Tiempo=5;
    this.orden = [];
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.Tiempo=5;
      }
      }, 1000);
  }

  click(numero){
    if(this.cantidad <= 4)
    {
      this.cantidad++;
      this.orden.push(numero);
    }
  }

  verificar()
  {
    if(this.orden.length < 4)
    {
      this.ocultarVerificar = false;
      this.boton1 = true;
      this.boton2 = true;
      this.boton3 = true;
      this.boton4 = true;
      this.juegoTerminado = true;
      this.nuevoJuego.resultado = this.intentos.toString();
      this.nuevoJuego.usuario = this.nombreJugador;
      this.servicio.guardarPuntuacionOrdenar(this.nuevoJuego);
    }
    else
    {
      this.resultado = this.nuevoJuego.verOrden(this.orden);
      console.log(this.resultado);
      clearInterval(this.repetidor);
      if(this.resultado == "Ganó")
      {
        this.intentos++;
        this.iniciar();
      }
      else
      {
        this.ocultarVerificar = false;
        this.boton1 = true;
        this.boton2 = true;
        this.boton3 = true;
        this.boton4 = true;
        this.juegoTerminado = true;
        this.nuevoJuego.resultado = this.intentos.toString();
        this.nuevoJuego.usuario = this.nombreJugador;
        this.servicio.guardarPuntuacionOrdenar(this.nuevoJuego);
      }
    }
  }

  setearFalsos()
  {
    this.clicked1 = false;
    this.clicked2 = false;
    this.clicked3 = false;
    this.clicked4 = false;
    this.boton1 = false;
    this.boton2 = false;
    this.boton3 = false;
    this.boton4 = false;
  }

  ngOnInit() {
    this.servicio.getAuth().subscribe( user =>{
      let mail = user.email;      
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
  }

}
