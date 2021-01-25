import { Injectable } from '@angular/core';
import { ProvidersModule } from './providers.module';
import { TimeService } from './time.service';

@Injectable()
export class CustomTimeService extends TimeService {

  constructor() {
    super();
    console.log(`CUSTOM constructor - current time: ${ (new Date()).getMilliseconds()}`);
  }

  doNothing(context: string) {
    console.log(`CUSTOM doNothing [${context}] - current time: ${ new Date().getMilliseconds()}`);
  }
}
