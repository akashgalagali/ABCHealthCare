import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Medicine } from './medicine';


@Injectable({
  providedIn: 'root'
})
export class CartService { 
  carts:Cart[]=[];
url: string = 'https://abcapi.azurewebsites.net/api/Carts'; 
getCartsViaApi() { 
  return this._http.get<Cart[]>(this.url); 
}
getCart(id:number) { 
  return this._http.get<Cart[]>(`${this.url}/cartdetails/${id}`); 
}
placeCart(id:number){
  return this._http.put(`${this.url}/order/${id}`,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
}
getCartByIdViaApi(id:number){
  return this._http.get<Cart>(`${this.url}/${id}`);
}

addToCart(e:Cart){
 
 return this._http.post(`${this.url}`,e,{
   headers:new HttpHeaders({
     'Content-Type':'application/json'
   })
 });
}
updateCartViaApi(e:Cart){
return this._http.put(`${this.url}/${e.id}`,e,{
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
});
} 
deleteCartViaApi(id:number){
return this._http.delete(`${this.url}/${id}`);
}
constructor(private _http:HttpClient) { }
getPrevOrders(id:number){
  return this._http.get<Cart[]>(`${this.url}/orderedDetails/${id}`);
}
}
