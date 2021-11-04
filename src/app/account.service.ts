import { Injectable } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  loggedIn:boolean=false;
  users:User[]=[];
  email:string="";
  constructor(private _user: UsersService) { 
this.getUsersViaService();
  }
  validateUser(email:string,pwd:string,role:string):boolean{
    
    var user=this.users.filter(x=>x.email==email)[0];
    if(user.email==email && user.password==pwd && user.role==role){
      this.loggedIn= true;
      this.email=user.email;
    }
    else{
      this.loggedIn=false;
    }
    return this.loggedIn;
  }
  getUsersViaService(){   
    this._user.getUsersViaApi().subscribe(response=>this.users=response);  
    }  
}
