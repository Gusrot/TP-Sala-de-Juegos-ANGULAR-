import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { exit } from 'process';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;

  private subscription: Subscription;
  
   constructor(private servicio : MiHttpService) {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
  }
  NuevoJuego() {
    let operadores = "+-*/";
    this.nuevoJuego.primerNumero = Math.floor(Math.random() * 10) + 1;
    this.nuevoJuego.operador = operadores[Math.floor(Math.random() * operadores.length)];
    console.log(this.nuevoJuego.primerNumero);
    if(this.nuevoJuego.operador != '/')
    {
      this.nuevoJuego.segundoNumero = Math.floor(Math.random() * 10) + 1;
    }
    else
    {
      do{
        this.nuevoJuego.segundoNumero = Math.floor(Math.random() * 10) + 1;
      }while(this.nuevoJuego.primerNumero < this.nuevoJuego.segundoNumero);
    }

    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    let resultado;
    switch(this.nuevoJuego.operador){
      case '+':{
        resultado = this.nuevoJuego.primerNumero + this.nuevoJuego.segundoNumero;
        console.log(resultado)
        if(resultado == this.nuevoJuego.numeroIngresado) {
          this.nuevoJuego.gano = true;
        } else {
          this.nuevoJuego.gano = false;
        }
        break;
      }
      case '-':{
        resultado = this.nuevoJuego.primerNumero - this.nuevoJuego.segundoNumero;
        console.log(resultado)
        if(resultado == this.nuevoJuego.numeroIngresado) {
          this.nuevoJuego.gano = true;
        } else {
          this.nuevoJuego.gano = false;
        }
        break;
      }
      case '*':{
        resultado = this.nuevoJuego.primerNumero * this.nuevoJuego.segundoNumero;
        console.log(resultado)
        if(resultado == this.nuevoJuego.numeroIngresado) {
          this.nuevoJuego.gano = true;
        } else {
          this.nuevoJuego.gano = false;
        }
        break;
      }
      case '/':{
        resultado = this.nuevoJuego.primerNumero / this.nuevoJuego.segundoNumero;
        console.log(resultado)
        if(resultado == this.nuevoJuego.numeroIngresado) {
          this.nuevoJuego.gano = true;
        } else {
          this.nuevoJuego.gano = false;
        }
        break;
      }
    }
    this.servicio.guardarPuntuaciónAgilidad(this.nuevoJuego);
    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
  }
  ngOnInit() {
  } 
}
