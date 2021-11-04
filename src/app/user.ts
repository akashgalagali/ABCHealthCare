export class User {
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    location?:string;
    role?:string;
    mobile?:string;
    constructor(id?:number,Name?:string,Email?:string,Password?:string,
        Location?:string,Role?:string,Mobile?:string){
       this.id=id; this.name=Name;
       this.email=Email;
       this.password=Password;this.role=Role;
       this.location=Location;this.mobile=Mobile;
    }
    
}

