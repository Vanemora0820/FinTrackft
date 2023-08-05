import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingreso } from 'src/app/models/ingresosmodels/Ingreso';

@Injectable({
  providedIn: 'root'
})
export class IngresosserviceService {

  private baseUrl = 'http://localhost:8080/ingreso'; // URL a consumir servicio en Back

  constructor(private http: HttpClient) { }

  obtenerIngresos(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(`${this.baseUrl}/ingresos`);
  }


}
