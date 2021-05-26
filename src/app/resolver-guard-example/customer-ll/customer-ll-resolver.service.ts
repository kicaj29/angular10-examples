import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { CustomerLL } from './customer-ll';

@Injectable()
export class CustomerLLResolverService implements Resolve<CustomerLL> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CustomerLL>|Promise<CustomerLL>|CustomerLL {

    return new Observable((subscriber: Subscriber<CustomerLL>) => {

      console.log("resolving lazy loaded customer...");
      setTimeout(() => {

        // here we typically load data from the backend
        // for simplicity it is not presented here
        let cust = new CustomerLL();
        cust.Name = "Lazy loaded Super name";
        cust.SecondName = "Lazy loaded Super second name";

        console.log("Lazy loaded customer created");
        subscriber.next(cust);
        subscriber.complete();
        console.log("Lazy loaded customer resolved");

        // timeout for emulating loading
      }, 3000);

    });


  }
}
