import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { routing } from './rxjs-examples.routing';
import { RxJsExamplesComponent } from './rxjs-examples.component';
import { HotVsColdComponent } from './hot-vs-cold/hot-vs-cold.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

@NgModule({
  declarations: [
    RxJsExamplesComponent,
    HotVsColdComponent,
    RxjsOperatorsComponent
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
