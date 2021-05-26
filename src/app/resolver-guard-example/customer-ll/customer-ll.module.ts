import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLLComponent } from './customer-ll.component';
import { routing } from './customer-ll.routing';
import { CustomerLLResolverService } from './customer-ll-resolver.service';



@NgModule({
  declarations: [
    CustomerLLComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class CustomerLLModule { }
