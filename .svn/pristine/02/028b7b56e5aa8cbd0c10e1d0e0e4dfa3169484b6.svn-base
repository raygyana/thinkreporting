import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent, BaseService, ModelPopUpBase, GridAPII } from '../../../../../core/base';
import { GridApi, ColumnApi, ColDef, GridOptions, ColDefUtil } from 'ag-grid';

import {
  CustomModalPopUpService, CustomModalPopUpModel, DropdownWithDescriptionModel, DropdownDataModel, AlertMessageService
} from '../../../../../component';
import { ProcessUrls, CustomerServicesUrls, SessionObject, Utils, ProjectUtils } from '../../../../../core/shared';
import { DepositPaymentsModel } from './payment-deposit-summary.model';
import {
  columnDefsDepositSummaryReports,
  columnDefsDepositDetailsReports, columnDefsJournalDetailsReports
} from './payment-deposit-summary-data';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-payment-deposit-summary',
  templateUrl: './payment-deposit-summary.component.html',
  styleUrls: ['./payment-deposit-summary.component.css']
})
export class PaymentDepositSummaryComponent extends ModelPopUpBase implements OnInit {

  DEPOSIT_SAUMMARY_REPORTS = 'DEPOSIT_SAUMMARY_REPORTS';
  DEPOSIT_DETAIL_REPORTS = 'DEPOSIT_DETAIL_REPORTS';
  DEPOSIT_JOURNAL_DETAIL_REPORTS = 'DEPOSIT_JOURNAL_DETAIL_REPORTS';
  PAYMENT_REFUND_DETAILS = 'PAYMENT_REFUND_DETAILS';
  DepositDetailsPopup: CustomModalPopUpModel = new CustomModalPopUpModel('Deposit Detail');

  depositPaymentsModel: DepositPaymentsModel;
  // gridOptionsReports: GridOptions = {};
  depositAccountJournalData: any;
  depositDetailData: any;
  depositSummaryList: any[];
  DepositData: any;
  gridApi1: any;
  columnApi1: any;
  depositSummary:boolean = true;
  refundPage: boolean = false;
  title: any;
  currency: any;
  depositBalance: any;
  selected: any;

  selectedrowdata: any;

  constructor(protected baseService: BaseService,
    protected router: Router,
    private alert: AlertMessageService,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
     this.gridOptions.onCellClicked = this.agCellClicked;
    this.title = 'Deposit Summary';
    const customerId = SessionObject.getCustomerID();
    this.depositPaymentsModel.customerId.value = customerId.customerId;
    this.selected = false;
   // this.depositSummary = true;
  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
     this.selected = true;
    if (headerName.toLowerCase() === 'select') {
      // this.rowdata = event;
      this.depositPaymentsModel.currency.value = event.data.currency;
      this.depositPaymentsModel.payAmount.value = event.data.customer_deposit_pay_amt;
      this.depositPaymentsModel.depositBalance.value = event.data.customer_deposit_pay_amt;
      console.log('rowdata', event);

      this.selectedrowdata = event['data'];
    }

  }

  firstReInit() {
    // this.depositSummary = true;
    this.OnSubmit(this.DEPOSIT_SAUMMARY_REPORTS);
  }

  reInit() {
    this.selected = false;
    this.depositSummary = true;
    this.refundPage = false;
    this.OnSubmit(this.DEPOSIT_SAUMMARY_REPORTS);
    this.openDepositSummary();
    // this.OnSubmit(this.DEPOSIT_SAUMMARY_REPORTS);
    // this.openDepositDetails();

  }

  getForm(name: string): FormGroup {
    if (name === this.DEPOSIT_SAUMMARY_REPORTS) {
      return this.baseForm;
    }
  }


  initSearchModels() {
    this.depositPaymentsModel = new DepositPaymentsModel();
    console.log('depositPaymentsModel', this.depositPaymentsModel);
  }


  getSearchModel(name: string) {
    if (name === this.DEPOSIT_SAUMMARY_REPORTS) {
      this.depositPaymentsModel.apiDatakey = 'depositSummaryList';
      return this.depositPaymentsModel;
    } else if (name === this.DEPOSIT_DETAIL_REPORTS) {
      this.depositPaymentsModel.apiDatakey = 'depositDetailsList';
      return this.depositPaymentsModel;
    } else if (name === this.DEPOSIT_JOURNAL_DETAIL_REPORTS) {
      this.depositPaymentsModel.apiDatakey = 'depositAccountJournal';
      return this.depositPaymentsModel;
    } else if (name ===  this.PAYMENT_REFUND_DETAILS) {
      this.depositPaymentsModel.apiDatakey = '';
      return this.depositPaymentsModel;
    }
  }

  getServiceUrl(name): any {
    if (name === this.DEPOSIT_SAUMMARY_REPORTS) {
      return CustomerServicesUrls.TK_PAYMENTS_DEPOSIT_SUMMARY_URL;
    } else if (name === this.PAYMENT_REFUND_DETAILS) {
      return CustomerServicesUrls.TK_PAYMENT_REFUND_URL;
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.DEPOSIT_SAUMMARY_REPORTS) {
      return columnDefsDepositSummaryReports;
    } else if (name === this.DEPOSIT_DETAIL_REPORTS) {
      return columnDefsDepositDetailsReports;
    } else if (name === this.DEPOSIT_JOURNAL_DETAIL_REPORTS) {
      return columnDefsJournalDetailsReports;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.DEPOSIT_SAUMMARY_REPORTS || this.DEPOSIT_DETAIL_REPORTS || this.DEPOSIT_JOURNAL_DETAIL_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyDepositSummaryPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.DEPOSIT_SAUMMARY_REPORTS);
    //   this.OnSubmit(this.DEPOSIT_SAUMMARY_REPORTS);
  }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    this.DepositData = data;
    this.depositSummaryList = data['depositSummaryList'];
    this.depositDetailData = data['depositDetailsList'];
    this.depositAccountJournalData = data['depositAccountJournal'];
  }


  openDepositSummary() {
    this.title = 'Deposit Summary';
    this.doOnGridReady(this.DEPOSIT_SAUMMARY_REPORTS);
    if (this.DepositData) {
      this.bindDataToGrid(this.DEPOSIT_SAUMMARY_REPORTS, this.DepositData);
    }
  }

  openDepositDetails() {
    this.depositSummary = true;
    this.refundPage = false;
    this.title = 'Deposit Details';
    this.doOnGridReady(this.DEPOSIT_DETAIL_REPORTS);
    this.bindDataToGrid(this.DEPOSIT_DETAIL_REPORTS, this.DepositData);
    Utils.date.convertArrayKeytoDate(this.DepositData[this.depositPaymentsModel.apiDatakey], 'creation_date');
  }

  openDepositJournalDetails() {
    this.depositSummary = true;
    this.refundPage = false;
    this.title = 'Journal Details';
    this.doOnGridReady(this.DEPOSIT_JOURNAL_DETAIL_REPORTS);
    this.bindDataToGrid(this.DEPOSIT_JOURNAL_DETAIL_REPORTS, this.DepositData);
  }

  openPaymentRefund() {
    this.refundPage = true;
    this.depositSummary = false;
    this.title = 'Refund';
    Utils.date.convertArrayKeytoDate(this.DepositData[this.depositPaymentsModel.apiDatakey], 'creation_date');
  }


  onPaymentRefundSave() {
    this.showLoader();
    this.loadDataFromApi(this.PAYMENT_REFUND_DETAILS)
      .subscribe((res) => {
        this.hideLoader();
        const status = res.Status;
        if (status === true) {
          this.alert.showAlertScucess(['refund Made Successfully!!']);
          this.openDepositSummary();
        } else if (status === false) {
          this.alert.showAlertDanger(['Error While refund Payment!!']);
        }
      }, err => {
        console.log('error is ', err);
        this.hideLoader();
      });
    this.doOnGridReady(this.PAYMENT_REFUND_DETAILS);
    this.bindDataToGrid(this.PAYMENT_REFUND_DETAILS, this.DepositData);
  }

}
