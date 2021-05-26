import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Customer } from './customer';

@Injectable()
export class CustomerResolverService implements Resolve<Customer> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer>|Promise<Customer>|Customer {

    return new Observable((subscriber: Subscriber<Customer>) => {

      console.log("resolving customer...");
      setTimeout(() => {

        // here we typically load data from the backend
        // for simplicity it is not presented here
        let cust = new Customer();
        cust.Name = "Super name";
        cust.SecondName = "Super second name";

        console.log("customer created");
        subscriber.next(cust);
        subscriber.complete();
        console.log("customer resolved");

        // timeout for emulating loading
      }, 3000);

    });


  }
}
