import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
email:string="";
  category:Category=new Category();  
  msg:string="";
  constructor(private _cs: CategoryService,private _as:AccountService,private _router:Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.email=_as.email;
  }  
   postCategoriesViaService(){   
       this._cs.createCategoryViaApi(this.category).subscribe(result=> this.msg = "created");  
       this._router.navigate(["./categories"]);
       }
  ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
