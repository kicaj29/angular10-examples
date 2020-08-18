import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularElementComponent } from './hello-angular-element/hello-angular-element.component';
import { HelloAngularElementModule } from './hello-angular-element/hello-angular-element.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloAngularElementModule,
    GraphQLModule,
    HttpClientModule
  ],
  entryComponents: [HelloAngularElementComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

 }
