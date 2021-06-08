import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ObservableVsPromiseComponent } from './observable-vs-promise.component';
import { CommonModule } from '@angular/common';
import { routing } from './observable-vs-promise.routing';

@NgModule({
  declarations: [
    ObservableVsPromiseComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class ObservableVsPromiseModule {

  constructor() {
  }

 }
