import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AduitGalleySubmitJobComponent } from './aduit-galley-submit-job/aduit-galley-submit-job.component';
import { AduitParagraphReportSubmitJobComponent } from './aduit-paragraph-report-submit-job/aduit-paragraph-report-submit-job.component';
import { AuditGalleryComponent } from './audit-gallery/audit-gallery.component';
import { AuditParagraphReportComponent } from './audit-paragraph-report/audit-paragraph-report.component';
import { RootSharedModule } from '../../../core/sharedModules';

export const routes: Routes = [
      {
            path: 'galary-submit-job',
            component: AduitGalleySubmitJobComponent
      },
      {
            path: 'paragraph-report-submit-job',
            component: AduitParagraphReportSubmitJobComponent
      }, {
            path: 'audit-gallery',
            component: AuditGalleryComponent
      },
      {
            path: 'paragraph-report',
            component: AuditParagraphReportComponent
      }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
