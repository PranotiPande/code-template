import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';
import { EmployeeModule } from '../employee.module';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  emparr:Employee[];
  ob:Employee;
  flag:boolean =false;
      id:number;
      firstName:string;
      lastName:string;
      gender:string;
      contactNo:string;
      address:string;
      technology:string;
      email:string;
      password:string;
      role:string;
   @Input("eob") obj:Employee;
   @Output() myevent = new EventEmitter();
    constructor(private employeeService:EmployeeService) { }


    ngOnChanges(simple:SimpleChanges){
      console.log("in ngOnChange");
      if(simple["obj"].currentValue!=simple["obj"].previousValue){
        console.log(simple);
        this.id=simple["obj"].currentValue.id;
        this.firstName=simple["obj"].currentValue.firstName;
        this.lastName=simple["obj"].currentValue.lastName;
        this.technology=simple["obj"].currentValue.technology;
        this.address=simple["obj"].currentValue.address;
        this.gender=simple["obj"].currentValue.gender;
        this.contactNo=simple["obj"].currentValue.contactNo;
        this.email=simple["obj"].currentValue.email;
        this.password=simple["obj"].currentValue.password;
        this.role=simple["obj"].currentValue.role;
      }
    }
    UpdateEmployeeDetails(){
      let e=new Employee(this.id,this.firstName,this.lastName,this.gender,this.contactNo,this.address,this.technology,this.email,this.password,this.role);
      console.log(e);
      this.employeeService.updateEmployeeDetails(e).subscribe(result=>{
        console.log("updated");
        this.myevent.emit(result);
        this.id=0;
        this.firstName="";
        this.lastName="";
        this.gender="";
        this.technology="";
        this.address="";
        this.contactNo="";
        this.email="";
        this.password="";
        this.role="";
      });
      
    }

  AddEmployeeDetails(){
    let e=new Employee(this.id,this.firstName,this.lastName,this.gender,this.contactNo,this.address,this.technology,this.email,this.password,this.role);
    console.log("********in Employee form add******");
    console.log(e);
    this.employeeService.addEmployeeDetails(e)
    .subscribe(r=>{console.log(r);
      /*this.myevent.emit(r);
      this.id=0;
      this.firstName="";
      this.lastName="";
      this.gender="";
      this.technology="";
      this.address="";
      this.contactNo="";*/

    });
  }

}
