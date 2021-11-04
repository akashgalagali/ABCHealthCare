import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-sorted-list-medicines',
  templateUrl: './sorted-list-medicines.component.html',
  styleUrls: ['./sorted-list-medicines.component.css']
})
export class SortedListMedicinesComponent implements OnInit {
  email:string="";
medicines?:Medicine[];
  constructor(private _ms:MedicineService, private _as:AccountService, private _router: Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }else{
    this.getSortedList();
  this.email=_as.email;
}
  }
getSortedList(){
  this._ms.getMedicinesSortCategoryViaApi().subscribe(res=>this.medicines=res);
}
  ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
