import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsAccountingReports } from './accounting-reconciliation.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting-reconciliation',
  templateUrl: './accounting-reconciliation.component.html',
  styleUrls: ['./accounting-reconciliation.component.css']
})

export class AccountingReconciliationComponent extends BaseComponent implements OnInit, AfterViewInit {
  optionSelected: any;
  description1: any;
  ACCOUNTING_REPORTS = 'ACCOUNTING_REPORTS';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.ACCOUNTING_REPORTS) {
      return columnDefsAccountingReports;
    } else {
      return columnDefsAccountingReports;
    }
  }
  ngAfterViewInit() {

  }
  doOnSave(event) {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_PROMOTION_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.ACCOUNTING_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAccountingReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.ACCOUNTING_REPORTS);
    this.OnSubmit(this.ACCOUNTING_REPORTS);
  }


}
