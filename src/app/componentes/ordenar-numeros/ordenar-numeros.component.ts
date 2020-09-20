import { Component, OnInit } from '@angular/core';
import { JuegoOrdenarNumeros } from '../../clases/juego-ordenar-numeros';

@Component({
  selector: 'app-ordenar-numeros',
  templateUrl: './ordenar-numeros.component.html',
  styleUrls: ['./ordenar-numeros.component.css']
})
export class OrdenarNumerosComponent implements OnInit {

  nuevoJuego:JuegoOrdenarNumeros;
  orden:number[] = [];
  cantidad:number = 1;
  resultado:string = '';
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;

  constructor() { 
    this.nuevoJuego = new JuegoOrdenarNumeros();
  }

  iniciar(){
    this.nuevoJuego.numeroUno = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroDos = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroTres = Math.floor((Math.random() * 100) + 1);
    this.nuevoJuego.numeroCuatro = Math.floor((Math.random() * 100) + 1);
    this.resultado = '';
    this.cantidad = 1;
    this.Tiempo=5;
    this.repetidor = setInterval(()=>{ 
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 1000);
  }

  click(numero){
    if(this.cantidad <= 4)
    {
      this.cantidad++;
      this.orden.push(numero);
      console.log(this.orden);
      if(this.cantidad == 4)
      {
        this.resultado = this.nuevoJuego.verOrden(this.orden);
        console.log(this.resultado);
      }
    }    
  }

  verificar()
  {
    if(this.orden.length < 4)
    {
      this.resultado = 'Perdió';
      console.log(this.resultado);
    }
    else
    {
      this.resultado = this.nuevoJuego.verOrden(this.orden);
      console.log(this.resultado);
    }
  }

  ngOnInit() {
  }

}
