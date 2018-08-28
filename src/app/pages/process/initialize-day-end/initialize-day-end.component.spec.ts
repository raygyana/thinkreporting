import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeDayEndComponent } from './initialize-day-end.component';

describe('InitializeDayEndComponent', () => {
  let component: InitializeDayEndComponent;
  let fixture: ComponentFixture<InitializeDayEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitializeDayEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializeDayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
