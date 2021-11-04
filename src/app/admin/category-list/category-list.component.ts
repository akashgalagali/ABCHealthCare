import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories?:Category[];  
  email:string="";
  constructor(private _cs:CategoryService , private _as:AccountService,private _router:Router) { 
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }else{
this.getCategoriesViaService();
this.email=_as.email;
    }
  }  
   getCategoriesViaService(){   
       this._cs.getCategorysViaApi().subscribe(response=>this.categories=response);  
       }  
        ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
