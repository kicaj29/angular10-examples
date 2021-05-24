import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-hot-vs-cold',
  templateUrl: './hot-vs-cold.component.html',
  styleUrls: ['./hot-vs-cold.component.css']
})
export class HotVsColdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coldVsHotRun() {

    // COLD is when your observable creates the producer
    const coldObservable = new Observable((observer) => {
      observer.next(Math.random());
    });

    // subscription 1
    coldObservable.subscribe((data) => {
      console.log(`COLD SUB1: ${data}`);  // 0.9668090060180743
    });

    // subscription 2
    coldObservable.subscribe((data) => {
      console.log(`COLD SUB2: ${data}`);  // 0.7020925856437161
    });

    // HOT is when your observable closes over the produce
    const random = Math.random();

    const hotObservable = new Observable((observer) => {
      observer.next(random);
    });

    // subscription 1
    hotObservable.subscribe((data) => {
      console.log(`HOT SUB1: ${data}`); // 0.44494214231889706 (random number)
    });

    // subscription 2
    hotObservable.subscribe((data) => {
      console.log(`HOT SUB2: ${data}`); // 0.44494214231889706 (random number)
    });

    // CONVERT COLD TO HOT
    // const convertedHotObervable = coldObservable.pipe(share());
    // https://rxjs.dev/api/operators/share

    // using share will cause that SUB2 (only SUB1 is executed with share()) will not be executed, to execute it use shareReplay!
    // https://rxjs.dev/api/operators/shareReplay
    const convertedHotObservable = coldObservable.pipe(shareReplay());

    // subscription 1
    convertedHotObservable.subscribe((data) => {
      console.log(`CONVERTED TO HOT SUB1: ${data}`)
    });

    // subscription 2
    convertedHotObservable.subscribe((data) => {
      console.log(`CONVERTED TO HOT SUB2: ${data}`)
    });
  }

  coldVsHotAsSubjectRun() {

    // Observable by default is COLD
    const observable = new Observable(observer => {
      setTimeout(() => observer.next('hello from Observable!'), 1000);
    });

    observable.subscribe(v => console.log(v));
    // THERE IS NO NEXT METHOD!: observable.next

    // HOT has dedicated types: Subject, ReplaySubject, BehaviorSubject

    // Subject:
    const subject = new Subject();
    subject.next('missed message from Subject');
    subject.subscribe(v => console.log(v));
    subject.next('hello from subject!');


    // ReplaySubject is a variant of a Subject which keeps a cache of previous values emitted by a source observable and sends them
    // to all new observers immediately on subscription.
    // https://indepth.dev/reference/rxjs/subjects/replay-subject
    const replaySubject = new ReplaySubject();
    replaySubject.next('hello from ReplaySubject1 !');
    replaySubject.next('hello from ReplaySubject2 !');
    replaySubject.next('hello from ReplaySubject3 !');
    replaySubject.subscribe(v => console.log(v));
    replaySubject.next('hello from ReplaySubject4 !');

    // BehaviorSubject is like a Subject but we can pass initial value and it emits value that was emitted just before subscribe.
    // https://indepth.dev/reference/rxjs/subjects/behavior-subject
    const behaviorSubject = new BehaviorSubject('hello from BehaviorSubject INIT VALUE !');
    behaviorSubject.next('missed message from BehaviorSubject1 !');
    behaviorSubject.next('hello message from BehaviorSubject2 !');
    behaviorSubject.subscribe(v => console.log(v));
    behaviorSubject.next('hello message from BehaviorSubject3 !');
    behaviorSubject.next('hello message from BehaviorSubject4 !');


    const o = new Observable(observer => {
      setTimeout(() => observer.next('hello from Observable! ' + Date.now()), 1000);
    });

    // every subscribe causes new execution of setTimeout:
    o.subscribe(v => console.log(v));
    o.subscribe(v => console.log(v));
    o.subscribe(v => console.log(v));

    // every subscribe handles the same next call:
    const s = new Subject();
    s.next('missed message from Subject');
    s.subscribe(v => console.log(v));
    s.subscribe(v => console.log(v));
    s.subscribe(v => console.log(v));
    s.next('hello from subject! ' + Date.now());
  }
}
