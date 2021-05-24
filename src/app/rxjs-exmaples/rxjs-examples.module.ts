import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { routing } from './rxjs-examples.routing';
import { RxJsExamplesComponent } from './rxjs-examples.component';

@NgModule({
  declarations: [
    RxJsExamplesComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class RxJsExamplesModule {

  constructor() {
  }

 }
