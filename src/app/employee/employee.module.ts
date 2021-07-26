import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin/admin.component';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';



@NgModule({
  declarations: [
    AdminComponent,
    EmployeeFormComponent,
    EmployeeComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    AdminComponent,
    EmployeeFormComponent
  ]
})
export class EmployeeModule { }
