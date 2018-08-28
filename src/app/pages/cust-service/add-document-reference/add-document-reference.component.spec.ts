import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentReferenceComponent } from './add-document-reference.component';

describe('AddDocumentReferenceComponent', () => {
  let component: AddDocumentReferenceComponent;
  let fixture: ComponentFixture<AddDocumentReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocumentReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
