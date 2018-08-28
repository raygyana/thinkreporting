import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsCounterReports } from './audit-paragraph-report.data';

import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audit-paragraph-report',
  templateUrl: './audit-paragraph-report.component.html',
  styleUrls: ['./audit-paragraph-report.component.css']
})
export class AuditParagraphReportComponent
  extends BaseComponent
  implements OnInit, AfterViewInit {
  AUDIT_PARAGRAPH_REPORTS = 'COUNTER_REPORTS';
  optionSelected: any;
  description1: any;
  gridOptions: any;
  columnDefsCounterReports = columnDefsCounterReports;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);

    // this.gridOptions = {};
  }

  characters = [
    'auto', 0, 0
  ];
  AuditType = [
    'Actual',
    'Prospect'
  ];
  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.AUDIT_PARAGRAPH_REPORTS) {
      return columnDefsCounterReports;
    } else {
      return columnDefsCounterReports;
    }
  }
  ngAfterViewInit() {

  }
  doOnSave(event) { }

  getServiceUrl(name): any {
    return ProcessUrls.TK_AUDIT_PARAGRAPH_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.AUDIT_PARAGRAPH_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyCounterReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.AUDIT_PARAGRAPH_REPORTS);
    this.OnSubmit(this.AUDIT_PARAGRAPH_REPORTS);
  }
  onDoSave(evnt) {

  }
}
