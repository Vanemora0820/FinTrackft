import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      if (this.email === 'jahve20@hotmail.com' && this.password === 'admin') {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']); 
      } else {
        console.log('Inicio de sesión fallido. Verifica tus credenciales.');
      }
    } else {
      console.log('Por favor, ingresa tu nombre de usuario y contraseña');
    }
  }

  register() {
    this.router.navigate(['/registro']); // Redireccionar al componente "registro"
  }
}