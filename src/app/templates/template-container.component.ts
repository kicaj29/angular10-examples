import { Input, TemplateRef, Component } from '@angular/core';

@Component({
  selector: 'app-template-container',
  styles: [`
    .frame {
      border-style: dotted;
    }
  `],
  template: `
  <div class="frame">
    <ng-template #defaultTabButtons>
      <div class="default-tab-buttons">
          I am default template!
      </div>
    </ng-template>
    <ng-container *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons">
    </ng-container>
  </div>
`})
export class TemplateContainerComponent {
  @Input()
  headerTemplate: TemplateRef<any>;
}
