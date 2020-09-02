import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  template: `
    <button (click)="display = !display">Toggle content</button>
    <ng-content *ngIf="display"></ng-content>
  `,
})
export class NgContentComponent {
  display = false;
}
