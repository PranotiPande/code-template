import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emparr:Employee[];
  ob:Employee;
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
  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
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
    this.router.navigate(['/login']);
  }
}
