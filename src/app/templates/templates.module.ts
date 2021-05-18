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
import { DemoNgContentComponent } from './ng-content/demo-ng-content.component';
import { NestedComponent } from './ng-content/app-nested.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgTemplateOutletComponent } from './ng-content/ng-template-outlet.component';
import { CoolInputComponent } from './cool-input/cool-input.component';

@NgModule({
  declarations: [
    TemplatesComponent,
    TemplateContainerComponent,
    MyNgIfDirective,
    RangeDirective,
    ListComponent,
    UseListComponent,
    DemoNgContentComponent,
    NestedComponent,
    NgContentComponent,
    NgTemplateOutletComponent,
    CoolInputComponent
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
