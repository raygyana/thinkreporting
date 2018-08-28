import { Component, OnInit, AfterViewInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';

import { ProcessUrls, CustomerServicesUrls, SessionObject } from '../../../../../core/shared';
import {
  CustomModalPopUpService, CustomModalPopUpModel, DropdownWithDescriptionModel, DropdownDataModel, AlertMessageService, LoaderService,
} from '../../../../../component';
import { BaseComponent, BaseService, GridAPII } from '../../../../../core/base';
import { PaymentsTransferModel } from './payment-transfer.model';
import { columnDefsPaymentsTransferReports } from './payment-transfer.data';

@Component({
  selector: 'app-payment-transfer',
  templateUrl: './payment-transfer.component.html',
  styleUrls: ['./payment-transfer.component.css']
})

export class PaymentTransferComponent extends BaseComponent implements OnChanges {

  PAYMENTS_TRANSFER_REPORTS = 'PAYMENTS_TRANSFER_REPORTS';
  // TransferAlertSetting: CustomModalPopUpModel = new CustomModalPopUpModel('Alert');
  basicSetting: DropdownWithDescriptionModel;
  paymentsTransferModel: PaymentsTransferModel;
  @Input() loadData: any;
  @Output() UpdateTransferData = new EventEmitter<any>();

  gridApi: any;
  selectedRows: any;
  customerId: any;
  rowselected: any;
  custData: any;

  constructor(
    protected alert: AlertMessageService,
    protected customModalPopUpService: CustomModalPopUpService,
    protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.getGridApi(name);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }
  ngOnChanges() {

    this.customerId = SessionObject.getCustomerID();
    if (this.loadData) {
      this.gridApi.setRowData(this.loadData[0]);
    }
  }

  getSearchModel(name: string) {
    if (name === this.PAYMENTS_TRANSFER_REPORTS) {
      return this.paymentsTransferModel;
    }
  }
  // getForm(name: string): FormGroup {
  //   if (name === this.PAYMENTS_TRANSFER_REPORTS) {
  //     return this.baseForm;
  //   }
  // }
  initSearchModels() {
    this.paymentsTransferModel = new PaymentsTransferModel();
    console.log('PaymentsBreakDownModel', this.paymentsTransferModel);
  }
  getServiceUrl(name): any {
    if (name === this.PAYMENTS_TRANSFER_REPORTS) {
      return CustomerServicesUrls.TK_PAYMENTS_TRANSFER_URL;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PAYMENTS_TRANSFER_REPORTS) {
      return columnDefsPaymentsTransferReports;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PAYMENTS_TRANSFER_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }
  doOnGridReadyPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PAYMENTS_TRANSFER_REPORTS);
  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    this.paymentsTransferModel.customerId.value = this.customerId.customerId;
    if (headerName.toLowerCase() === 'select' && event.event.target.className === 'custom-control-input') {
      this.selectedRows = event['data'];
      if (this.paymentsTransferModel.customerId.value === this.paymentsTransferModel.recverCustomerId.value) {
        this.UpdateTransferData.emit();
        //   this.customModalPopUpService.show(this.TransferAlertSetting);
        this.alert.showAlertDanger(['Payment can not be transfered to the current user only.']);
      } else {
        this.PaymentTransfer();
      }

      if (this.selectedRows.length > 0) {
        this.rowselected = true;
      } else {
        this.rowselected = false;
      }
    }
  }

  getLoadData(name) {
    console.log('anydata', this.loadData[0]);
    this.custData = this.loadData[0];
    this.xtBaseLoadDataFromApiProcessData(this.PAYMENTS_TRANSFER_REPORTS, this.loadData[0]);
    this.gridApi = this.getGridApi(this.PAYMENTS_TRANSFER_REPORTS).gridApi;

    this.gridApi.setRowData(this.loadData[0]);
    this.gridApi.totalRowCount = this.loadData[0].length;
    this.autoSizeColumns(this.PAYMENTS_TRANSFER_REPORTS);
  }

  PaymentTransfer() {
    this.paymentsTransferModel.customerId.value = this.customerId.customerId;
    this.paymentsTransferModel.paymentSeq.value = this.loadData[1];
    this.paymentsTransferModel.recverCustomerId.value = this.selectedRows.customer_id;
    this.loadDataFromApi(this.PAYMENTS_TRANSFER_REPORTS)
      .subscribe((data) => {
        const status = data.Status;

        if (data.Status === true) {
          this.UpdateTransferData.emit(data.Status);

          this.alert.show(['Payment Transefered Successfully!!']);
        } else {
          this.UpdateTransferData.emit();
          this.alert.showAlertDanger(['Error While Transfering Payment please try Again!!']);
        }
      });

  }

}
