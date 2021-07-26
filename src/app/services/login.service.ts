import { Injectable } from '@angular/core';
import {Login} from "../models/login.model";
import {HttpClient} from '@angular/common/http';

@Injectable(
)
export class LoginService{
    parr:Login[];
    private baseurl="http://localhost:8080/employee/login";
    constructor(private httpC:HttpClient)
    {}
   
    authenticateEmployee(email:string,password:string)
  {
    console.log("in login service");
    const body={
      email:email,
      password:password
    }
    return this.httpC.post(this.baseurl,body);
  }
}