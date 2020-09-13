import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { MiHttpService } from '../../servicios/mi-http/mi-http.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  display: boolean = false;
  usuario : Jugador;
  pass2 : string;
  email : string;
  pass : string;
  errorMsg : string = "";

  constructor(public auth : MiHttpService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
  }

  Registrar()
  {
    if(this.email == null || this.pass == null || this.pass2 == null)
    {
      this.error("Complete todos los campos !!!");

    }
    else
    {
      console.log('hola');
      if(this.pass != this.pass2)
      {
        this.error("Las contraseñas no coinciden");
      }
      else
      {
        this.usuario = new Jugador(this.email,this.pass);
          this.auth.registrar(this.usuario).then((res)=>{console.log("Bien"),console.log(res);
        
          this.router.navigate(['/Menu']);
        })
          .catch((err) => {
            console.log(err);
            if(err.code == "auth/invalid-email")
            {
              this.error("El email ingresado no tiene un formato valido");
            }
            else
            {
              if(err.code ==  "auth/weak-password")
              {
                this.error("La contraseña debe ser de al menos 6 caracteres");
              }
              else
              {
                if(err.code == "auth/email-already-in-use")
                {
                  this.error("El email ya esta en uso");
                }
                else
                {
                 this.error("Error de conexion con el servidor");
                }
              }
            }
          });
      }
    }
  }

  error(Msg : string)
  {
    this.errorMsg = Msg;
    this.showDialog();
  }

  showDialog() {
    this.display = true;
  }
}
