import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUname='';
  newPwd='';
  location='';
  mail='';
  newMobile='';
  msg='';
  cust:any;
  idUsers:any;

    constructor(private _ac: AccountService,private _router:Router , private _us:UsersService) { }
  addCust(){
   this.cust= {"name":this.newUname,"password":this.newPwd,"role":"customer","location":this.location,"email":this.mail,"mobile":this.newMobile}
    this._us.createUserViaApi(this.cust).subscribe(result=> this.msg = "created"); ;
    this._router.navigate(['./login'])
  }
  ngOnInit(): void {
  }

}
