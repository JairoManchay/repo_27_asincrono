import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authen: AuthenticationService, private route: Router){}
  redireccion='/vista';

  datos: any[]=[
    {username: 'jairo', pass: 'manchay12'},
    {username: 'rodri', pass: 'manchay10'},
    {username: 'Matt', pass: 'manchay15'}
  ]

  name: string = "";
  pass: string = "";
  logeado=false;

  login(){
    if(this.name=="" || this.pass==""){
      return;
    }else{

      for(let i=0; i<this.datos.length; i++){
        if(this.datos[i].username==this.name && this.datos[i].pass==this.pass){
          alert("Datos ingresado");
          this.authen.login();
          this.redireccion = this.authen.urlUsuarioIntentando;
          this.authen.urlUsuarioIntentando = '/vista';
          this.route.navigate([this.redireccion]);
          this.logeado=true;
        }
      }
    }

  }
}
