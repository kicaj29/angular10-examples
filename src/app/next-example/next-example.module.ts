import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NextExampleComponent } from './next-example.component';
import { CommonModule } from '@angular/common';
import { routing } from './next-example.routing';

@NgModule({
  declarations: [
    NextExampleComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class NextExampleModule {

  constructor() {
  }

 }
