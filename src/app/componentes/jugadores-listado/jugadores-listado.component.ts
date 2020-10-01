import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../clases/jugador';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:Observable<any>;
  jugadores:Jugador[] = [];
  
  constructor(public miServicio:MiHttpService) {
    this.listado = this.miServicio.traerUsuarios();
    this.listado.subscribe( data => {
      this.jugadores = [];
      
      for (let i = 0; i < data.length; i++) {
        var unResultado : Jugador = new Jugador();
        unResultado.email = data[i]
        this.jugadores.push(unResultado);
      }
      console.log(this.jugadores);
    });
    
  }

  ngOnInit() {
  }
}
