import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ng-content',
  template: `
    <div class="frame">
      <h1>Angular's content projection and lifecycle example</h1>
      <app-ng-content>
        <app-nested [context]="'ngcontent'"></app-nested>
      </app-ng-content>
      <br>
      <br>
      <h1>Angular's template outlet and lifecycle example</h1>
      <app-ng-template-outlet [templateRef]="nestedComponentRef"></app-ng-template-outlet>
      <ng-template #nestedComponentRef>
        <app-nested [context]="'ngTemplateOutlet'"></app-nested>
      </ng-template>
    </div>
  `,
    styles: [`
    .frame {
      border-style: dotted;
    }
  `]
})
export class DemoNgContentComponent implements OnDestroy, OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
