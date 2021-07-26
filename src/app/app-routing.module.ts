import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './standard/home/home.component';
import {LoginComponent} from './standard/login/login.component';
import {RegistrationComponent} from './standard/registration/registration.component';
import{StandardModule} from'./standard/statndard.module';
import{AdminComponent} from './employee/Admin/admin.component';
import{EmployeeComponent} from './employee/employee/employee.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin' , component:AdminComponent},
  {path:'employee' , component:EmployeeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
