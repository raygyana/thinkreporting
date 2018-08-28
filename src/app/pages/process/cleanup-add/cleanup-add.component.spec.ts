import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupAddComponent } from './cleanup-add.component';

describe('CleanupAddComponent', () => {
  let component: CleanupAddComponent;
  let fixture: ComponentFixture<CleanupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
