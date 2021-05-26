import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomerResolverService } from './customer/customer-resolver.service';
import { CustomerComponent } from './customer/customer.component';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';

export let resolverGuardExampleRoutes: Routes = [
    {
      path: '',
      component: ResolverGuardExampleComponent
    },
    {
      path: 'customer', component: CustomerComponent, resolve: { cust_data: CustomerResolverService }
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(resolverGuardExampleRoutes);
