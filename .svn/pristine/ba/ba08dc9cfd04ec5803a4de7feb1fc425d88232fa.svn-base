import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../../core/base/base.component';
import { BaseService } from '../../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsAuditGalleryReports } from './audit-gallery.data';

import { ProcessUrls } from '../../../../core/shared';

import { GridAPII } from '../../../../core/base/base.component';
import { TabsComponent } from '../../../../component/ng-tabs/tabs.component';
// import { ProcessFooterComponent } from '../../../component/process-footer/process-footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-audit-gallery',
  templateUrl: './audit-gallery.component.html',
  styleUrls: ['./audit-gallery.component.css']
})
export class AuditGalleryComponent extends BaseComponent implements OnInit, AfterViewInit {
  description1: any;
  NAME_COUNTER_REPORTS = 'COUNTER_REPORTS';
  NAME_OUTPUT_REPORTS = 'OUTPUT_REPORTS';
  optionSelected: any;
  AUDIT_GALLERY_REPORTS = 'AUDIT_GALLERY_REPORTS';

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  characters = [
    'auto', 0
  ];
  show = [
    'All',
    'Selected Only'
  ];
  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    // if (name === this.AUDIT_GALLERY_REPORTS) {
    return columnDefsAuditGalleryReports;
    // } else {
    //   return columnDefsAuditGalleryReports;
    // }
  }
  doOnSave(event) { }

  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_AUDIT_GALLERY_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.AUDIT_GALLERY_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAuditGalleryReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.AUDIT_GALLERY_REPORTS);
    this.OnSubmit(this.AUDIT_GALLERY_REPORTS);
  }

}
