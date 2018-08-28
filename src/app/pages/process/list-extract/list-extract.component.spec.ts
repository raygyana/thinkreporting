import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExtractComponent } from './list-extract.component';

describe('ListExtractComponent', () => {
  let component: ListExtractComponent;
  let fixture: ComponentFixture<ListExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
