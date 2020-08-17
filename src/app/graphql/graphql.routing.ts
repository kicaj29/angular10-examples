import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { GraphqlComponent } from './graphql.component';

export let graphqlRoutes: Routes = [
    {
      path: '',
      component: GraphqlComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forChild(graphqlRoutes);
