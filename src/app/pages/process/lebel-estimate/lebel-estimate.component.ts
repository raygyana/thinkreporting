import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsLebelEstimateReports } from './lebel-estimate.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-lebel-estimate',
  templateUrl: './lebel-estimate.component.html',
  styleUrls: ['./lebel-estimate.component.css']
})
export class LebelEstimateComponent extends BaseComponent implements OnInit, AfterViewInit {
  LEBEL_ESTIMATE_REPORTS = 'LEBEL_ESTIMATE_REPORTS';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }
  description1: any;
  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.LEBEL_ESTIMATE_REPORTS) {
      return columnDefsLebelEstimateReports;
    } else {
      return columnDefsLebelEstimateReports;
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
    if (name === this.LEBEL_ESTIMATE_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadylebelEstimateReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.LEBEL_ESTIMATE_REPORTS);
    this.OnSubmit(this.LEBEL_ESTIMATE_REPORTS);
  }


}
