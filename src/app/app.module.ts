import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginserviceComponent } from './services/loginservice/loginservice.component';
import { IncomeComponent } from './components/income/income.component';
import { IncomeServiceComponent } from './services/income-service/income-service.component';
import { HomeComponent } from './components/home/home.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { AhorrosComponent } from './components/ahorros/ahorros.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent }, // Agrega esta línea para la página de inicio
  { path: 'ingresos', component: IngresosComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'ahorro', component: AhorrosComponent },

  // Otras rutas que puedas tener
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginserviceComponent,
    IncomeComponent,
    IncomeServiceComponent,
    HomeComponent,    
    PresupuestosComponent,
    GastosComponent,
    AhorrosComponent,
    IngresosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Usa forRoot para cargar la configuración de rutas
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
