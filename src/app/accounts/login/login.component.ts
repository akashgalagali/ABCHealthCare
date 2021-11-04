import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  pwd='';
  role='';
  
    constructor(private _as:AccountService,private _router: Router) { }
  validateUser(){
    if(this._as.validateUser(this.email,this.pwd,this.role)){
      if(this.role=='admin'){
        alert("Welcome to Admin page");
     
        this._router.navigate(['./adminHome',this.email]);
      }
      else{
        alert("Welcome to Customer page");
 
        this._router.navigate(['./custHome',this.email]);
      }
    }
    else{
      alert("Invalid Credientials");
    }
  }
  ngOnInit(): void {
  }

}
