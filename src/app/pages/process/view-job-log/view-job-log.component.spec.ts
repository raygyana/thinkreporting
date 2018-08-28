import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobLogComponent } from './view-job-log.component';

describe('ViewJobLogComponent', () => {
  let component: ViewJobLogComponent;
  let fixture: ComponentFixture<ViewJobLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
