import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsermedicineListComponent } from './usermedicine-list/usermedicine-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CartComponent } from './cart/cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { SortedListMedicinesComponent } from './sorted-list-medicines/sorted-list-medicines.component';
import { SearchMedicineComponent } from './search-medicine/search-medicine.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrevOrdersComponent } from './prev-orders/prev-orders.component';



@NgModule({
  declarations: [
    UsermedicineListComponent,
    UserHomeComponent,
    CartComponent,
    OrderConfirmationComponent,
    SortedListMedicinesComponent,
    SearchMedicineComponent,
    PrevOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    SearchMedicineComponent,
    CartComponent,
    OrderConfirmationComponent,
    SearchMedicineComponent,
    SortedListMedicinesComponent,
    UserHomeComponent,
    UsermedicineListComponent,
    PrevOrdersComponent
    
  ]
})
export class UsersModule { }
