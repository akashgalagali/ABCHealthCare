import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
email:string="";
  users?:User[];  
  constructor(private _cs: UsersService , private _as:AccountService, private _router:Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }else{
this.getUsersViaService();
this.email=_as.email;
    }
  }  
   getUsersViaService(){   
       this._cs.getUsersViaApi().subscribe(response=>this.users=response);  
       }  
        ngOnInit(): void {
  }

  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
