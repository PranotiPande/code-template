import { Component, EventEmitter,Input, OnInit, Output,SimpleChanges} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
emparr:Employee[];
ob:Employee;
flag:boolean =false;
    Id:number;
    FirstName:string;
    LastName:string;
    Gender:string;
    ContactNo:string;
    Address:string;
    Technology:string;
    email:string;
    password:string;
    role:string;zz

 @Input("eob") obj:Employee;
 @Output() myevent = new EventEmitter();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(){
    this.employeeService.getAllEmployeeDetails()
    .subscribe(result=>{
      console.log(result);
      this.emparr=result
    });
  }

  AddEmployeeDetails(){
    this.flag=true;
  }
  updateEmployeeDetails(emp:Employee){
    this.flag=true;
    console.log("***in employee update****");
    this.ob=emp;
  }
  deleteEmployeeDetails(e : Employee) {
    this.employeeService.deleteEmployeeDetails(e).subscribe(
      result=>{
        this.emparr=result;
        console.log(e);
        
      }
    );
    //this.router.navigate([]);
    
  }
}
