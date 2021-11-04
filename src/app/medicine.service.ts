import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
med:any;
  url: string = 'https://abcapi.azurewebsites.net/api/medicines'; 
  getMedicinesViaApi() { 
    return this._http.get<Medicine[]>(this.url); 
  } 
  getAvailableMedicinesViaApi() { 
    return this._http.get<Medicine[]>(`${this.url}/aMedicines`); 
  }
  getMedicinesSortCategoryViaApi() { 
    return this._http.get<Medicine[]>(`${this.url}/categories`); 
  }
  getMedicineByIdViaApi(id:number){
    return this._http.get<Medicine>(`${this.url}/${id}`);
 }
 getMedicineByNameViaApi(name:string){
  return this._http.get<Medicine>(`${this.url}/name/${name}`);
}
 createMedicineViaApi(e:Medicine){
   this.med={"id":e.id,"name":e.name,"description":e.description,"image":e.image,"price":e.price,"cidId":Number(e.cid),"seller":e.seller,"available":e.available}
   return this._http.post(`${this.url}`,this.med,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   });
 }
 updateMedicineViaApi(e:Medicine){
  return this._http.put(`${this.url}/${e.id}`,e,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
} 
deleteMedicineViaApi(id:number){
  return this._http.delete(`${this.url}/${id}`);
}
  constructor(private _http:HttpClient) { }
}
