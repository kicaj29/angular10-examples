import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextExampleComponent } from './next-example.component';

describe('NextExampleComponent', () => {
  let component: NextExampleComponent;
  let fixture: ComponentFixture<NextExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
