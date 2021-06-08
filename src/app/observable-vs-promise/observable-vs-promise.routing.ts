import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { ObservableVsPromiseComponent } from './observable-vs-promise.component';

export let observableVsPromiseRoutes: Routes = [
    {
      path: '',
      component: ObservableVsPromiseComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(observableVsPromiseRoutes);
