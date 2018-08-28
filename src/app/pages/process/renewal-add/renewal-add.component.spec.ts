import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalAddComponent } from './renewal-add.component';

describe('RenewalAddComponent', () => {
  let component: RenewalAddComponent;
  let fixture: ComponentFixture<RenewalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
