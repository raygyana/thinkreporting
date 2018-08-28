import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalOptionComponent } from './renewal-option.component';

describe('RenewalOptionComponent', () => {
  let component: RenewalOptionComponent;
  let fixture: ComponentFixture<RenewalOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
