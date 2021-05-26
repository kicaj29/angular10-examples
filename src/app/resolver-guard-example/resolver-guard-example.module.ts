import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ResolverGuardExampleComponent } from './resolver-guard-example.component';
import { CommonModule } from '@angular/common';
import { routing } from './resolver-guard-example.routing';
import { CustomerComponent } from './customer/customer.component';
import { CustomerResolverService } from './customer/customer-resolver.service';
import { CustomerLLResolverService } from './customer-ll/customer-ll-resolver.service';

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
    CustomerLLResolverService
  ]
})
export class ResolverGuardExampleModule {

  constructor() {
  }

 }
