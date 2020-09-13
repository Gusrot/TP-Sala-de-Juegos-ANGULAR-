/*import { log } from 'util';
import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  constructor( public http: Http ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}*/
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase/app";
//import "rxjs/add/operator/map";
import { Jugador } from "../../clases/jugador";
import { Juego } from '../../clases/juego';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { Observable } from 'rxjs/Observable';
//import { JuegoPropio } from '../clases/juego-propio';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoAgilidad } from '../../clases/juego-agilidad';
import { JuegoTateti } from '../../clases/juego-tateti';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';

@Injectable()
export class MiHttpService {
  respuestasAFL : AngularFireList<any>;
  respuestasObservable : Observable<any>;
  
  constructor(
    public afAuth : AngularFireAuth,
    public afDB : AngularFireDatabase,
    private http: Http
  ) { }

  logOut()
  {
    return this.afAuth.auth.signOut();
  }

  registrar(usuario : Jugador)
  {
    return new Promise( (resolve , reject) =>
      {
        this.afAuth.auth.createUserWithEmailAndPassword(usuario.email,usuario.pass)
        .then( userData => resolve(userData), err => reject(err));
      }    
    );
  }

  logear(usuario : Jugador)
  {
    return new Promise( (resolve , reject) =>
      {
        this.afAuth.auth.signInWithEmailAndPassword(usuario.email,usuario.pass)
        .then( userData => resolve(userData), err => reject(err));
      }    
    );
  }

  getAuth()
  {
    return this.afAuth.authState.map( auth => auth);
  }

  traerDatosAdivina()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAdivina");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuacionAdivina(juegoAdivina : JuegoAdivina)
  {
    const resultadosAdivina = this.afDB.list("/resultadosAdivina/");
    resultadosAdivina.push(juegoAdivina);
  }

  traerDatosAgilidad()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAgilidad");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAgilidad(juegoAgilidad : JuegoAgilidad)
  {
    const resultadosAgilidad = this.afDB.list("/resultadosAgilidad/");
    resultadosAgilidad.push(juegoAgilidad);
  }

  traerDatosAnagrama()
  {
      this.respuestasAFL = this.afDB.list("/resultadosAnagrama");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónAnagrama(juegoAnagrama : JuegoAnagrama)
  {
    const resultadosAnagrama = this.afDB.list("/resultadosAnagrama/");
    resultadosAnagrama.push(juegoAnagrama);
  }

  traerDatosPiedraPapelTijera()
  {
      this.respuestasAFL = this.afDB.list("/resultadosPiedraPapelTijera");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónPiedraPapelTijera(juegoPiedraPapelTijera : JuegoPiedraPapelTijera)
  {
    const resultadosPiedraPapelTijera = this.afDB.list("/resultadosPiedraPapelTijera/");
    resultadosPiedraPapelTijera.push(juegoPiedraPapelTijera);
  }

  traerDatosTateti()
  {
      this.respuestasAFL = this.afDB.list("/resultadosTateti");
      this.respuestasObservable = this.respuestasAFL.valueChanges();
      return this.respuestasObservable;
  }

  guardarPuntuaciónTateti(juegoTateti : JuegoTateti)
  {
    const resultadosTateti = this.afDB.list("/resultadosTateti/");
    resultadosTateti.push(juegoTateti);
  }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
