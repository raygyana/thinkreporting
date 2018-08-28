import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsRefundReports } from './refunds.data';
import { columnDefsRefundPaymentTypeReports } from './refunds.data';
import { columnDefsRefundCurrenciesReports } from './refunds.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.css']
})
export class RefundsComponent extends BaseComponent implements OnInit, AfterViewInit {

  gridApi1: any;
  columnApi1: any;
  gridApi2: any;
  columnApi2: any;
  gridOptions1: any;
  gridOptions2: any;

  REFUNDS_REPORTS = 'REFUNDS_REPORTS';
  REFUND_PAYMENT_REPORT = 'REFUND_PAYMENT_REPORT';
  RENTAL_CURRENCIES_REPORT = 'RENTAL_CURRENCIES_REPORT';

  REFUND_DESCRIPTION_REPORT = 'REFUND_DESCRIPTION';
  REFUND_OUTPUT_REPORT = 'REFUND_OUTPUT_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptions = {};
    this.gridOptions1 = {};
    this.gridOptions2 = {};
  }

  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.REFUNDS_REPORTS) {
      return columnDefsRefundReports;
    } else if (name === this.REFUND_PAYMENT_REPORT) {
      return columnDefsRefundPaymentTypeReports;
    } else if (name === this.RENTAL_CURRENCIES_REPORT) {
      return columnDefsRefundCurrenciesReports;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    if (name === this.REFUNDS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.REFUND_PAYMENT_REPORT) {
      return ProcessUrls.TK_PROCESS_LISTING_URL;
    } else {
      return ProcessUrls.TK_PROCESS_LISTING_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.REFUNDS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.REFUND_PAYMENT_REPORT) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    }

  }
  doOnGridReadyRefundsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.REFUNDS_REPORTS);
    this.OnSubmit(this.REFUNDS_REPORTS);
  }

  doOnGridReadyRefundPaymentsReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.REFUND_PAYMENT_REPORT);
    this.OnSubmit(this.REFUND_PAYMENT_REPORT);
  }

  doOnGridReadyRefundCurrenciesReports(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.RENTAL_CURRENCIES_REPORT);
    this.OnSubmit(this.RENTAL_CURRENCIES_REPORT);
  }
}
