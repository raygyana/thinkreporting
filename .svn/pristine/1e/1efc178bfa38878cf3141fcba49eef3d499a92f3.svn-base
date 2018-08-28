import { Component, OnInit, AfterContentInit, Output, Input, OnChanges } from '@angular/core';
import { BaseComponent, BaseService } from '../../../../../core/base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsPaymentsBreakDownReports } from './payment-breakdown.data';
// import { CustomModalPopUpModel } from '../../../../../component/custom-modal-pop-up';
// import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up';
import { ProcessUrls, CustomerServicesUrls, Utils } from '../../../../../core/shared';
import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../../../component/dropdown-with-description';
import { Router } from '@angular/router';
import { PaymentsBreakDownModel } from './payment-breakdown.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-breakdown',
  templateUrl: './payment-breakdown.component.html',
  styleUrls: ['./payment-breakdown.component.css']
})
export class PaymentBreakdownComponent extends BaseComponent implements OnInit, OnChanges {

  PAYMENTS_BREAKDOWN_REPORTS = 'PAYMENTS_BREAKDOWN_REPORTS';
  @Input() editData: any;

  paymentsBreakDownModel: PaymentsBreakDownModel;

  gridOptionsReports: GridOptions = {

  };

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    // this.gridOptionsReports.groupMultiAutoColumn = true;
  }

  ngOnInit() {
  }
  ngOnChanges() {

    if (!Utils.isEmpty(this.editData)) {
      this.paymentsBreakDownModel.customerId.value = this.editData[0].customerId;
      this.paymentsBreakDownModel.paymentSeq.value = this.editData[0].paymentSeq;
      this.paymentsBreakDownModel.payCurrencyAmount.value = this.editData[0].payAmount;
      this.paymentsBreakDownModel.baseAmount.value = this.editData[0].baseAmount;
      this.paymentsBreakDownModel.customerDepositPayAmt.value = this.editData[0].customerDepositPayAmt;
      this.paymentsBreakDownModel.refundDepositPayAmt.value = this.editData[0].refundDepositPayAmt;

      // this.paymentsBreakDownModel.payCurrencyAmount = this.editData[0].payCurrencyAmount;

      this.OnSubmit(this.PAYMENTS_BREAKDOWN_REPORTS);
    }
  }

  initSearchModels() {
    this.paymentsBreakDownModel = new PaymentsBreakDownModel();
    console.log('PaymentsBreakDownModel', this.paymentsBreakDownModel);
  }
  getSearchModel(name: string) {
    if (name === this.PAYMENTS_BREAKDOWN_REPORTS) {
      return this.paymentsBreakDownModel;
    }
  }
  getForm(name: string): FormGroup {
    if (name === this.PAYMENTS_BREAKDOWN_REPORTS) {
      return this.baseForm;
    }
  }
  getServiceUrl(name): any {
    if (name === this.PAYMENTS_BREAKDOWN_REPORTS) {
      return CustomerServicesUrls.TK_PAYMENT_BREAKDOWN_URL;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PAYMENTS_BREAKDOWN_REPORTS) {
      return columnDefsPaymentsBreakDownReports;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PAYMENTS_BREAKDOWN_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }
  loadDataFromApiNSetGrid(name): any {
    this.loadDataFromApi(this.PAYMENTS_BREAKDOWN_REPORTS)
      .subscribe((data) => {
        data = data.viewPaymentBreakdownList;
        console.log('dataaaaaaa', data);
        this.xtBaseLoadDataFromApiProcessData(name, data);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(data);
        gridApi.totalRowCount = data.length;
        this.autoSizeColumns(name);
      });
  }

  doOnGridReadyPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PAYMENTS_BREAKDOWN_REPORTS);
  }
}
