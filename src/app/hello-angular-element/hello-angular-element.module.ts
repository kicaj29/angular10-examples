import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloAngularElementComponent } from './hello-angular-element.component';

@NgModule({
  declarations: [
    HelloAngularElementComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [HelloAngularElementComponent],
  entryComponents: [HelloAngularElementComponent],
  providers: [],
})
export class HelloAngularElementModule {

  constructor(private injector: Injector) {
    const custom = createCustomElement(HelloAngularElementComponent, {injector : this.injector});
    // it is good practice to specify different name than name of the component selector to avoid confusing Angular what should be loaded
    // if in define we would use name 'app-hello-angular-element' then the component will be loaded twice!!!

    customElements.define('app-hello-angular-element-custom-element', custom);
    // customElements.define('app-hello-angular-element', custom);
  }

  ngDoBootstrap() {
  }

 }
