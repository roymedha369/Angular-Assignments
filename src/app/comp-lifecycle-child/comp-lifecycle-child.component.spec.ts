import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLifecycleChildComponent } from './comp-lifecycle-child.component';

describe('CompLifecycleChildComponent', () => {
  let component: CompLifecycleChildComponent;
  let fixture: ComponentFixture<CompLifecycleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLifecycleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLifecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
