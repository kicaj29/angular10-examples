import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowInnerSizeComponent } from './window-inner-size.component';

describe('WindowInnerSizeComponent', () => {
  let component: WindowInnerSizeComponent;
  let fixture: ComponentFixture<WindowInnerSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowInnerSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowInnerSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
