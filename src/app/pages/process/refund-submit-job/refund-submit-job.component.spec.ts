import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSubmitJobComponent } from './refund-submit-job.component';

describe('RefundSubmitJobComponent', () => {
  let component: RefundSubmitJobComponent;
  let fixture: ComponentFixture<RefundSubmitJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundSubmitJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSubmitJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
