import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { CartService } from 'src/app/cart.service';
import { Medicine } from 'src/app/medicine';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  medicines?:Medicine[];
  email:string="";
  constructor(private _carts: CartService,private _as:AccountService, private _router:Router) {
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.email=_as.email;
   }

  ngOnInit(): void {
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
