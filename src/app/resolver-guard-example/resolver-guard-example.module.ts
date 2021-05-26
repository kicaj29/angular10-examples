import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';
import { CommonModule } from '@angular/common';
import { routing } from './resolver-guard-example.routing';
import { CustomerComponent } from './customer/customer.component';
import { CustomerResolverService } from './customer/customer-resolver.service';
import { CustomerLLResolverService } from './customer-ll/customer-ll-resolver.service';
import { CanActivateService } from './guards/can-activate.service';
import { CanActivateChildService } from './guards/can-activate-child.service';
import { CanLoadService } from './guards/can-load.service';

@NgModule({
  declarations: [
    ResolverGuardExampleComponent,
    CustomerComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [
    CustomerResolverService,
    CustomerLLResolverService,
    CanActivateService,
    CanActivateChildService,
    CanLoadService
  ]
})
export class ResolverGuardExampleModule {

  constructor() {
  }

 }
