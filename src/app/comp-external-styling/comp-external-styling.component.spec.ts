import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompExternalStylingComponent } from './comp-external-styling.component';

describe('CompExternalStylingComponent', () => {
  let component: CompExternalStylingComponent;
  let fixture: ComponentFixture<CompExternalStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompExternalStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompExternalStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
