import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public autenticacion: AuthenticationService) {}

  usuariologueado = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuariologueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.cambioLogeadoStatus$.subscribe(
      (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
  }

  logout(){
    alert("Te deslogueaste");
    this.autenticacion.logout();
  }

}
