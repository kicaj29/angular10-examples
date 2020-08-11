import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { NextExampleComponent } from './next-example.component';

export let nextExampleRoutes: Routes = [
    {
      path: '',
      component: NextExampleComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(nextExampleRoutes);
