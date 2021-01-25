import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ProvidersComponent } from './providers.component';

export let providersRoutes: Routes = [
    {
      path: '',
      component: ProvidersComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(providersRoutes);
