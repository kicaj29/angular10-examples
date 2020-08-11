import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularElementComponent } from './hello-angular-element/hello-angular-element.component';
import { HelloAngularElementModule } from './hello-angular-element/hello-angular-element.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloAngularElementModule
  ],
  entryComponents: [HelloAngularElementComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

 }
