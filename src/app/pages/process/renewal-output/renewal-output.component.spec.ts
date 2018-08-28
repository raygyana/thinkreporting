import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalOutputComponent } from './renewal-output.component';

describe('RenewalOutputComponent', () => {
  let component: RenewalOutputComponent;
  let fixture: ComponentFixture<RenewalOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
