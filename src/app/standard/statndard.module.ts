import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent,RegistrationComponent,LoginComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class StandardModule { }
