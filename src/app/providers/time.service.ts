import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() {
    console.log(`Constructor - current time: ${ (new Date()).getMilliseconds()}`);
  }

  doNothing() {
    console.log(`doNothing - current time: ${ new Date().getMilliseconds()}`);
  }
}
