import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'next-example'
  },
  {
    path: 'graphql',
    loadChildren: () => import('./graphql/graphql.module').then(m => m.GraphqlModule)
  },
  {
    path: 'next-example',
    loadChildren: () => import('./next-example/next-example.module').then(m => m.NextExampleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
