import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { RxJsExamplesComponent } from './rxjs-examples.component';

export let rxjsExampleRoutes: Routes = [
    {
      path: '',
      component: RxJsExamplesComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(rxjsExampleRoutes);
