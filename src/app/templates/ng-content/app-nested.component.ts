import { Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested',
  template: `
    <b>Hello World (I am app-nested)!</b>
  `,
})
export class NestedComponent implements OnDestroy, OnInit {

  @Input()
  context: string;

  constructor() {
    console.log(`context: ${this.context}, app-nested-component constructor!`);
  }

  ngOnInit() {
    console.log(`context: ${this.context}, app-nested-component initialized!`);
  }

  ngOnDestroy() {
    console.log(`context: ${this.context}, app-nested-component destroyed!`);
  }
}
