import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsStartStopReports } from './start-stop.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent extends BaseComponent implements OnInit, AfterViewInit {

  START_STOP_REPORTS = 'START_STOP_REPORTS';
  description1: any;

  START_STOP_REPORT = 'START_STOP_REPORT';
  START_STOP_OUTPUT_REPORT = 'START_STOP_OUTPUT_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);

    this.gridOptions = {};
  }

  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.START_STOP_REPORTS) {
      return columnDefsStartStopReports;
    } else {
      return columnDefsStartStopReports
        ;
    }
  }
  ngAfterViewInit() {


  }
  doOnSave(event) {

  }
  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.START_STOP_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyStartStopReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.START_STOP_REPORTS);
    this.OnSubmit(this.START_STOP_REPORTS);
  }

}
