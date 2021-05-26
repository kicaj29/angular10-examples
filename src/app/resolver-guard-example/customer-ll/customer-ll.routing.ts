import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLLComponent } from './customer-ll.component';

export let customerLLRoutes: Routes = [
  {
    path: '',
    component: CustomerLLComponent
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(customerLLRoutes);
