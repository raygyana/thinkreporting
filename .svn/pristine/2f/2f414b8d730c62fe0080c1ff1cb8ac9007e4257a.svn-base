import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';

import { GridAPII } from '../../../core/base/base.component';
import { ProcessUrls } from '../../../core/shared';


import { columnDefsCounterReports } from './data';
import { Router } from '@angular/router';
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-view-job-log',
  templateUrl: './view-job-log.component.html',
  styleUrls: ['./view-job-log.component.css']
})
export class ViewJobLogComponent extends BaseComponent implements OnInit, AfterViewInit {
  PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT_DATA = 'PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT_DATA';
  gridOptions1: any;
  columnApi1: any;
  gridApi1: any;
  AlertType: any;
  restDatebasicSetting: any;
  chooseJobQueuebasicSetting: any;
  NAME_JOB_QUEUE = 'COUNTER_REPORTS';
  NAME_JOB_LOG = 'COUNTER_REPORTS1';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);

    this.gridOptions = {};
    this.gridOptions1 = {};

  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_JOB_QUEUE) {
      return columnDefsCounterReports;
    } else {
      return columnDefsCounterReports;
    }
  }


  ngAfterViewInit() {

  }
  getServiceUrl(name): any {
    return ProcessUrls.TK_PROCESS_LISTING_URL;
  }

  ngOnInit() {
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_JOB_QUEUE) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyJobLog(api) {
    console.log('doOnGridReadyJobLog(api):-', api);
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_JOB_LOG);
    this.OnSubmit(this.NAME_JOB_LOG);
  }

  doOnGridReadyWorkTable(api) {
    console.log('doOnGridReadyWorkTable(api):-', api);
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.NAME_JOB_QUEUE);
    this.OnSubmit(this.NAME_JOB_QUEUE);
  }
}
