import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsExamplesComponent } from './rxjs-examples.component';

describe('RxJsExamplesComponent', () => {
  let component: RxJsExamplesComponent;
  let fixture: ComponentFixture<RxJsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxJsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
