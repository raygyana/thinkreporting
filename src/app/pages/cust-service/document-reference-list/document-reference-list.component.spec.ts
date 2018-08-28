import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentReferenceListComponent } from './document-reference-list.component';

describe('DocumentReferenceListComponent', () => {
  let component: DocumentReferenceListComponent;
  let fixture: ComponentFixture<DocumentReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
