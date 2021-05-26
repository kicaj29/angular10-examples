import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';
import { CommonModule } from '@angular/common';
import { routing } from './resolver-guard-example.routing';

@NgModule({
  declarations: [
    ResolverGuardExampleComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class ResolverGuardExampleModule {

  constructor() {
  }

 }
