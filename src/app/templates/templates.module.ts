import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TemplatesComponent } from './templates.component';
import { CommonModule } from '@angular/common';
import { routing } from './templates.routing';
import { TemplateContainerComponent } from './template-container.component';
import { MyNgIfDirective } from './my-ng-if.directive';
import { RangeDirective } from './range.directive';

@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateContainerComponent,
    MyNgIfDirective,
    RangeDirective
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
