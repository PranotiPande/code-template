export class Employee{

    id:number;
    firstName:String;
    lastName:String;
    gender:string;
    contactNo:String;
    address:String;
    technology:string;
    email:string;
    password:string;
    role:string

    constructor(ID:number,firstName:string,lastName:string,Gender:string,contactNo:string,
        Address:string,Technology:string,email:string,password:string,role:string){
        this.id=ID;
        this.firstName=firstName;
        this.lastName=lastName;
        this.gender=Gender;
        this.contactNo=contactNo;
        this.address=Address;
        this.technology=Technology;
        this.email=email;
        this.password=password;
        this.role=role;

    }
}