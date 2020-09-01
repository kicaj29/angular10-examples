import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective {
  localRange: number[];

  @Input()
  set appRange(value: number[]) {
    this.vcr.clear();
    this.localRange = this.generateRange(value[0], value[1]);
    this.localRange.forEach(num => {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: num
      });
    });
  }

  constructor( private vcr: ViewContainerRef, private tpl: TemplateRef<any> ) {}

  private generateRange(fromVal: number , toVal: number): number[] {
     const result: number[] = [];
     let current = fromVal;
     while (current <= toVal) {
       result.push(current++);
     }
     return result;
  }
}
