import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDepositSummaryComponent } from './payment-deposit-summary.component';

describe('PaymentDepositSummaryComponent', () => {
  let component: PaymentDepositSummaryComponent;
  let fixture: ComponentFixture<PaymentDepositSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDepositSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDepositSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
