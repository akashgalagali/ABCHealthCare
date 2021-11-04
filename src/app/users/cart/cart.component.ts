import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';
import { Medicine } from 'src/app/medicine';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
data?:Cart[];
  sub: any;
  email: string="";
user?:User;
msg:string="";
  constructor(private _carts: CartService,private _as:AccountService,private route:ActivatedRoute,private _us:UsersService,private _router:Router) {
    if(this._as.loggedIn==false){
      this._router.navigate(['./login'])
    }
   }
placeOrder(){
  this._carts.placeCart(Number(this.user?.id)).subscribe(res=>this.msg="order placed");
this._router.navigate(["./order"]);
}
getUser(){
  this._us.getUserByIEmail(String(this.email)).subscribe(res=>this.user=res)
}
getFromCart(){
this._carts.getCart(Number(this.user?.id)).subscribe(res=>this.data=res);
}
delete(id?:number){
  console.log(id);
  this._carts.deleteCartViaApi(Number(id)).subscribe(res=>this.msg="deleted");
  this._router.navigate(["/cart"]);
}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.email=params["email"];
    });
    
    this.getUser();
    
  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
