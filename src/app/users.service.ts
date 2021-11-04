import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  url: string = 'https://abcapi.azurewebsites.net/api/users'; 



  getUsersViaApi() { 
    return this._http.get<User[]>(this.url); 
  }
  getUserByIdViaApi(id:number){
    return this._http.get<User>(`${this.url}/${id}`);
 }
 getUserByIEmail(email:string){
  return this._http.get<User>(`${this.url}/email/${email}`);
}
 createUserViaApi(e:User){
   return this._http.post(`${this.url}`,e,{
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   });
 }
 updateUserViaApi(e:User){
  return this._http.put(`${this.url}/${e.id}`,e,{
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
} 
deleteUserViaApi(id:number){
  return this._http.delete(`${this.url}/${id}`);
}
  constructor(private _http:HttpClient) {
    
   }
}
