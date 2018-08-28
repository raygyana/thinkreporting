import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgecyDetailsMenuComponent } from './agecy-details-menu.component';

describe('AgecyDetailsMenuComponent', () => {
  let component: AgecyDetailsMenuComponent;
  let fixture: ComponentFixture<AgecyDetailsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgecyDetailsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgecyDetailsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
