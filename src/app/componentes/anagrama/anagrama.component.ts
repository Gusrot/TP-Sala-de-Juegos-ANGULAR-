import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  palabras:string[] = ["Hola","Casa","Cuarentena","Descapotable"];
  palabraElegida:string;
  palabraDesordenada:string;
  comprobarPalabra:string;

  constructor() { }

  Comenzar() {
    let random1 = Math.floor(Math.random() * this.palabras.length);
    this.palabraElegida = this.palabras[random1];
    let random2;
    let randoms:number[] = [];
    let letra1:string

    this.palabraDesordenada = '';

    for (let i = 0; i < this.palabraElegida.length; i++) {
      letra1 = '';

      do{
        random2 = Math.floor(Math.random() * this.palabraElegida.length);
      } while(randoms.includes(random2));

      letra1 = this.palabraElegida[random2];
      console.log(random2);
      randoms.push(random2);

      if (i==0) {
        this.palabraDesordenada = letra1
      }
      else {
        this.palabraDesordenada += letra1
      }
    }
    console.log(this.palabraDesordenada);
  }

  Comprobar(comprobarPalabra) {
    if(this.palabraElegida == this.comprobarPalabra.trim())
    {
      console.log('gano');
    }
    else
    {
      console.log('seguí intentando');
    }
  }

  ngOnInit() {
  }

}
