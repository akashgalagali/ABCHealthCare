import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-disable-medicine',
  templateUrl: './disable-medicine.component.html',
  styleUrls: ['./disable-medicine.component.css']
})
export class DisableMedicineComponent implements OnInit {
email:string="";
  medicines?:Medicine[];
  medicine:Medicine= new Medicine();
  msg:string="";

    constructor(private _ms: MedicineService ,private _as:AccountService,private _router:Router) { 
      if(_as.loggedIn==false){
        this._router.navigate(['./login'])
      }else{
this.getmedicinesViaService();
this.email=_as.email;
      }
  }  
   getmedicinesViaService(){   
       this._ms.getMedicinesViaApi().subscribe(response=>this.medicines=response);  
       
      }  

      getMedicineByIdViaService(id?:number){
        this._ms.getMedicineByIdViaApi(Number(id)).subscribe(result=>this.medicine=result);
      }

      updateMedicineViaService(){
        if(this.medicine.available)
          this.medicine.available=false;
        else
        this.medicine.available=true;
        this._ms.updateMedicineViaApi(this.medicine).subscribe(result=> this.msg = "updated")
        this._router.navigate(["./adminMedicines"])
      }
  
      logout(){
        this._as.loggedIn=false;
        this._router.navigate(['']);
      }
  ngOnInit(): void {
  }

}
