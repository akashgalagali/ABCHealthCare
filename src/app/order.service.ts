import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = 'https://abcapi.azurewebsites.net/api/TblOrders';
  //url: string = 'http://localhost:38953/api/TblOrders'; 
  getOrdersViaApi() { 
    return this._http.get<Order[]>(this.url); 
  }
  getCart() { 
    return this._http.get<Order[]>(`${this.url}/cart`); 
  }
  placeOrder(id:number){
    return this._http.put(`${this.url}/${id}`,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  getOrderByIdViaApi(id:number){
    return this._http.get<Order>(`${this.url}/${id}`);
  }
  addToCart(e:Order){
   return this._http.post(`${this.url}`,e,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   });
  }
  updateOrderViaApi(e:Order){
  return this._http.put(`${this.url}/${e.id}`,e,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
  } 
  deleteOrderViaApi(id:number){
  return this._http.delete(`${this.url}/${id}`);
  }
  constructor(private _http:HttpClient) { }
  
}
