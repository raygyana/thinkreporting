import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingOutputComponent } from './billing-output.component';

describe('BillingOutputComponent', () => {
  let component: BillingOutputComponent;
  let fixture: ComponentFixture<BillingOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
