import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-angular-element',
  templateUrl: './hello-angular-element.component.html',
  styleUrls: ['./hello-angular-element.component.css']
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
