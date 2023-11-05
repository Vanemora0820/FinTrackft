import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private router: Router) {}
  
  usuario!: string;
  password!: string;
  nombres!: string;
  apellidos!: string;
  correo!: string;
  celular!: string;
  sexo!: string;
  mostrarPassword: boolean = false;

  registrar() {   
    console.log('Datos del formulario:');
    console.log('Usuario', this.usuario);
    console.log('Contraseña', this.password);    
    console.log('Nombres:', this.nombres);
    console.log('Apellidos:', this.apellidos);
    console.log('Correo:', this.correo);
    console.log('Celular:', this.celular);
    console.log('Sexo:', this.sexo);
  }

  cancelar() {   
    this.router.navigate(['/login']);
  }

  mostrarOcultarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

}