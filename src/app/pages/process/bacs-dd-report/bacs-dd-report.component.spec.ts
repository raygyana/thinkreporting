import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacsDdReportComponent } from './bacs-dd-report.component';

describe('BacsDdReportComponent', () => {
  let component: BacsDdReportComponent;
  let fixture: ComponentFixture<BacsDdReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacsDdReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacsDdReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
