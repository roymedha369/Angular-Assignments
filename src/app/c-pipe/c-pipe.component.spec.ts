import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPipeComponent } from './c-pipe.component';

describe('CPipeComponent', () => {
  let component: CPipeComponent;
  let fixture: ComponentFixture<CPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
