import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TimeService } from '../providers/time.service';

@Component({
  selector: 'app-hello-angular-element',
  templateUrl: './hello-angular-element.component.html',
  styleUrls: ['./hello-angular-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloAngularElementComponent implements OnInit {

  @Input() title;
  @Output() display = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  showInfo() {
    this.display.emit(`Title: ${this.title}`);
  }

}
