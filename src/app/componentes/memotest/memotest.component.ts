import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  cantidad:number;
  numeros:number[] = [];
  intento:number = 0;
  rojo:boolean=false;
  azul:boolean=false;
  verde:boolean=false;
  amarillo:boolean=false;
  i:number;

  constructor() { 
    this.cantidad = 1;
  }

  Jugar()
  {
    this.numeros.push(Math.floor(Math.random() * 4));
    this.i = 0;
    console.log(this.numeros.length)
    this.Encendidos(this.numeros.length)
    this.cantidad++;
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
    this.cantidad = 0;
    this.numeros = [];
  }

  Apagar()
  {
    this.amarillo = false;
    this.verde = false;
    this.azul = false;
    this.rojo = false;
  }

  ngOnInit() {
  }

}
