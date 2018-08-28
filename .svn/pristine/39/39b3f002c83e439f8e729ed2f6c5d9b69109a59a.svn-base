import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { ProcessUrls, CustomerServicesUrls, Utils, SessionObject } from '../../../../core/shared';
import { Subject } from 'rxjs';
import {
  CustomModalPopUpService, CustomModalPopUpModel, DropdownWithDescriptionModel, DropdownDataModel, AlertMessageService, LoaderService
} from '../../../../component';
import { BaseComponent, BaseService, GridAPII } from '../../../../core/base';
import { PaymentsModel } from './payments.model';
import { columnDefsPaymentsReports } from './payments.data';
import { FormGroup } from '@angular/forms';
let self;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],

})
export class PaymentsComponent extends BaseComponent implements OnInit {

  PAYMENTS_REPORTS = 'PAYMENTS_REPORTS';
  PAYMENTS_DROPDOWN_REPORT = 'PAYMENTS_DROPDOWN_REPORT';
  CANCEL_PAYMENT = 'CANCEL_PAYMENT';
  TransferPaymentPopup: CustomModalPopUpModel = new CustomModalPopUpModel('Customer Search');
  paymentBreakDownPopup: CustomModalPopUpModel = new CustomModalPopUpModel('Payment BreakDown');
  paymentDepositSummaryPopup: CustomModalPopUpModel = new CustomModalPopUpModel(' ');
  reInitDepositSummary: Subject<any> = new Subject();

  basicSetting: DropdownWithDescriptionModel;
  paymentsModel: PaymentsModel;
  customerId: any;
  ddOptionsPaymentsDropdownData: any;
  checkedData1: any;
  rowselected: boolean;
  CanclPaymentData: any;
  rowSelection = 'single';
  loadTransferCustomerData: Array<any>;
  loadCustomerData: any;
  sendData: any;
  selectedRows: any;
  cherckedData: any;
  status: any;
  firstLoad: any;
  gridOptionsReports: GridOptions = {
  };

  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    private customModalPopUpService: CustomModalPopUpService,
    protected loader: LoaderService) {

    super(baseService, router);
    self = this;
    this.customerId = SessionObject.getCustomerID();
    this.paymentsModel.customerId.value = this.customerId.customerId;
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
    this.firstLoad = true;
  }
  ngOnInit() {
  }
  getForm(name: string): FormGroup {
    if (name === this.PAYMENTS_REPORTS) {
      return this.baseForm;
    }
  }
  getSearchModel(name: string) {
    if (name === this.PAYMENTS_REPORTS) {
      return this.paymentsModel;
    } else if (name === this.PAYMENTS_DROPDOWN_REPORT) {
      return this.paymentsModel;
    } else if (name === this.CANCEL_PAYMENT) {
      return this.paymentsModel;
    }
  }
  initSearchModels() {
    this.paymentsModel = new PaymentsModel();
    console.log('paymentsModel', this.paymentsModel);
  }
  getServiceUrl(name): any {
    if (name === this.PAYMENTS_REPORTS) {
      return CustomerServicesUrls.TK_PAYMENTS_URL;
    } else if (name === this.PAYMENTS_DROPDOWN_REPORT) {
      return CustomerServicesUrls.TK_PAYMENTS_DROPDOWN_URL;
    } else if (name === this.CANCEL_PAYMENT) {
      return CustomerServicesUrls.TK_CANCEL_PAYMENT_DATA;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PAYMENTS_REPORTS) {
      return columnDefsPaymentsReports;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PAYMENTS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    if (name === this.PAYMENTS_REPORTS) {
      Utils.date.convertArrayKeytoDate(data[this.paymentsModel.apiDatakey], 'creationDate');
      this.loadCustomerData = data['customerDetailsList'];
      if (this.firstLoad) {
      this.loadDataFromApi(this.PAYMENTS_DROPDOWN_REPORT)
        .subscribe((res) => {
          this.firstLoad = false;
            this.ddOptionsPaymentsDropdownData = new DropdownDataModel(res.PaymentFilterList);
            this.paymentsModel.filterDropdown.value = res.PaymentFilterList[0].key;
        });
      }
    }

  }
  onDropDownChange(event) {
      this.paymentsModel.filterDropdown.value = event;
      // this.loadDataFromApi(this.PAYMENTS_REPORTS)
      // .subscribe((res) => {

      // });
      this.OnSubmit(this.PAYMENTS_REPORTS);
  }


  // onSelect payments table Row
  agCellClicked = (event) => {
    this.cherckedData = event.data.is_reversed;
    this.checkedData1 = event.data.transactionTypeDesc;
    if (this.cherckedData !== 1) {
      if (this.checkedData1 !== 'Cancel') {
        self.selectedRows = self.gridApi.getSelectedRows();
        console.log('selectedRows', self.selectedRows);
        if (self.selectedRows.length > 0) {
          self.rowselected = true;
        }
      } else {
        self.rowselected = false;
      }
      console.log('selectedNode', self.rowselected);
    } else {
      self.rowselected = false;
    }
  }
  doOnGridReadyPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PAYMENTS_REPORTS);
    this.OnSubmit(this.PAYMENTS_REPORTS);
  }
  OpenMakePayment() {
    this.router.navigate(['pages/customer/agency-details/payments-report/make-payment'], { queryParams: { page: 'makePayment' } });

  }
  DepositPayment() {
    this.router.navigate(['pages/customer/agency-details/payments-report/make-payment'], { queryParams: { page: 'depositPayment' } });
  }
  OpenEditPayment() {
    this.SendEditPaymentDetails();
    this.router.navigate(['pages/customer/agency-details/payments-report/edit-payment']);
  }
  // send data to edit component
  SendEditPaymentDetails() {
    SessionObject.setEditPaymentData(Array.from(self.selectedRows));
  }


  // send selected data to next component
  SendPaymentDetails() {
    this.sendData = Array.from(self.selectedRows);
  }

  // open payment Transfer pop-up
  openTransferPayment() {
    this.customModalPopUpService.show(this.TransferPaymentPopup);
    this.paymentTransfer();
  }

  paymentTransfer() {
    this.loadTransferCustomerData = [];
    this.loadTransferCustomerData.push(this.loadCustomerData, this.selectedRows[0].paymentSeq);
  }
  // open payment-breakdown pop-up
  openPaymentBreakDown() {
    this.customModalPopUpService.show(this.paymentBreakDownPopup);
    this.SendPaymentDetails();
  }
  // open deposit payment
  openDepositPayment() {
    this.customModalPopUpService.show(this.paymentDepositSummaryPopup);
    this.reInitDepositSummary.next('sonu');
  }
  // cancel payment operation
  getCancelPaymentData() {
    this.CanclPaymentData = self.selectedRows[0];
    this.paymentsModel.apiDatakey = '';
    this.paymentsModel.customerId.value = this.CanclPaymentData.customerId;
    this.paymentsModel.paymentSeq.value = this.CanclPaymentData.paymentSeq;

    this.loadDataFromApi(this.CANCEL_PAYMENT)
      .subscribe((data) => {
        this.status = data.Status;
        if (this.status === true) {
          this.alert.show(['Payment Cancelled Successfully']);
          this.paymentsModel.apiDatakey = 'allPayment';
          this.OnSubmit(this.PAYMENTS_REPORTS);
          this.rowselected = false;
        } else {
          this.alert.showAlertDanger(['Error Occurs While Cancelling Payment Please try for another time']);
        }
      });
  }
  updateDataOnscreen(event) {
    if (event === true) {
      this.customModalPopUpService.hide(this.TransferPaymentPopup);
      this.paymentsModel.apiDatakey = 'allPayment';
      this.OnSubmit(this.PAYMENTS_REPORTS);
      this.rowselected = false;
    } else {
      this.customModalPopUpService.hide(this.TransferPaymentPopup);
      // this.rowselected = false;
    }

    // this.paymentsModel.apiDatakey = 'allPayment';
    // this.OnSubmit(this.PAYMENTS_REPORTS);
  }

}
