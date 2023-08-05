export class Ingreso {
    id: number; // Puedes ajustar el tipo de dato según el identificador que uses en tu backend
    monto: number;
    fecha: Date; // Puedes usar el tipo 'Date' si lo prefieres, pero asegúrate de ajustar la forma de asignar la fecha en el formulario
    descripcion: string;
    categorias: string[];
    usuarios: string[];;
  
    constructor() {
      this.id = 0;
      this.monto = 0;
      this.fecha = new Date();
      this.descripcion = '';
      this.categorias = [];
      this.usuarios = [];
    }
  }  
  
  