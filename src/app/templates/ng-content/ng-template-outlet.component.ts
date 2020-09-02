import { Input, TemplateRef, Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  template: `
    <button (click)="display = !display">Toggle content</button>
    <ng-container
        *ngIf="display"
        [ngTemplateOutlet]="templateRef">
    </ng-container>
  `,
})
export class NgTemplateOutletComponent {
  display = false;
  @Input() templateRef: TemplateRef<any>;
}
