import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() {
    console.log(`Constructor - current time: ${ (new Date()).getMilliseconds()}`);
  }

  doNothing(context: string) {
    console.log(`doNothing [${context}] - current time: ${ new Date().getMilliseconds()}`);
  }
}
