import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

constructor(
  private router: Router

    ) {
    this.email = '';
    this.password = '';
  }


  login(): void {
    if (this.email && this.password) {
    }
   
  }

  registrar(): void {
    if (this.email && this.password) {

      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Por favor, ingresa tu nombre de usuario y contraseña');
    }


  }
}





