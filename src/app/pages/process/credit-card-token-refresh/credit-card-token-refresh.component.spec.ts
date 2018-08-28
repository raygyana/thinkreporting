import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTokenRefreshComponent } from './credit-card-token-refresh.component';

describe('CreditCardTokenRefreshComponent', () => {
  let component: CreditCardTokenRefreshComponent;
  let fixture: ComponentFixture<CreditCardTokenRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardTokenRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTokenRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
