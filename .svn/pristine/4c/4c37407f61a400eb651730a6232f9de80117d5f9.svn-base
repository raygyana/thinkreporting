import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsPaymentReports } from './payment.data';
import { columnDefsPaymentTypeReports } from './payment.data';
import { columnDefsPaymentCurrenciesReports } from './payment.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends BaseComponent {
  PAYMENT_DESCRIPTION_REPORT = 'PAYMENT_DESCRIPTION_REPORT';
  PAYMENT_OUTPUT_REPORT = 'PAYMENT_OUTPUT_REPORT';
  gridApi1: any;
  columnApi1: any;
  description1: any;

  gridApi2: any;
  columnApi2: any;

  PAYMENTS_REPORTS = 'PAYMENTS_REPORTS';
  PAYMENT_TYPE_REPORTS = 'PAYMENT_TYPE_REPORTS';
  PAYMENT_CURRENCIES_REPORT = 'PAYMENT_CURRENCIES_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }




  doOnSave(evnt) {
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PAYMENTS_REPORTS) {
      return columnDefsPaymentReports;
    } else if (name === this.PAYMENT_TYPE_REPORTS) {
      return columnDefsPaymentTypeReports;
    } else {
      return columnDefsPaymentCurrenciesReports;
    }
  }


  getServiceUrl(name): any {
    if (name === this.PAYMENTS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.PAYMENT_CURRENCIES_REPORT) {
      return ProcessUrls.TK_CODE_DESC_SYMB_URL;
    } else if (name === this.PAYMENT_TYPE_REPORTS) {
      return ProcessUrls.TK_PROCESS_LISTING_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PAYMENTS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.PAYMENT_TYPE_REPORTS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else if (name === this.PAYMENT_CURRENCIES_REPORT) {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    }
  }
  doOnGridReadyPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PAYMENTS_REPORTS);
    this.OnSubmit(this.PAYMENTS_REPORTS);
  }

  doOnGridReadyPaymentsTypeReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.PAYMENT_TYPE_REPORTS);
    this.OnSubmit(this.PAYMENT_TYPE_REPORTS);
  }
  doOnGridReadyPaymentsCurrenciesReports(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.PAYMENT_CURRENCIES_REPORT);
    this.OnSubmit(this.PAYMENT_CURRENCIES_REPORT);
  }

}
