import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyModel } from './my-model';

@Component({
  selector: 'app-observable-vs-promise',
  templateUrl: './observable-vs-promise.component.html',
  styleUrls: ['./observable-vs-promise.component.css']
})
export class ObservableVsPromiseComponent implements OnInit {

  private myPromise: Promise<number>;
  private myObservable: Observable<number>;
  private lastSubscription: Subscription;


  constructor() { }

  ngOnInit(): void {
  }

  createPromise() {
    console.log('started createPromise...');

    //1. Promise is executed together with his constructor.
    //   There is no need to call 'then' to start execution of promise (eager loading).

    //2. There is no possibility to cancel promise.

    //3. If we call multiple times ‘then’ on the same instance of promise the promise only return value,
    //   content of promise is executed only one time!

    this.myPromise = new Promise((resolve) => {
      console.log('promise begin');
      setTimeout(() => {
        let now = Date.now();
        console.log('promise timeout hit ' + now.toString());
        resolve(now);
      }, 1000);
      console.log('promise end');
    });


    console.log('createPromise is finished');
  }

  thenPromise() {
    this.myPromise.then(value => {
      console.log('returned value is ' + value.toString());
      return "aaaaa";
    }).then((value1) => {
      // it is possible to use then.then and paramter value in second then will be value returned by the first then!
      console.log('SECOND THEN returned value is ' + value1);
    });
  }

  createObservable() {
    console.log('started createObservable...');

    //1. Observable by default is executed only when we call

    //2. There is possibility to cancel observable

    //3. If we subscribe multiple times it is executed every time from scratch

    this.myObservable = new Observable<number>((observer) => {
      var id = setTimeout(() => {
        let now = Date.now();
        console.log('Observable timeout hit ' + now.toString());
        observer.next(now);
        observer.complete();
      }, 3000);

      return () => {
        console.log('Observable cancel/dispose called');
        clearTimeout(id);
      }
    });
    console.log('createObservable is finished');
  }

  subscribeObservable() {
    this.lastSubscription = this.myObservable.subscribe((result) => {
      console.log('subscribe execution: ' + result);
    });
  }

  cancelSubscription() {
    this.lastSubscription.unsubscribe();
  }

  toPromiseCall() {
    // https://levelup.gitconnected.com/rxjs-operator-topromise-waits-for-your-observable-to-complete-e7a002f5dccb
    // to trigger then from the converted observable must be called observer.complete();
    // without it then will not be executed!
    const p = this.myObservable.toPromise()
    p.then(result => {
      console.log('handling then from converter observable: ' + result);
    });
  }

  handlingErrorsPromiseVsObservable() {


    var p = new Promise((resolve, reject) => {
      reject("fail");
    });

    // then is used to handle success and errors are handled by catch
    p
    .then((val) => {
      console.log('then0: ' + val);
    })
    .catch((error) => {
      console.log('catch0: ' + error);
      return error;
    })
    .then((val) => {
      // !!!if the error has been caught in catch0 then then1 will be executed with value returned by catch0!!!
      console.log('then1: ' + val);
    })
    .catch((error) => {
      console.log('catch1: ' + error);
    });

    // subscribe is handling for both success and errors
    const o = new Observable((observer) => {
      //observer.next(Math.random());
      //observer.error('fail');
      throw new Error('fail');
    });
    o.subscribe(
        successVal => { console.log('successVal: ' + successVal); },
        failVal => { console.log('failVal: ' + failVal); }
      )

    // another approach is to use catchError operator
    const o1 = new Observable((observer) => {
      throw new Error('fail');
    })
    .pipe(
      catchError((error: Error) => {
        return of ('error handled');
      })
    )
    .subscribe(
        // successVal is executed because the error has been already handled in the pipe
        successVal => { console.log('successValByPipe: ' + successVal); },
        failVal => { console.log('failValByPipe: ' + failVal); }
      )
  }
}
