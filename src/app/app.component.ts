import { Component } from '@angular/core';
import { TimeService } from './providers/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(ts: TimeService) {
    ts.doNothing('app module');
  }

  showAngularElement() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-angular-element-custom-element></app-hello-angular-element-custom-element>';
  }
}
