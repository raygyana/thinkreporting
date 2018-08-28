import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDetailDashboardComponent } from './agency-detail-dashboard.component';

describe('AgencyDetailDashboardComponent', () => {
  let component: AgencyDetailDashboardComponent;
  let fixture: ComponentFixture<AgencyDetailDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyDetailDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDetailDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
