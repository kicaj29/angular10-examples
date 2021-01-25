import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { TemplatesComponent } from './templates.component';

export let templatesRoutes: Routes = [
    {
      path: '',
      component: TemplatesComponent
    }
  ];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(templatesRoutes);
