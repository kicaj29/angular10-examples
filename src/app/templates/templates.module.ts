import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { TemplatesComponent } from './templates.component';
import { CommonModule } from '@angular/common';
import { routing } from './templates.routing';
import { TemplateContainerComponent } from './template-container.component';
import { MyNgIfDirective } from './my-ng-if.directive';
import { RangeDirective } from './range.directive';
import { ListComponent } from './list-component/list.component';
import { UseListComponent } from './list-component/use-list.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateContainerComponent,
    MyNgIfDirective,
    RangeDirective,
    ListComponent,
    UseListComponent
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
