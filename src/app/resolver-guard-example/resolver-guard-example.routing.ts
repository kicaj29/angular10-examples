import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomerResolverService } from './customer/customer-resolver.service';
import { CustomerLLResolverService } from './customer-ll/customer-ll-resolver.service';
import { CustomerComponent } from './customer/customer.component';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';

export let resolverGuardExampleRoutes: Routes = [
    {
      path: '',
      component: ResolverGuardExampleComponent
    },
    {
      path: 'customer',
      component: CustomerComponent,
      resolve: { cust_data: CustomerResolverService }
    },
    {
      path: 'lazy-loading-customer',
      loadChildren: () => import('./customer-ll/customer-ll.module').then(m => m.CustomerLLModule),
      resolve: { cust_data: CustomerLLResolverService }
    },
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(resolverGuardExampleRoutes);
