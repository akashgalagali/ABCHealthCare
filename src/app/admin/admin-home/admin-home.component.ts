import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
medicines:Medicine[]=[];
categories:Category[]=[];
users:User[]=[];
email:string="";

  constructor(private _as: AccountService, private _router:Router, private _us:UsersService, private _cs:CategoryService, private _ms:MedicineService) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
  else{
    this.getUsersViaService();
    this.getMedicineViaService();
    this.getCategoryeViaService();
    this.email=_as.email;

  }
  }
  getUsersViaService(){   
    this._us.getUsersViaApi().subscribe(response=>this.users=response);
  
    } 
    getCategoryeViaService(){   
      this._cs.getCategorysViaApi().subscribe(response=>this.categories=response);
       
      } 
      getMedicineViaService(){   
        this._ms.getMedicinesViaApi().subscribe(response=>this.medicines=response);  
     
        } 
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
