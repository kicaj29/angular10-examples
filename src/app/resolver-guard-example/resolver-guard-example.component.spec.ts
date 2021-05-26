import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverGuardExampleComponent } from './resolver-guard-example.component';

describe('ResolverGuardExampleComponent', () => {
  let component: ResolverGuardExampleComponent;
  let fixture: ComponentFixture<ResolverGuardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverGuardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverGuardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
