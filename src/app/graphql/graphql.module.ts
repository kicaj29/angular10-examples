import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GraphqlComponent } from './graphql.component';
import { CommonModule } from '@angular/common';
import { routing } from './graphql.routing';

@NgModule({
  declarations: [
    GraphqlComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class GraphqlModule {

  constructor() {
  }

 }
