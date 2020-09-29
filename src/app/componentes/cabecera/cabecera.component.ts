import { Component, OnInit } from '@angular/core';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private miServicio:MiHttpService) { }

  Logout()
  {
    this.miServicio.logOut();
  }

  ngOnInit() {    
  }

}
