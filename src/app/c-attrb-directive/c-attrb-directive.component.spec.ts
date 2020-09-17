import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAttrbDirectiveComponent } from './c-attrb-directive.component';

describe('CAttrbDirectiveComponent', () => {
  let component: CAttrbDirectiveComponent;
  let fixture: ComponentFixture<CAttrbDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAttrbDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAttrbDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
