import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    LoginComponent,
    PantallaComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    PantallaComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
