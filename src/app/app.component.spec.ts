import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { By } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';

describe('AppComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        FormsModule,
        ComponentsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'retoAsincrono_test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('retoAsincrono_test');
  });

  // Probando evento click de button btnEnviar
  it('Testing de login desde boton', ()=>{
    // Pasando valores a los atributos user y pwd
    component.name='jairo';
    component.pass = 'manchay12';

    // Detectar el evento click del boton btnEnviar
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();

    // Prueba
    expect(component.logeado).toEqual(true);
  });
});
