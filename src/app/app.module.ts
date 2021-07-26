import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import {EmployeeService} from './services/employee.service';
import { LoginService } from './services/login.service';
import { SPAModule } from './spa/spa.module';
import {StandardModule} from './standard/statndard.module';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule,
    SPAModule,
    StandardModule,
    RouterModule
   ],
  exports:[],
  providers: [
    EmployeeService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
