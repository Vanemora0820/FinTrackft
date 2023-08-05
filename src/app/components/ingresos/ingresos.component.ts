import { Component } from '@angular/core';
import { Ingreso } from 'src/app/models/ingresosmodels/Ingreso';
import { IngresosserviceService } from 'src/app/services/registroservices/ingresosservice.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresos: Ingreso[] = [];
  totalIngresos: number = 0;
  nuevoIngreso: Ingreso = {
    monto: 0,
    fecha: new Date(),
    descripcion: '',
    categorias: [], // Inicializar categorias como arreglo vacío
    usuarios: [], // Inicializar usuarios como arreglo vacío
    id: 0
  };
  
  showModal: boolean = false;

  constructor(
    private ingresosservice: IngresosserviceService) {}

  ngOnInit(): void {
    this.obtenerIngresos();
    this.calcularTotalIngresos();
  }

  obtenerIngresos(): void {
    this.ingresosservice.obtenerIngresos().subscribe(
      ingresos => {  
        this.ingresos = ingresos;
        console.log(ingresos); // Agregar este log para depurar la respuesta recibida
      },
      error => {
        console.error('Error al obtener los ingresos:', error);
      }
    );
  }

  calcularTotalIngresos(): void {
    // Aquí debes llamar a tu servicio para calcular el total de ingresos
    // Por ejemplo, ingresoService.calcularTotal().subscribe((total) => this.totalIngresos = total);
  }

  openModal(): void {    
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  crearIngreso(): void {
    // Aquí debes llamar a tu servicio para crear un nuevo ingreso
    // Por ejemplo, ingresoService.crearIngreso(this.nuevoIngreso).subscribe(() => this.obtenerTodosLosIngresos());
    this.closeModal();
  }
}