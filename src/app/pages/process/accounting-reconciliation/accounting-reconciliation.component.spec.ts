import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingReconciliationComponent } from './accounting-reconciliation.component';

describe('AccountingReconciliationComponent', () => {
  let component: AccountingReconciliationComponent;
  let fixture: ComponentFixture<AccountingReconciliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingReconciliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
