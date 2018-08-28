import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDepositReconciliationComponent } from './customer-deposit-reconciliation.component';

describe('CustomerDepositReconciliationComponent', () => {
  let component: CustomerDepositReconciliationComponent;
  let fixture: ComponentFixture<CustomerDepositReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDepositReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDepositReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
