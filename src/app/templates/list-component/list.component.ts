import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit} from '@angular/core';

export interface IItem {
  title: string;
}

@Component({
  selector: 'app-list',
  template: `
    <ul>
        <ng-container #container>
        </ng-container>
        <ng-template #defaultItem let-myVar>
            <li>
                {{myVar.title}}
            </li>
        </ng-template>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() userItem: TemplateRef<any>;
  @ViewChild('defaultItem') defaultItem: TemplateRef<IItem>;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  private itemsPriv: IItem[] = [];
  private updateItems(itemsParam: IItem[]){
    if (this.container) {
      this.container.clear();
      itemsParam.forEach((item: IItem, index) => {
          this.container.createEmbeddedView(
              this.userItem || this.defaultItem,
              // thx to $implicit variable in html let-item is set on the value assigned to $implicit!!!
              // for counter we can defined another variable and assign value to it using counter as a string, for example: let-x="counter"
              {
                  $implicit: item,
                  counter: index
              });
      });
  }
  }

  @Input() set items(itemsParam: IItem[]) {
    this.itemsPriv = itemsParam;
    this.updateItems(itemsParam);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // to avoid ExpressionChangedAfterItHasBeenCheckedError start next life cycle of angular component:
    // https://angular.io/guide/lifecycle-hooks#wait-before-updating-the-view
    // https://stackoverflow.com/questions/41659822/when-and-why-to-use-a-tick-in-angular-2
    setTimeout(() => {
      this.updateItems(this.itemsPriv);
    }, 0);
  }




}
