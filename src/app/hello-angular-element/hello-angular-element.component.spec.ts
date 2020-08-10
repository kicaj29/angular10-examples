import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloAngularElementComponent } from './hello-angular-element.component';

describe('HelloAngularElementComponent', () => {
  let component: HelloAngularElementComponent;
  let fixture: ComponentFixture<HelloAngularElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloAngularElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloAngularElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
