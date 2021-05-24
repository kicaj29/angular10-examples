import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotVsColdComponent } from './hot-vs-cold.component';

describe('HotVsColdComponent', () => {
  let component: HotVsColdComponent;
  let fixture: ComponentFixture<HotVsColdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotVsColdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotVsColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
