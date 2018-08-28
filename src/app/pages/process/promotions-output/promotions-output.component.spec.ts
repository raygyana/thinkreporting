import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsOutputComponent } from './promotions-output.component';

describe('PromotionsOutputComponent', () => {
  let component: PromotionsOutputComponent;
  let fixture: ComponentFixture<PromotionsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
