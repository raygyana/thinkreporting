import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBackLableReports } from './backleble-report.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-backleble-report',
  templateUrl: './backleble-report.component.html',
  styleUrls: ['./backleble-report.component.css']
})
export class BacklebleReportComponent extends BaseComponent implements OnInit, AfterViewInit {
  description1: any;
  BACK_LEBEL_REPORT = 'BACK_LEBEL';
  BLACKLEBEL_OUTPUT_REPORTS = 'BLACKLEBEL_OUTPUT';
  BACK_LABLE_REPORTS = 'BACK_LABLE_REPORTS';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }
  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BACK_LABLE_REPORTS) {
      return columnDefsBackLableReports;
    } else {
      return columnDefsBackLableReports;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BACK_LABLE_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }
  doOnSave(event) {

  }

  doOnGridReadyBackLabelReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BACK_LABLE_REPORTS);
    this.OnSubmit(this.BACK_LABLE_REPORTS);
  }



}
