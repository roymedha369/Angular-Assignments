import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempStylingComponent } from './temp-styling.component';

describe('TempStylingComponent', () => {
  let component: TempStylingComponent;
  let fixture: ComponentFixture<TempStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
