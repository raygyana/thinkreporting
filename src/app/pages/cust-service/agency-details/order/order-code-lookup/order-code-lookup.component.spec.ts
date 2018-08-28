import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCodeLookupComponent } from './order-code-lookup.component';

describe('OrderCodeLookupComponent', () => {
  let component: OrderCodeLookupComponent;
  let fixture: ComponentFixture<OrderCodeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCodeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCodeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
