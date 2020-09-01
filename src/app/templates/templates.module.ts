import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TemplatesComponent } from './templates.component';
import { CommonModule } from '@angular/common';
import { routing } from './templates.routing';
import { TemplateContainerComponent } from './template-container.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateContainerComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [],
})
export class TemplatesModule {

  constructor() {
  }

 }
