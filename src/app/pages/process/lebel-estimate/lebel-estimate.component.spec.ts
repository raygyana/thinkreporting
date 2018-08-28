import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebelEstimateComponent } from './lebel-estimate.component';

describe('LebelEstimateComponent', () => {
  let component: LebelEstimateComponent;
  let fixture: ComponentFixture<LebelEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebelEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebelEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
