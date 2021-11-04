import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines?:Medicine[];
  email:string="";
  constructor(private _cs:MedicineService,private _router:Router ,private _as:AccountService) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }else{
this.getmedicinesViaService();
this.email=_as.email;
    }
  }  
   getmedicinesViaService(){   
       this._cs.getMedicinesViaApi().subscribe(response=>this.medicines=response);  
       
      }  
        ngOnInit(): void {
  }
  update(id?:number){
    this._router.navigate(['./update',id]);
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
