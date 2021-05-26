import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLLComponent } from './customer-ll.component';
import { RouterModule, Routes } from '@angular/router';


export let customerLLRoutes: Routes = [
  {
    path: '',
    component: CustomerLLComponent
  }
];
@NgModule({
  declarations: [
    CustomerLLComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(customerLLRoutes)
  ]
})
export class CustomerLLModule { }
