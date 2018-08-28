import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditParagraphReportComponent } from './audit-paragraph-report.component';

describe('AuditParagraphReportComponent', () => {
  let component: AuditParagraphReportComponent;
  let fixture: ComponentFixture<AuditParagraphReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditParagraphReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditParagraphReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
