import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular/main';
import { AutoRenewalNotifyComponent } from '../process/auto-renewal-notify/auto-renewal-notify.component';
import { routing } from './front-panel.routing';
import { FrontPanelComponent } from './front-panel.component';
import { TopMenuBarComponent } from './../../component/top-menu-bar/top-menu-bar.component';
import { ComponentModule } from './../../component/component.module';
import { AuditParagraphReportComponent } from '../process/audit-paragraph-report/audit-paragraph-report.component';
import { AuditGalleryComponent } from '../process/audit-gallery/audit-gallery.component';
import { OutputComponent } from '../process/output/output.component';
import { ProcessModule } from '../process/process.module';

@NgModule({
      imports: [
            CommonModule,
            routing,
            ComponentModule,
            ProcessModule,
            // TopMenuBarComponent,
            AgGridModule


      ],
      declarations: [
            FrontPanelComponent
            // TopMenuBarComponent

      ]
})
export class FrontPanelModule { }
