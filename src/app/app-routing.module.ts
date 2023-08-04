import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorrosComponent } from './components/ahorros/ahorros.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { HomeComponent } from './components/home/home.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { LoginComponent } from './components/login/login.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
  { path: 'ingresos', component: IngresosComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'ahorro', component: AhorrosComponent  },



  // Otras rutas que puedas tener
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
