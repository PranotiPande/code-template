import { Component,EventEmitter, OnInit,Input,Output} from '@angular/core';
import{Login} from '../../models/login.model';
import {LoginService} from '../../services/login.service';
import {EmployeeService} from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  @Input("lob") log:Login;
  @Output() myevent=new EventEmitter();
  constructor(private loginService:LoginService,private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  authenticateEmployee(){
    let l=new Login(this.email,this.password)
    this.loginService.authenticateEmployee(this.email,this.password)
    .subscribe(response=>{
      if(response['status']=="success"){
     console.log(response);
     const data=response['data'];
         if(data['role']=="EMPLOYEE"){
              sessionStorage['firstName']=data['firstName'];
              sessionStorage['lastName']=data['lastName'];
              sessionStorage['id']=data['id'];
              sessionStorage['address']=data['address'];
              sessionStorage['gender']=data['gender'];
              sessionStorage['contactNo']=data['contactNo'];
              sessionStorage['technology']=data['technology'];
              sessionStorage['email']=data['email'];
              console.log("*****************Employee***********");
            this.router.navigate(['/employee']);
         }
         else if(data['role']=="ADMIN")
         {
          sessionStorage['firstName']=data['firstName'];
          sessionStorage['lastName']=data['lastName'];
          sessionStorage['id']=data['id'];
          sessionStorage['address']=data['address'];
          sessionStorage['gender']=data['gender'];
          sessionStorage['contactNo']=data['contactNo'];
          sessionStorage['technology']=data['technology'];
          sessionStorage['email']=data['email'];
           console.log("*****************Admin***********");
            this.router.navigate(['/admin']);
         }

         else this.router.navigate(['/login']);
         
    } 
 },
);
}
}



