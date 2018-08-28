import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFilterComponent } from './extract-filter.component';

describe('ExtractFilterComponent', () => {
  let component: ExtractFilterComponent;
  let fixture: ComponentFixture<ExtractFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
