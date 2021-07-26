import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable,Subject} from 'rxjs';
import {Employee} from '../models/employee.model';

@Injectable()

  export class EmployeeService{
      emparr:Employee[];
     
     private baseUrl="http://localhost:8080/employee";
     constructor(private httpC:HttpClient) { }

        getAllEmployeeDetails():Observable<Employee[]>{
        return this.httpC.get<Employee[]>(this.baseUrl);
        }


        addEmployeeDetails(e:Employee):Observable<Employee[]>{
            var subject = new Subject<Employee[]> ();
                this.httpC.post<Employee>(this.baseUrl,e).subscribe(r=>{
               console.log(" employee info added suceessfully.");
               console.log(r);
                });
                return subject.asObservable();
          }

          updateEmployeeDetails(ob:Employee):Observable<Employee[]>{
            var subject=new Subject<Employee[]>();
            this.httpC.put(this.baseUrl+"/"+ob.id,ob).subscribe(
              result=>{
                console.log("from Employee Services!!!!!!!!");
                console.log(ob);
                this.httpC.get<Employee[]>(this.baseUrl).subscribe(
                  result=>{ subject.next(result);
                  });
              });
              return subject.asObservable();  
            }


            deleteEmployeeDetails(e:Employee):Observable<Employee[]>{
                var subject=new Subject<Employee[]>();
                 this.httpC.delete(this.baseUrl+"/"+e.id).subscribe(r=>{
                      console.log("deleted");
                      console.log(r);
                      this.httpC.get<Employee[]>(this.baseUrl).subscribe(result=>{
                      subject.next(result);
            
                     });
                 });
                 return subject.asObservable();
         }
  
  }
