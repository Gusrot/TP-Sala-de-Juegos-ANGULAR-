import { Component, OnInit } from '@angular/core';
import { JuegoMemotest } from '../../clases/juego-memotest';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  nuevoJuego:JuegoMemotest;
  numeros:number[] = [];
  intento:number = 0;
  rojo:boolean=false;
  azul:boolean=false;
  verde:boolean=false;
  amarillo:boolean=false;
  i:number;
  nombreJugador:string;

  constructor(public auth : MiHttpService) { 
    this.nuevoJuego = new JuegoMemotest();
    this.nuevoJuego.cantidad = 1;
  }

  Jugar()
  {
    this.numeros.push(Math.floor(Math.random() * 4));
    this.i = 0;
    console.log(this.numeros.length)
    this.Encendidos(this.numeros.length)
    this.nuevoJuego.cantidad++;
  }

  Encendidos(total)
  {
    if(this.i <= total)
    {
      setTimeout(function(){
        this.Color(this.i);
        this.i++;
        this.Encendidos(total)
      }.bind(this), 800);
    }
  }

  Comprobar(boton)
  {
    switch(boton)
    {
      case 0:
        this.rojo = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 200);
        break;
      case 1:
        this.azul = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 200);
        break;
      case 2:
        this.verde = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 200);
        break;
      case 3:
        this.amarillo = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 200);
        break;
    }
    if(this.numeros[this.intento] == boton)
    {
      console.log('vas bien');
      this.intento++;
      console.log(this.intento);
      console.log(this.numeros.length);
      if(this.intento == this.numeros.length){
        this.intento = 0;
        this.Jugar();
      }
    }
    else
    {
      console.log('perdiste');
      this.nuevoJuego.cantidad--;
      this.guardar();
      this.Reiniciar();
    }
  }

  Color(i)
  {
    switch(this.numeros[i])
    {
      case 0:
        this.rojo = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 800);
        break;
      case 1:
        this.azul = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 800);
        break;
      case 2:
        this.verde = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 800);
        break;
      case 3:
        this.amarillo = true;
        setTimeout(function(){ 
          this.Apagar();
        }.bind(this), 800);
        break;
    }
  }

  Reiniciar()
  {
    this.intento = 0;
    this.nuevoJuego.cantidad = 0;
    this.numeros = [];
  }

  Apagar()
  {
    this.amarillo = false;
    this.verde = false;
    this.azul = false;
    this.rojo = false;
  }

  guardar()
  {
    this.nuevoJuego.usuario = this.nombreJugador;
    console.log(this.nuevoJuego);
    this.auth.guardarPuntuacionMemotest(this.nuevoJuego);
  }

  ngOnInit() {
    /*this.auth.getAuth().subscribe( user =>{
      let mail = user.email;      
      let splitted = mail.split("@",1);
      this.nombreJugador = splitted[0];
    });
    (<HTMLInputElement>document.getElementById("palabraIngresada")).disabled = true;*/
  }

}
