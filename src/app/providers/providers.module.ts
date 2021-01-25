import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ProvidersComponent } from './providers.component';
import { CommonModule } from '@angular/common';
import { routing } from './providers.routing';
import { CustomTimeService } from './custom-time.service';
import { TimeService } from './time.service';

@NgModule({
  declarations: [
    ProvidersComponent
  ],
  imports: [
    routing,
    CommonModule,
  ],
  exports: [],
  entryComponents: [],
  providers: [{provide: TimeService, useClass: CustomTimeService}],
})
export class ProvidersModule {

  constructor() {
  }

 }
