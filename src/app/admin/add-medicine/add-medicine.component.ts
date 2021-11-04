import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
email:string="";
  medicine:Medicine=new Medicine();  
  msg:string="";
  cid?:number;
category?:Category;
categories?:Category[];
  constructor(private _ms: MedicineService, private _cs: CategoryService,private _as:AccountService,private _router:Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.getCategories();
    this.email=_as.email;
  }  
   postMedicineViaService(){   
      console.log(this.medicine.cid);
       this._ms.createMedicineViaApi(this.medicine).subscribe(result=> this.msg = "created");  
       this._router.navigate(["./adminMedicines"]);
       }
// getCategoryById(){
//   this._cs.getCategoryByIdViaApi(Number(this.cid)).subscribe(res=> this.medicine.cid=res);
// }
getCategories(){
  this._cs.getCategorysViaApi().subscribe(res=>this.categories=res);
}
  ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
