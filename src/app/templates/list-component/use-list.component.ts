import {Component, TemplateRef, ViewChild} from '@angular/core';
import { IItem } from './list.component';

@Component({
  selector: 'app-use-list',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome !
      </h1>
        <button (click)="AddItem()">AddItem</button>
        <app-list [userItem]="customItem" [items]="items"></app-list>
        <ng-template #customItem let-item let-x="counter">
            <li style="color: blue">
                {{x}}<input type="text" [value]="item.title"/>
                <button (click)="onClick(x)">Click me</button>
            </li>
        </ng-template>
    </div>
  `,
  styles: []
})
export class UseListComponent {

  constructor() {

    /*setInterval(()=> {
        this.items = [...this.items, {title: 'new'}]
    }, 2000);*/
  }

  items: IItem[] = [
      { title: 'item1'},
      { title: 'item2'},
      { title: 'item3'}
  ];

  @ViewChild('customItem') customItem: TemplateRef<any>;

  public myX: number;

  public AddItem() {
      this.items = [...this.items, {title: 'new'}];
  }

  onClick(x: number) {
    console.log('onClick: ' + x);
    console.log('onClick: ' + this.customItem);
  }
}
