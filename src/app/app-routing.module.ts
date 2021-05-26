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
    path: 'templates',
    loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)
  },
  {
    path: 'rxjs-examples',
    loadChildren: () => import('./rxjs-exmaples/rxjs-examples.module').then(m => m.RxJsExamplesModule)
  },
  {
    path: 'resolver-guard',
    loadChildren: () => import('./resolver-guard-example/resolver-guard-example.module').then(m => m.ResolverGuardExampleModule)
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
