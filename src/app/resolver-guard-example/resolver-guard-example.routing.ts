import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';

export let resolverGuardExampleRoutes: Routes = [
    {
      path: '',
      component: ResolverGuardExampleComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(resolverGuardExampleRoutes);
