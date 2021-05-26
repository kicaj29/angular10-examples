import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { CustomerResolverService } from './customer/customer-resolver.service';
import { CustomerLLResolverService } from './customer-ll/customer-ll-resolver.service';
import { CustomerComponent } from './customer/customer.component';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';
import { CanActivateService } from './guards/can-activate.service';
import { CanActivateChildService } from './guards/can-activate-child.service';
import { CanLoadService } from './guards/can-load.service';

export let resolverGuardExampleRoutes: Routes = [
    {
      path: '',
      component: ResolverGuardExampleComponent
    },
    {
      path: 'customer',
      component: CustomerComponent,
      resolve: { cust_data: CustomerResolverService },
      canActivate: [CanActivateService],
      canActivateChild: [CanActivateChildService],
      canLoad: [CanLoadService]
    },
    {
      path: 'lazy-loading-customer',
      loadChildren: () => import('./customer-ll/customer-ll.module').then(m => m.CustomerLLModule),
      resolve: { cust_data: CustomerLLResolverService },
      canActivate: [CanActivateService],
      canActivateChild: [CanActivateChildService],
      canLoad: [CanLoadService]
    },
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(resolverGuardExampleRoutes);
