import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-search-medicine',
  templateUrl: './search-medicine.component.html',
  styleUrls: ['./search-medicine.component.css']
})
export class SearchMedicineComponent implements OnInit {
email:string="";
  m:Medicine= new Medicine();  
  name1:string="";
  name:string="";
  desc:string="";
  price:string="";
  seller:string="";
  available:string="";
  constructor(private _cs: MedicineService,private _as:AccountService,private _router:Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.email=_as.email;
  }  
   getmedicineByName(){   
       this._cs.getMedicineByNameViaApi(this.name1).subscribe(response=>this.m=response);  
       this.name="Name : ";
       this.desc="Description : ";
       this.price="Price : ";
       this.seller="Seller : ";
       this.available="Available : ";
       }  

  ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
