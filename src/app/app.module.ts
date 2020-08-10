import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { HelloAngularElementComponent } from './hello-angular-element/hello-angular-element.component';

@NgModule({
  declarations: [
    // AppComponent,
    HelloAngularElementComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  entryComponents: [HelloAngularElementComponent],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const custom = createCustomElement(HelloAngularElementComponent, {injector : this.injector});
    customElements.define('app-hello-angular-element-custom-element', custom);
  }

  ngDoBootstrap() {

  }

 }
