import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { IncomeComponent } from './components/income/income.component';
import { HomeComponent } from './components/home/home.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { AhorrosComponent } from './components/ahorros/ahorros.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearIngresoComponent } from './components/ingresos/crear-ingreso/crear-ingreso.component';
import { IngresosserviceService } from './services/registroservices/ingresosservice.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent }, // Agrega esta línea para la página de inicio
  { path: 'ingresos', component: IngresosComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'ahorro', component: AhorrosComponent },
  { path: 'registro', component: RegistroComponent },
  // Otras rutas que puedas tener
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    IncomeComponent,    
    HomeComponent,    
    PresupuestosComponent,
    GastosComponent,
    AhorrosComponent,
    IngresosComponent,
    RegistroComponent,
    CrearIngresoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Usa forRoot para cargar la configuración de rutas
    FormsModule,
    HttpClientModule
  ],
  providers: [IngresosserviceService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
