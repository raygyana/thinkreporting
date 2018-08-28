import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent, BaseService, GridAPII } from '../../../../../core/base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import {
  CustomModalPopUpService, CustomModalPopUpModel,
  DropdownWithDescriptionModel,
  LoaderService, DropdownDataModel, AlertMessageService, AgCheckBoxComponent, AgChecboxHeaderComponent, AgCheckBoxService
} from '../../../../../component';
import { CustomerServicesUrls, SessionObject, ProjectUtils, Utils } from '../../../../../core/shared';
import { MakePaymentsModel, MakePaymentsSetDataModel } from './make-payments.model';
import { FormGroup } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';


@Component({
  selector: 'app-make-payments',
  templateUrl: './make-payments.component.html',
  styleUrls: ['./make-payments.component.css']
})
export class MakePaymentsComponent extends BaseComponent implements OnInit, OnChanges {

  MAKE_PAYMENTS_REPORTS = 'MAKE_PAYMENTS_REPORTS';
  MAKE_PAYMENT_FILTER_REPORT = 'MAKE_PAYMENT_FILTER_REPORT';
  MAKE_PAYMENT_SAVE_REPORT = 'MAKE_PAYMENT_SAVE_REPORT';
  DEPOSIT_PAYMENTS_REPORTS = 'DEPOSIT_PAYMENTS_REPORTS';

  addnewpopupPaymentthresoldSetting: CustomModalPopUpModel = new CustomModalPopUpModel('Paymentthresold Handling');
  makePaymentsModel: MakePaymentsModel;
  makePaymentsSetDataModel: MakePaymentsSetDataModel;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };

  agGridData = [];
  paymentTypeData: any;
  trasactionData: any;
  OrderShowData: any;
  orderWhereData: any;
  payerCustomerData: any;
  defaultValue: any = 0;
  currencyData: Array<any>;
  orderFilterForRecipientData: any;
  ddOptionsCurrency: DropdownWithDescriptionModel;
  // baseAmount: any;
  gridOptionsReports: GridOptions = {};
  firstLoad = true;
  gridApi1: GridApi;
  columnApi1: ColumnApi;
  initialLoad: boolean;
  show: boolean;
  page: any;
  makePayment: false;
  Heading: any;
  checked: any;
  disabled: boolean;
  orderId: Array<any>;
  orderIdArr: Array<any> = [];
  checkedData: Array<any> = [];
  orderItemSequence: any;
  pagetoShow: any;
  payAmount: any;
  // firstApiload: boolean = true;
  state: boolean;
  context: any;
  frameworkComponents: any;

  constructor(
    private customModalPopUpService: CustomModalPopUpService,
    private route: ActivatedRoute,
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    private agCheckSer: AgCheckBoxService) {
    super(baseService, router);
    // this.gridOptionsReports.onCellClicked = this.agCellClicked;
    this.initialLoad = true;
    this.show = false;
    this.state = false;
    this.context = { componentParent: this };
    this.frameworkComponents = {
      AgCheckBoxComponent: AgCheckBoxComponent,
      AgChecboxHeaderComponent: AgChecboxHeaderComponent
    };
  }
  ngOnChanges() {
    // this.page = this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // this.page = params['page'];

    //   });
  }
  ngOnInit() {
    this.page = this.route
      .queryParams
      .subscribe(params => {
        this.pagetoShow = params['page'];
        this.orderId = params['orderhdrId'];
        this.orderItemSequence = params['line'];
        if (this.orderId === undefined || this.orderItemSequence === undefined) {
          this.orderId = this.defaultValue;
          this.orderItemSequence = this.defaultValue;

        }
        if (this.pagetoShow === 'depositPayment') {
          this.Heading = 'Deposit Payment';
        } else {
          this.Heading = 'Make Payment';
        }
      });
    this.makePaymentsModel.balancedue.value = this.defaultValue;
    this.makePaymentsModel.payer.value = this.defaultValue;
    this.makePaymentsModel.recipient.value = this.defaultValue;
    this.checkPaymentAmount();
    this.initDropDown();
    const sessionObject = SessionObject.getCustomerID();
    this.makePaymentsModel.customerId.value = sessionObject.customerId;
    this.makePaymentsSetDataModel.customerId.value = this.makePaymentsModel.customerId.value;
    // this.makePaymentsSetDataModel.currency.value = this.makePaymentsModel.currency.value;
    this.makePaymentsSetDataModel.overPaymentAccount.value = '0';
    console.log('value', this.makePaymentsSetDataModel.paymentType.value);
  }

  initDropDown() {
    this.ddOptionsCurrency = new DropdownWithDescriptionModel();
    this.ddOptionsCurrency.descriptionKey = '';
    this.ddOptionsCurrency.displayKey = 'currency';
    this.ddOptionsCurrency.valueTypeOrKey = 'exchange_rate';
    this.ddOptionsCurrency.ListDisplayKeys = [{
      displayKey: 'description',
      headerName: '--select--'
    }];
  }
  getForm(name: string): FormGroup {
    if ((name === this.MAKE_PAYMENTS_REPORTS) || (name === this.MAKE_PAYMENT_SAVE_REPORT)) {
      return this.baseForm;
    }
  }
  initSearchModels() {
    this.makePaymentsModel = new MakePaymentsModel();
    this.makePaymentsSetDataModel = new MakePaymentsSetDataModel();
    console.log('MakePaymentsModel', this.makePaymentsSetDataModel);
    // this.makePaymentsModel.currency.value = 'GBP';
  }
  getSearchModel(name: string) {
    if (name === this.MAKE_PAYMENTS_REPORTS) {
      return this.makePaymentsModel;
    } else if (name === this.MAKE_PAYMENT_FILTER_REPORT) {
      return this.makePaymentsSetDataModel;
    } else if (name === this.MAKE_PAYMENT_SAVE_REPORT) {
      return this.makePaymentsSetDataModel;
    } else if (name === this.DEPOSIT_PAYMENTS_REPORTS) {
      return this.makePaymentsSetDataModel;
    }
  }

  getNonSearchModelParams(name) {
    if (name === this.MAKE_PAYMENTS_REPORTS || name === this.MAKE_PAYMENT_SAVE_REPORT) {
      const obj = {
        // orderId: this.orderIdArr
        orderId: this.orderId,
        orderItemSeq: this.orderItemSequence
      };
      return obj;
    }
  }

  validNumber(e: any) {
    return ProjectUtils.numericValidation(e);
  }

  getServiceUrl(name): any {
    if (name === this.MAKE_PAYMENTS_REPORTS) {
      return CustomerServicesUrls.TK_MAKE_PAYMENTS_URL;
    } else if (name === this.MAKE_PAYMENT_FILTER_REPORT) {
      return CustomerServicesUrls.TK_MAKE_PAYMENTS_TABLE_FILTER_URL;
    } else if (name === this.MAKE_PAYMENT_SAVE_REPORT) {
      return CustomerServicesUrls.TK_MAKE_PAYMENTS_SAVE_URL;
    } else if (name === this.DEPOSIT_PAYMENTS_REPORTS) {
      return CustomerServicesUrls.TK_DEPOSIT_PAYMENTS_URL;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.MAKE_PAYMENT_FILTER_REPORT) {
      return;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.MAKE_PAYMENTS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.MAKE_PAYMENT_FILTER_REPORT) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    }
  }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    if (data['CustomerDetailsForPayment']) {
      Utils.date.convertArrayKeytoDate(data[this.makePaymentsModel.apiDatakey], 'order_date');
      // get dropdown Data
      this.payerCustomerData = new DropdownDataModel(data['payerCustomerList']);
      this.paymentTypeData = new DropdownDataModel(data['PaymentTypeList']);
      this.currencyData = data['CurrencyTypeList'];
      this.trasactionData = new DropdownDataModel(data['transactionStatus']);
      this.OrderShowData = new DropdownDataModel(data['OrderFilterList']);
      this.orderWhereData = new DropdownDataModel(data['OrderFilterListForPayer']);
      this.orderFilterForRecipientData = new DropdownDataModel(data['OrderFilterListRecipient']);

      this.payAmount = (data['paymentAmount']).toFixed(2);
      // drop down default values
      if (data['transactionStatus']) {
        this.makePaymentsSetDataModel.paymentClearStatus.value = data['transactionStatus'][3].key;
      }

      if (data['payerCustomerList'].length !== 0) {
        this.makePaymentsSetDataModel.payerCustomer.value = data['payerCustomerList'][0].key;
      }
      if (this.Heading === 'Make Payment') {
        if (this.firstLoad) {
          this.makePaymentsSetDataModel.payAmount.value = (data['paymentAmount']).toFixed(2);
        }
      } else if (this.Heading === 'Deposit Payment') {
        if (this.firstLoad) {
          this.makePaymentsSetDataModel.payAmount.value = (this.defaultValue.toFixed(2));
        } else {
          this.makePaymentsSetDataModel.payAmount.value = this.makePaymentsSetDataModel.payAmount.value;
        }
      }

      this.checkPaymentAmount();
      this.makePaymentsSetDataModel.balancedue.value = data['OrderFilterList'][0].key;
      this.makePaymentsSetDataModel.payer.value = data['OrderFilterListForPayer'][0].key;
      this.makePaymentsSetDataModel.recipient.value = data['OrderFilterListRecipient'][0].key;
      this.getPaymentCurrencyBaseAmountOnExchangeRate();

      // Set Order Currency Value
      this.makePaymentsSetDataModel.payerCustomer.value = this.makePaymentsSetDataModel.customerId.value;

      if (this.firstLoad) {
        this.makePaymentsSetDataModel.orderCurrency.value = this.makePaymentsSetDataModel.payAmount.value;
      }
    }
    if (data['OrderFilterDataList']) {
      this.agGridData = data['OrderFilterDataList'];
      data['OrderFilterDataList'].forEach(element => {

        if (element.netBaseAmount > 0) {
          element.checkbox = {
            value: true,
            readonly: false
          };
        } else {
          element.checkbox = {
            value: false,
            readonly: false
          };
        }
      });
      Utils.date.convertArrayKeytoDate(data[this.makePaymentsSetDataModel.apiDatakey], 'orderDate');
    }
  }

  addAdditionalHeaderToDynamicHeaders(name: string) {
    const columns = ProjectUtils.AddSelectCheckbox([], 'Select');
    return columns;
  }

  doOnGridReadyPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.MAKE_PAYMENTS_REPORTS);
    this.OnSubmitNDontValidate(this.MAKE_PAYMENTS_REPORTS);
  }
  doOnGridReadyPaymentsFilterReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.MAKE_PAYMENT_FILTER_REPORT);
    // this.OnSubmit(this.MAKE_PAYMENT_FILTER_REPORT);
  }

  OnDropDownChange(eventdata: any) {
    this.show = false;
    this.initialLoad = true;
    this.firstLoad = false;
    // this.setPaymentCurrency();

    this.OnSubmitNDontValidate(this.MAKE_PAYMENTS_REPORTS);
    console.log('currency', this.makePaymentsModel.currency.value);
    this.makePaymentsSetDataModel.currency.value = this.makePaymentsModel.currency.value;
    // if (this.state === true) {
    //   this.makePaymentsSetDataModel.paymentCurrency.value =
    //     (this.payAmount * this.makePaymentsSetDataModel.exchangeRate.value).toFixed(2);

    // }

    if (this.currencyData) {

      this.currencyData.forEach(element => {
        if (element.currency === this.makePaymentsModel.currency.value) {
          this.makePaymentsSetDataModel.exchangeRate.value = (element['exchange_rate']);
        }
      });
      this.setPaymentCurrency();
      this.calcOverPayValue();
      this.getPaymentCurrencyBaseAmountOnExchangeRate();
    } else {
      this.makePaymentsSetDataModel.exchangeRate.value = 0.00;
      this.makePaymentsSetDataModel.baseAmount.value = 0.00;
      // this.makePaymentsSetDataModel.payAmount.value = 0.00;
    }

  }
  // get payCurrency and Base Amount
  getPaymentCurrencyBaseAmountOnExchangeRate() {
    this.makePaymentsSetDataModel.baseAmount.value =
      (this.makePaymentsSetDataModel.exchangeRate.value * this.makePaymentsSetDataModel.payAmount.value).toFixed(2);

    // const baseAmount = this.makePaymentsSetDataModel.baseAmount.value;
    // this.makePaymentsSetDataModel.baseAmount.value = baseAmount;
    this.setPaymentCurrency();
  }

  setPaymentCurrency() {

    if (this.payAmount !== '0') {
      if (this.makePaymentsSetDataModel.payAmount.value !== '0.00') {
        this.makePaymentsSetDataModel.paymentCurrency.value =
          (this.payAmount * (1 / this.makePaymentsSetDataModel.exchangeRate.value)).toFixed(2);
      } else {
        this.makePaymentsSetDataModel.paymentCurrency.value = this.defaultValue;
      }
    }
  }

  setAmountOnPaymentCurr() {

    this.state = true;
    this.makePaymentsSetDataModel.payAmount.value = this.makePaymentsSetDataModel.paymentCurrency.value;
    this.makePaymentsSetDataModel.baseAmount.value =
      (this.makePaymentsSetDataModel.exchangeRate.value * this.makePaymentsSetDataModel.payAmount.value).toFixed(2);

  }

  ApplyFilterOnOrderData() {
    this.show = true;
    this.initialLoad = false;
    this.OnSubmit(this.MAKE_PAYMENT_FILTER_REPORT);
  }

  // on pay amount set save button disabled
  checkPaymentAmount() {

    if (this.makePaymentsSetDataModel.payAmount.value === '0.00' ||
      this.makePaymentsSetDataModel.payAmount.value === 0 || this.makePaymentsSetDataModel.payAmount.value === '0') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }
  OnMakePaymentSave() {
    // payment against multiple order id

    // this.checkedData = this.agCheckSer.getCheckedValues(this.agGridData, 'checkbox');
    // this.orderIdArr = [];
    // if (this.checkedData.length > 0) {
    //   this.checkedData.forEach(element => {
    //     this.orderIdArr.push(element.orderId + '-' + element.orderItemSeq);
    //   });
    // } else {
    //   this.orderIdArr.push(this.defaultValue);
    // }

    // On make payment save

    if (this.isFormValid(this.MAKE_PAYMENTS_REPORTS)) {
      if (this.pagetoShow === 'makePayment') {
        this.showLoader();
        this.loadDataFromApi(this.MAKE_PAYMENT_SAVE_REPORT)
          .subscribe((data) => {
            this.hideLoader();
            const Status = data.Status;
            if (Status === true) {
              this.alert.showAlertScucess(['Payment Made Successfully!!!']);
              this.router.navigate(['pages/customer/agency-details/payments-report']);
            } else {
              this.alert.showAlertDanger(['Unable to Make Payment Please Try Again After Some Time!!']);
            }
          });
      } else if (this.pagetoShow === 'depositPayment') {
        this.loadDataFromApi(this.DEPOSIT_PAYMENTS_REPORTS)
          .subscribe((data) => {
            const Status = data.Status;
            if (Status === true) {
              this.alert.showAlertScucess(['Payment Made Successfully!!!']);
              this.router.navigate(['pages/customer/agency-details/payments-report']);
            } else {
              this.alert.showAlertDanger(['Unable to Make Payment Please Try Again After Some Time!!']);
            }
          });
      }
    }

  }
  // On make payment Cancel
  OnMakePaymentancel() {
    this.router.navigate(['pages/customer/agency-details/payments-report']);
  }

  changePayAmtValue() {
    this.checkPaymentAmount();
    // calculate base Amount
    this.makePaymentsSetDataModel.baseAmount.value =
      (this.makePaymentsSetDataModel.exchangeRate.value * this.makePaymentsSetDataModel.payAmount.value).toFixed(2);

    this.calcOverPayValue();
    // payment Threshold handling page
    if ((this.makePaymentsSetDataModel.paymentCurrency.value > this.makePaymentsSetDataModel.payAmount.value ||
      this.makePaymentsSetDataModel.paymentCurrency.value
      < this.makePaymentsSetDataModel.payAmount.value) &&
      (this.makePaymentsSetDataModel.overPaymentAccount.value === '0')) {
      if (this.isFormValid(this.MAKE_PAYMENTS_REPORTS)) {
        console.log('form valid', this.isFormValid(this.MAKE_PAYMENTS_REPORTS));
        this.customModalPopUpService.show(this.addnewpopupPaymentthresoldSetting);
      }

    }
  }
  calcOverPayValue() {
    // set Over Payment Amount value on change of pay amount
    if (this.makePaymentsSetDataModel.payAmount.value > this.makePaymentsSetDataModel.paymentCurrency.value) {
      this.makePaymentsSetDataModel.OverPayamount.value =
        (this.makePaymentsSetDataModel.payAmount.value - this.makePaymentsSetDataModel.paymentCurrency.value).toFixed(2);
    } else if (this.makePaymentsSetDataModel.payAmount.value < this.makePaymentsSetDataModel.paymentCurrency.value) {
      this.makePaymentsSetDataModel.OverPayamount.value = (this.defaultValue).toFixed(2);
    }
  }
}
