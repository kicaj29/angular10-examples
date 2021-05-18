import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';

import { commonCss } from "./common.css";
import { defaultThemeCss } from "./default-theme.css";
import { InputRefDirective } from './input-ref.directive';

@Component({
  selector: 'app-cool-input',
  template: `
    <i class="icon fa" [ngClass]="classes"></i>
    <ng-content select="input"></ng-content>
  `
  ,
  styles: [ commonCss, defaultThemeCss ]
})
export class CoolInputComponent implements OnInit, AfterContentInit  {

  constructor() { }

  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    if (!this.input) {
        console.error('the au-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
      debugger;
      return this.input ? this.input.focus : false;
  }

  get classes() {

    const cssClasses = {};

    if (this.icon) {
        cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
}

}
