import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  readonly IsLogged = 'islogged';
  public urlUsuarioIntentando="";

  public cambioLogeadoStatusSujeto = new Subject<boolean>();
  public cambioLogeadoStatus$ = this.cambioLogeadoStatusSujeto.asObservable();
  login(){
    localStorage.setItem(this.IsLogged, 'true');
    this.cambioLogeadoStatusSujeto.next(true);
  }

  logout(){
    localStorage.removeItem(this.IsLogged);
    this.cambioLogeadoStatusSujeto.next(false);
  }

  isLoggedIn(url: string){
    const isLogged = localStorage.getItem(this.IsLogged);
    if(!isLogged){
      this.urlUsuarioIntentando = url;
      return false;
    }

    return true;
  }
}
