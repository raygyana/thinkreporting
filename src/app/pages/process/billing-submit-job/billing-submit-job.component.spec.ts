import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSubmitJobComponent } from './billing-submit-job.component';

describe('BillingSubmitJobComponent', () => {
  let component: BillingSubmitJobComponent;
  let fixture: ComponentFixture<BillingSubmitJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSubmitJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSubmitJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
