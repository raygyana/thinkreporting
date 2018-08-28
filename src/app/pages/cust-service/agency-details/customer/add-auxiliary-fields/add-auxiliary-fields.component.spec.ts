import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuxiliaryFieldsComponent } from './add-auxiliary-fields.component';

describe('AddAuxiliaryFieldsComponent', () => {
  let component: AddAuxiliaryFieldsComponent;
  let fixture: ComponentFixture<AddAuxiliaryFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuxiliaryFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuxiliaryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
