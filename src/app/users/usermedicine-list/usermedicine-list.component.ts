import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Cart } from 'src/app/cart';
import { CartService } from 'src/app/cart.service';
import { Medicine } from 'src/app/medicine';
import { MedicineService } from 'src/app/medicine.service';
import { Order } from 'src/app/order';
import { User } from 'src/app/user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-usermedicine-list',
  templateUrl: './usermedicine-list.component.html',
  styleUrls: ['./usermedicine-list.component.css']
})
export class UsermedicineListComponent implements OnInit {
  medicines: Medicine[] = [];
  countId?: number;
  msg: string = "";
  o: Cart = {};
  sub: any;
  email?: string;
  user: User = {};
  med: Medicine = {};
  mid?: number;
  carts: Cart[] = [];

  constructor(private _cs: MedicineService, private _us: UsersService, private cart: CartService, private route: ActivatedRoute, private _router: Router, private _as: AccountService) {
    if(_as.loggedIn==false){
      this._router.navigate(['./login'])
    }
    this.getmedicinesViaService();
    
  }
  getmedicinesViaService() {
    this._cs.getAvailableMedicinesViaApi().subscribe(response => this.medicines = response);
  }
  getUser() {
    this._us.getUserByIEmail(String(this.email)).subscribe(res => this.user = res)
  }
  getMedicine(id?: number) {
    this._cs.getMedicineByIdViaApi(Number(id)).subscribe(res => this.med = res);
  }
  addToCart(name?: string) {
    
    this.countId=this.carts[this.carts.length - 1].id;
    this.o.id = Number(this.countId) + 1;
    this.o.med = name;
    this.o.cust = Number(this.user.id);
    this.o.ordered = false;
    console.log(this.countId)
    console.log(this.o.cust);
    console.log(this.o.med);
    console.log(this.o.ordered)
    
    this.cart.addToCart(this.o).subscribe(res => this.msg = "ordered");
   this.getAllCartDetails();
  }
  getAllCartDetails() {
    this.cart.getCartsViaApi().subscribe(res => this.carts = res);

  }
 
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.email = params["email"];
    });
    
    this.getUser();
    this.getAllCartDetails();
  

  }
  logout(){
    this._as.loggedIn=false;
    this._router.navigate(['']);
  }
}
