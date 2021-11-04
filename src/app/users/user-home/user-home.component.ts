import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  m:Medicine= new Medicine();  
  name1:string="";
  name:string="";
  desc:string="";
  price:string="";
  seller:string="";
  available:string="";
  sub: any;
  email:string="";
  constructor(private _cs: MedicineService,private route:ActivatedRoute,private _as:AccountService,private _router: Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
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
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.email=params["email"];
    });
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
