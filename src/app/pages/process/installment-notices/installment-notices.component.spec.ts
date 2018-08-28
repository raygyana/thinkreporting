import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentNoticesComponent } from './installment-notices.component';

describe('InstallmentNoticesComponent', () => {
  let component: InstallmentNoticesComponent;
  let fixture: ComponentFixture<InstallmentNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentNoticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
