import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { WindowInnerSizeComponent } from './window-inner-size.component';

export let nextExampleRoutes: Routes = [
    {
      path: '',
      component: WindowInnerSizeComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(nextExampleRoutes);
