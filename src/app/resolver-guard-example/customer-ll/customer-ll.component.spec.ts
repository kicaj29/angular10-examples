import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLLComponent } from './customer-ll.component';

describe('CustomerLLComponent', () => {
  let component: CustomerLLComponent;
  let fixture: ComponentFixture<CustomerLLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
