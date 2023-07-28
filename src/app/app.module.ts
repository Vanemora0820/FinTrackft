import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginserviceComponent } from './services/loginservice/loginservice.component';
import { IncomeComponent } from './income/income.component';
import { IncomeServiceComponent } from './services/income-service/income-service.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },  


  // Otras rutas
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginserviceComponent,
    IncomeComponent,
    IncomeServiceComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
