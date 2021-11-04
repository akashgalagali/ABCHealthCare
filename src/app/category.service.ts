import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'https://abcapi.azurewebsites.net/api/tblcategories'; 
  getCategorysViaApi() { 
    return this._http.get<Category[]>(this.url); 
  }
  getCategoryByIdViaApi(id:number){
    return this._http.get<Category>(`${this.url}/${id}`);
 }
 createCategoryViaApi(e:Category){
   return this._http.post(`${this.url}`,e,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   });
 }
 updateCategoryViaApi(e:Category){
  return this._http.put(`${this.url}/${e.id}`,e,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
} 
deleteCategoryViaApi(id:number){
  return this._http.delete(`${this.url}/${id}`);
}
  constructor(private _http:HttpClient) { }
}
