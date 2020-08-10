import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showAngularElement() {
    const hello = document.getElementById('hello');
    hello.innerHTML = '<app-hello-angular-element-custom-element></app-hello-angular-element-custom-element>';
  }
}
