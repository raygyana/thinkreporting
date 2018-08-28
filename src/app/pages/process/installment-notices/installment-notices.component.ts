import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsInstallmentDefinitionReports } from './installment-notices.data';
import { columnDefsInstallmentPlansReports } from './installment-notices.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-installment-notices',
  templateUrl: './installment-notices.component.html',
  styleUrls: ['./installment-notices.component.css']
})
export class InstallmentNoticesComponent extends BaseComponent implements OnInit, AfterViewInit {

  description1: any;
  gridApi1: any;
  columnApi1: any;
  gridOptions1: any;

  INSTALLMENT_DEFINITION_REPORTS = 'INSTALLMENT_DEFINITION_REPORTS';
  INSTALLMENT_PLANS_REPORT = 'INSTALLMENT_PLANS_REPORT';

  INSTALLMENT_DESCRIPTION_REPORT = 'INSTALLMENT_DESCRIPTION_REPORT';
  INSTALLMENT_REPORT = 'INSTALLMENT_REPORT';
  INSTALLMENT_OUTPUT_REPORT = 'INSTALLMENT_OUTPUT_REPORT';
  AUTO_RENEWAL_REPORT = 'AUTO_RENEWAL_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.INSTALLMENT_DEFINITION_REPORTS) {
      return columnDefsInstallmentDefinitionReports;
    } else {
      return columnDefsInstallmentPlansReports;
    }
  }
  ngAfterViewInit() {


  }

  doOnSave(event) {

  }
  getServiceUrl(name): any {
    // if (name === this.INSTALLMENT_DEFINITION_REPORTS) {
    return ProcessUrls.TK_ORDER_CLASS_URL;
    // } else if (name === this.INSTALLMENT_PLANS_REPORT) {
    //   return ProcessUrls.TABLE_DEMO;
    // }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.INSTALLMENT_DEFINITION_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.INSTALLMENT_PLANS_REPORT) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    }

  }
  doOnGridReadyinstallmentDefinitionReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.INSTALLMENT_DEFINITION_REPORTS);
    this.OnSubmit(this.INSTALLMENT_DEFINITION_REPORTS);
  }

  doOnGridReadyinstallmentPlansReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.INSTALLMENT_PLANS_REPORT);
    this.OnSubmit(this.INSTALLMENT_PLANS_REPORT);
  }
}
