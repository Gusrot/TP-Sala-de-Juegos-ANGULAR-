import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  displayLogin: boolean = false;
  displayRegistro: boolean = false;
  logeado : boolean = true;
  usuarioLogeado : boolean = false;
  nombreUsuario : string;

  constructor(public auth:MiHttpService, public routes:ActivatedRoute, public router:Router) {  }

  ngOnInit() {
    this.auth.getAuth().subscribe( user =>{
      if(user)
      { 
          let mail = user.email;
          let splitted = mail.split("@",1);
          this.nombreUsuario = splitted[0];
   
        this.logeado = false;    
      }
      else
      {
        this.usuarioLogeado = false;
      }
    });
  }
}
