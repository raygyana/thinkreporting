import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBacsReports } from './bacs-dd-report.data';
import { columnDefsBacsSelectedCurrencyReports } from './bacs-dd-report.data';

import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bacs-dd-report',
  templateUrl: './bacs-dd-report.component.html',
  styleUrls: ['./bacs-dd-report.component.css']
})
export class BacsDdReportComponent extends BaseComponent implements OnInit, AfterViewInit {

  gridApi1: any;
  columnApi1: any;
  gridOptions1: any;
  description1: any;
  BACS_ORDER_REPORTS = 'BACS_ORDER_REPORTS';
  BACS_SELECTION_CURRENCY_REPORTS = 'BACS_SELECTION_CURRENCY_REPORTS';
  BACS_DESCRIPTION_REPORT = 'BACS_DESCRIPTION';
  BACS_OUTPUT_REPORT = 'BACS_OUTPUT';
  constructor(protected baseService: BaseService,
    protected router: Router
  ) { super(baseService, router); }

  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BACS_ORDER_REPORTS) {
      return columnDefsBacsReports;
    } else {
      return columnDefsBacsSelectedCurrencyReports;
    }
  }
  ngAfterViewInit() {

  }
  doOnSave(event) {

  }

  getServiceUrl(name): any {
    if (name === this.BACS_ORDER_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.BACS_SELECTION_CURRENCY_REPORTS) {
      return ProcessUrls.TK_PROCESS_LISTING_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BACS_ORDER_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.BACS_SELECTION_CURRENCY_REPORTS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    }

  }
  doOnGridReadyBacsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BACS_ORDER_REPORTS);
    this.OnSubmit(this.BACS_ORDER_REPORTS);
  }

  doOnGridReadyBacsOrderClassReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.BACS_SELECTION_CURRENCY_REPORTS);
    this.OnSubmit(this.BACS_SELECTION_CURRENCY_REPORTS);
  }
}
