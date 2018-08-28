import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddressPopupComponent } from './customer-address-popup.component';

describe('CustomerAddressPopupComponent', () => {
  let component: CustomerAddressPopupComponent;
  let fixture: ComponentFixture<CustomerAddressPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddressPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddressPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
