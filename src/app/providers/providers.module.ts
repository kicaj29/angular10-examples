import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ProvidersComponent } from './providers.component';
import { CommonModule } from '@angular/common';
import { routing } from './providers.routing';

@NgModule({
  declarations: [
    ProvidersComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class ProvidersModule {

  constructor() {
  }

 }
