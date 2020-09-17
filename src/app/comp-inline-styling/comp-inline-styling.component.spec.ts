import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInlineStylingComponent } from './comp-inline-styling.component';

describe('CompInlineStylingComponent', () => {
  let component: CompInlineStylingComponent;
  let fixture: ComponentFixture<CompInlineStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompInlineStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInlineStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
