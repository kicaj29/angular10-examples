import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { routing } from './window-inner-size.routing';
import { WindowInnerSizeComponent } from './window-inner-size.component';

@NgModule({
  declarations: [
    WindowInnerSizeComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class WindowInnerSizeModule {

  constructor() {
  }

 }
