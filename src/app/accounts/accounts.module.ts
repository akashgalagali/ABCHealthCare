import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountsModule { }
