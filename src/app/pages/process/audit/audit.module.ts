import { NgModule } from '@angular/core';
import { AduitGalleySubmitJobComponent } from './aduit-galley-submit-job/aduit-galley-submit-job.component';
import { AduitParagraphReportSubmitJobComponent } from './aduit-paragraph-report-submit-job/aduit-paragraph-report-submit-job.component';
import { AuditGalleryComponent } from './audit-gallery/audit-gallery.component';
import { AuditParagraphReportComponent } from './audit-paragraph-report/audit-paragraph-report.component';
import { RootSharedModule } from '../../../core/sharedModules';

import { routing } from './audit.routing';

import { ProcessComponentModule } from '../../../component/project-comp/process/process.module';
import { ComponentModule } from '../../../component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ProcessModule } from '../process.module';

@NgModule({
      declarations: [
            AduitGalleySubmitJobComponent,
            AduitParagraphReportSubmitJobComponent,
            AuditGalleryComponent,
            AuditParagraphReportComponent
      ],
      providers: [

      ],
      imports: [
            routing,
            ProcessModule,
            RootSharedModule,
            ComponentModule,
            ProcessComponentModule,
            AgGridModule, FormsModule
      ]
})

export class AuditModule { }
