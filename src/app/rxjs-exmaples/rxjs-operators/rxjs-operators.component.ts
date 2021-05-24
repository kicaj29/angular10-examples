import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit, AfterViewInit  {


  @ViewChild('input1', {read: ElementRef})
  input1: ElementRef;

  @ViewChild('input2', {read: ElementRef})
  input2: ElementRef;

  @ViewChild('combinedValueMergeMap')
  spanMergeMap: ElementRef;

  @ViewChild('combinedValueSwitchMap')
  spanSwitchMap: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // mergeMap vs switchMap in context of http client:
    // https://vdsabev.medium.com/the-simple-difference-between-rxjs-switchmap-and-mergemap-397c311552a5#:~:text=So%20here%27s%20the%20simple%20difference,page%2C%20so%20I%20used%20mergeMap%20

    // another example for mergeMap
    // https://www.youtube.com/watch?v=b59tcUwfpWU
    const outerObservable = fromEvent<any>(this.input1.nativeElement, 'input');
    const innerObservable = fromEvent<any>(this.input2.nativeElement, 'input');

    // every key down in input2 (innerObservable) triggers execution of the outerObservable as many times
    // as it was changed, for example:
    // if input1 = "abc" and we modify input2 from "1" to "12" then innerSubscription will be executed 3 times
    // and outer subscription is executed also 3 times!

    outerObservable.pipe(
      mergeMap(event1 => {
        console.log(`[mergeMap]: outerObservable - event1`);
        return innerObservable.pipe(
          map(event2 => {
            console.log(`[mergeMap/map]: innerObservable - event2`);
            return event1.target.value + event2.target.value + `; e1: ${event1.data}; e2: ${event2.data}`;
          })
        );
      })
    ).subscribe(
      mergedValue => {
        this.spanMergeMap.nativeElement.textContent = mergedValue;
        console.log(`[mergeMap]: outer subscription execution with merged value: ${mergedValue}`);
      }
    );

    // switchMap
    // every key down in input2 (innerObservable) triggers execution of the outerObservable as many times
    // as it was changed but new event cancels previous subscriptions, for example:
    // if input1 = "abc" and we modify input2 from "1" to "12" then innerSubscription will be executed 1 time
    // and outer subscription is executed also 1 time!
    outerObservable.pipe(
      switchMap(event1 => {
        console.log(`[switchMap]: outerObservable - event1`);
        return innerObservable.pipe(
          map(event2 => {
            console.log(`[switchMap/map]: innerObservable - event2`);
            return event1.target.value + event2.target.value + `; e1: ${event1.data}; e2: ${event2.data}`;
          })
        );
      })
    ).subscribe(
      mergedValue => {
        this.spanSwitchMap.nativeElement.textContent = mergedValue;
        console.log(`[switchMap]: outer subscription execution with merged value: ${mergedValue}`);
      }
    );
  }

  operatorMap() {
    // https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

    // lets create our data first
    const data = of([
      {
        brand: 'porsche',
        model: '911'
      },
      {
        brand: 'porsche',
        model: 'macan'
      },
      {
        brand: 'ferarri',
        model: '458'
      },
      {
        brand: 'lamborghini',
        model: 'urus'
      }
    ]);


    // get data as brand+model string. Result:
    // ["porsche 911", "porsche macan", "ferarri 458", "lamborghini urus"]
    data
      .pipe(
        // cars.map is not function from observable but from Array<T> interface!
        map(cars => cars.map(car => `${car.brand} ${car.model}`))
      ).subscribe(cars => console.log(cars));

    data
      .pipe(
        // cars.filter is not function from observable but from Array<T> interface!
        map(cars => cars.filter(car => car.brand === 'porsche'))
      ).subscribe(cars => console.log(cars));

    // emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    // add 10 to each value
    const example = source.pipe(map(val => val + 10));
    // output: 11,12,13,14,15
    const subscribe = example.subscribe(val => console.log(val));
  }

  operatorMergeMap() {
    // https://www.learnrxjs.io/operators/transformation/mergemap.html

    //emit 'Hello'
    const source = of('Hello');
    //map to inner observable and flatten
    const example = source.pipe(mergeMap(val => of(`${val} World!`)));
    //output: 'Hello World!'
    const subscribe = example.subscribe(val => console.log(val));
  }

  operatorMap_MergeAll_MergeMap() {
    // https://medium.com/@luukgruijs/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff

    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };

    // there are 3 ways to achieve the same results
    // we have from([1,2,3,4]) as our ‘outer’ Observable, and the result of the getData() as our ‘inner’ Observable.

    // using a regular map
    from([1,2,3,4]).pipe(
      map(param => getData(param))
    ).subscribe(val => val.subscribe(data => console.log(data)));

    // using map and mergeAll
    from([1,2,3,4]).pipe(
      map(param => getData(param)),
      mergeAll()
    ).subscribe(val => console.log(val));

    // using mergeMap
    from([1,2,3,4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));

  }

  operatorFrom() {
    // https://www.learnrxjs.io/operators/creation/from.html

    // For arrays and iterables, all contained values will be emitted as a sequence!

    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    //output: 1,2,3,4,5
    const subscribe = arraySource.subscribe(val => console.log(val));

    //emit single value that is an array
    const valueSource = of([1, 2, 3, 4, 5]);
    //output: [1,2,3,4,5]
    const subscribe1 = valueSource.subscribe(val => console.log(val));

  }

}
