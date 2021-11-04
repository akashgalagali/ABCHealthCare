import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DisableMedicineComponent } from './disable-medicine/disable-medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoryComponent,
    UsersListComponent,
    MedicineListComponent,
    UpdateMedicineComponent,
    DisableMedicineComponent,
    AddMedicineComponent,
    AdminHomeComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports:[
    CategoryListComponent,
    AddCategoryComponent,
    AddMedicineComponent,
    DisableMedicineComponent,
    MedicineListComponent,
    UpdateMedicineComponent,
    UsersListComponent
  ]
})
export class AdminModule { }
