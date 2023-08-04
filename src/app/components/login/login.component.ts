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
    // Verifica que el correo electrónico y la contraseña no estén vacíos.
    if (this.email && this.password) {
      // Aquí puedes simular una lógica de inicio de sesión exitosa.

      // Simulación de inicio de sesión exitoso (ejemplo):
      if (this.email === 'jahve20@hotmail.com' && this.password === 'admin') {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // Redireccionar a la página de inicio después del inicio de sesión exitoso.
      } else {
        console.log('Inicio de sesión fallido. Verifica tus credenciales.');
      }
    } else {
      console.log('Por favor, ingresa tu nombre de usuario y contraseña');
    }
  }

  registrar(): void {
   
    if (this.email && this.password) {
   
    } else {
      console.log('Por favor, ingresa tu nombre de usuario y contraseña');
    }
  }
}