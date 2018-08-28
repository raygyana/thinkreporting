import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupOutputComponent } from './cleanup-output.component';

describe('CleanupOutputComponent', () => {
  let component: CleanupOutputComponent;
  let fixture: ComponentFixture<CleanupOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanupOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
