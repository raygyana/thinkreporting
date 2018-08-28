import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullfillmentComponent } from './product-fullfillment.component';

describe('ProductFullfillmentComponent', () => {
  let component: ProductFullfillmentComponent;
  let fixture: ComponentFixture<ProductFullfillmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFullfillmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
