import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditGalleryComponent } from './audit-gallery.component';

describe('AuditGalleryComponent', () => {
  let component: AuditGalleryComponent;
  let fixture: ComponentFixture<AuditGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
