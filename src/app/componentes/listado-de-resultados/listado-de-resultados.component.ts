
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { Observable } from 'rxjs/Observable';
import { JuegoTateti } from '../../clases/juego-tateti';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { JuegoMemotest } from '../../clases/juego-memotest';
import { JuegoOrdenarNumeros } from '../../clases/juego-ordenar-numeros';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;
 resultadosAdivina : JuegoAdivina[] = [];
  resultadosAgilidad : JuegoAgilidad[] = [];
  resultadosAnagrama : JuegoAnagrama[] = [];
  resultadosPPT : JuegoPiedraPapelTijera[] = [];
  resultadosTateti : JuegoTateti[] = [];
  resultadosMemotest : JuegoMemotest[] = [];
  resultadosOrdenar : JuegoOrdenarNumeros[] = [];
  resultados : Observable<any>;
  filtroJuego : string = "";

  constructor(public servicio : MiHttpService) {
    this.resultados = this.servicio.traerDatosAdivina();
    this.resultados.subscribe( data => {
      this.resultadosAdivina = [];

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoAdivina = new JuegoAdivina();
        unResultado.intentos = data[i].intentos;
        unResultado.gano = data[i].gano;
        unResultado.juego = data[i].juego;
        unResultado.numeroIngresado = data[i].numeroIngresado;
        unResultado.numeroSecreto = data[i].numeroSecreto;
        unResultado.resultado = data[i].resultado;
        unResultado.usuario = data[i].usuario;
        this.resultadosAdivina.push(unResultado);
      }
    });

    this.resultados = this.servicio.traerDatosAgilidad();
    this.resultados.subscribe( data => {
      this.resultadosAgilidad = [];   

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoAgilidad = new JuegoAgilidad();
        unResultado.cantAciertos = data[i].cantAciertos;
        unResultado.cantCuentas = data[i].cantCuentas;
        
        unResultado.gano = data[i].gano;
        unResultado.juego = data[i].juego;
        unResultado.numeroIngresado = data[i].numeroIngresado;
        unResultado.resultado = data[i].resultado;
        unResultado.usuario = data[i].usuario;
        this.resultadosAgilidad.push(unResultado);
      }
    });

    this.resultados = this.servicio.traerDatosAnagrama();
    this.resultados.subscribe( data => {
      this.resultadosAnagrama = [];   

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoAnagrama = new JuegoAnagrama();
       
        unResultado.gano = data[i].gano;
        unResultado.juego = data[i].juego;
        unResultado.resultado = data[i].resultado;
        unResultado.usuario = data[i].usuario;
        unResultado.palabraOrdenada = data[i].palabraOrdenada;
        this.resultadosAnagrama.push(unResultado);
      }
    });

    this.resultados = this.servicio.traerDatosPiedraPapelTijera();
    this.resultados.subscribe( data => {
      this.resultadosPPT = [];   

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoPiedraPapelTijera = new JuegoPiedraPapelTijera();
        unResultado.gano = data[i].gano;       
        unResultado.juego = data[i].juego;
        unResultado.resultado = data[i].resultado;
        unResultado.usuario = data[i].usuario;
        this.resultadosPPT.push(unResultado);
      }
    });

    this.resultados = this.servicio.traerDatosTateti();
    this.resultados.subscribe( data => {
      this.resultadosTateti = [];  
      console.log(data); 
      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoTateti = new JuegoTateti();
                      
        unResultado.usuario = data[i].usuario;
        unResultado.resultado = data[i].resultado;
        if(unResultado.resultado != null || unResultado.resultado != "")
        { 
          this.resultadosTateti.push(unResultado);
        }
        console.log(unResultado);
      }
    });
    console.log(this.resultadosTateti);

    this.resultados = this.servicio.traerDatosMemotest();
    this.resultados.subscribe( data => {
      this.resultadosMemotest = [];

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoMemotest = new JuegoMemotest();

        unResultado.usuario = data[i].usuario;
        unResultado.resultado = data[i].cantidad;

        if(unResultado.resultado != null || unResultado.resultado != "")
          this.resultadosMemotest.push(unResultado);
      }
    });
    
    this.resultados = this.servicio.traerDatosOrdenar();
    this.resultados.subscribe( data => {
      this.resultadosOrdenar = [];

      for (let i = 0; i < data.length; i++) {
        var unResultado : JuegoOrdenarNumeros = new JuegoOrdenarNumeros();
        
        unResultado.usuario = data[i].usuario;
        unResultado.resultado = data[i].resultado;

        if(unResultado.resultado != null || unResultado.resultado != "")
          this.resultadosOrdenar.push(unResultado);
      }
    });
}

  ngOnInit() {
  }
}

interface Game {
  name: string;
  code: string;
}