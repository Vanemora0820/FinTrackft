import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private router: Router) {}

  nombres!: string;
  apellidos!: string;
  correo!: string;
  celular!: string;
  sexo!: string;

  registrar() {
    // Aquí puedes implementar la lógica para enviar los datos del formulario al backend
    // Por ejemplo, puedes llamar a un servicio que haga la petición HTTP al servidor
    // y manejar la respuesta del servidor según tus necesidades.
    console.log('Datos del formulario:');
    console.log('Nombres:', this.nombres);
    console.log('Apellidos:', this.apellidos);
    console.log('Correo:', this.correo);
    console.log('Celular:', this.celular);
    console.log('Sexo:', this.sexo);
  }

  cancelar() {
    // Función para cancelar y regresar al menú de login
    this.router.navigate(['/login']); // Redireccionar al componente "login"
  }

}