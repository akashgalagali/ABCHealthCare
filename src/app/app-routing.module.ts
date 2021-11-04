import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { RegisterComponent } from './accounts/register/register.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddMedicineComponent } from './admin/add-medicine/add-medicine.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoryListComponent } from './admin/category-list/category-list.component';
import { DisableMedicineComponent } from './admin/disable-medicine/disable-medicine.component';
import { MedicineListComponent } from './admin/medicine-list/medicine-list.component';
import { UpdateMedicineComponent } from './admin/update-medicine/update-medicine.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './users/cart/cart.component';
import { OrderConfirmationComponent } from './users/order-confirmation/order-confirmation.component';
import { PrevOrdersComponent } from './users/prev-orders/prev-orders.component';
import { SearchMedicineComponent } from './users/search-medicine/search-medicine.component';
import { SortedListMedicinesComponent } from './users/sorted-list-medicines/sorted-list-medicines.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { UsermedicineListComponent } from './users/usermedicine-list/usermedicine-list.component';

const routes: Routes = [
  {"path":"",component:HomeComponent},
  {"path":"order",component:OrderConfirmationComponent},
  {"path":"cart/:email",component:CartComponent},
  {"path":"prevOrder/:email",component:PrevOrdersComponent},
  {"path":"adminHome/:email",component:AdminHomeComponent},
  {"path":"custHome/:email",component:UserHomeComponent},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"addCategory",component:AddCategoryComponent},
  {"path":"addMedicine",component:AddMedicineComponent},
  {"path":"categories",component:CategoryListComponent},
  {"path":"adminMedicines",component:MedicineListComponent},
  {"path":"statusMedicines",component:DisableMedicineComponent},
  {"path":"users",component:UsersListComponent},
  {"path":"update/:id",component:UpdateMedicineComponent},
  {"path":"search",component:SearchMedicineComponent},
  {"path":"medicines/:email",component:UsermedicineListComponent},
  {"path":"sorted",component:SortedListMedicinesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
