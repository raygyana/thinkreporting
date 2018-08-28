import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, ProjectUtils } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { EditOrderModel } from './edit-order.model';
// import { columnDefsDocumentReference } from './order-in-progress-data';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Subject } from 'rxjs';
import { Utils, SessionObject } from '../../../../../core/shared';
import { utils } from 'protractor';
import { EditOrderServiceService } from './edit-order-service.service';
import { DatePipe } from '@angular/common';
import { parse } from 'url';
import { isDate } from 'util';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent extends BaseComponent {
  private datePipe: DatePipe = new DatePipe('en-US');

  NAME_EDIT_ORDER = 'EDITORDER';
  addnewpopupCustomerSetting: any;
  addnewpopupAddresSetting: any;
  addnewpopupAgencyListSetting: any;
  addnewpopupsubsdefSetting: any;
  addnewpopupChangeAmountSetting: any;
  addnewpopupDiscountSetting: any;
  addnewpopupPaymentthresoldSetting: any;
  addnewpopupSourceSetting: any;
  editOrderModel: EditOrderModel;
  selectedrowdata: any;
  pageData: any;
  ddOptionsOperator: DropdownWithDescriptionModel;
  operatorData = new Subject<any>();
  customerType = '';
  addressType = '';
  customerListData: any;
  AddressListData: any;
  OrderItem: any;
  order_Category: any;
  RateClassEffective: any;
  discountLocalAmount = 0;
  isdiscountamtchange = false;
  firstRateCardEffectiveSeq: any = '';
  hasdiscount = false;
  isIncludeTax = false;
  flgincludetax = false;
  isAgencyselected = false;
  isCommition = false;
  taxRateLocal = 0;
  agencyRateTax = 0;
  isbillingaddselect = false;

  localamountfororderpaid = 0;
  localorderStatus: any = '';
  LocalpaymentStatus: any = '';
  localorderStatusValue = '';
  localpaymentStatusValue = '';

  orderStatusData: any;
  paymentStatusData: any;

  // @Output() public getOrderCodeClick = new EventEmitter();
  orderhdrId = 0;
  orderItemType = 0;
  customerId = 0;
  orderCodeId = 0;
  ocID = 0;
  subscripId = 0;
  isrenewd = 0;
  addressCustomerID: any;
  orderItemSeq = 0;

  // };
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    protected editOrderServiceService: EditOrderServiceService,
    private route: ActivatedRoute
  ) {
    super(baseService, router);
    this.createReseDataPopoup();
    this.route.queryParams.subscribe(params => {
      this.orderCodeId = params['orderCodeId'];
      this.orderItemType = params['orderItemType'];
      this.customerId = params['customerId'];
      this.orderhdrId = params['orderhdrId'];
      this.ocID = params['ocID'];
      this.isrenewd = params['isrenewd'];
      this.subscripId = params['subscripId'];
      this.orderItemSeq = params['orderItemSeq'];
    });
    this.loadpage();
    // this.gridOptions.onCellClicked = this.agCellClicked;
  }





  initDropDowns() {
    this.ddOptionsOperator = new DropdownWithDescriptionModel();
    //this.ddOptionsOperator.descriptionKey = 'effectiveDate';
    this.ddOptionsOperator.displayKey = 'description';
    this.ddOptionsOperator.valueTypeOrKey = 'rateClassEffectiveSeq';
    this.ddOptionsOperator.ListDisplayKeys = [
      {
        displayKey: 'description',
        headerName: 'Description'
      }, {
        displayKey: 'effectiveDate',
        headerName: 'Effective Date'
      }
    ];

  }
  initSearchModels() {
    this.editOrderModel = new EditOrderModel();
    console.log('editOrderModel', this.editOrderModel);
  }

  // ngOnChanges(changes: SimpleChanges) {
  loadpage() {
    console.log('edit order .......');
    this.initSearchModels();
    if (this.orderhdrId === 0 && this.orderItemType === 0 && this.customerId === 0) {

    } else {
      //  this.showLoader();
      this.addressCustomerID = this.customerId;
      this.editOrderModel.customerId.value = this.customerId;
      this.editOrderModel.orderhdrId.value = this.orderhdrId;
      this.editOrderModel.orderItemType.value = this.orderItemType;
      this.editOrderModel.ocId.value = this.ocID;
      this.editOrderModel.hasBeenRenewed.value = this.isrenewd;
      console.log('this.editOrderModel', this.editOrderModel);

      const paramsBody = encodeURIComponent('customerId') + '=' + encodeURIComponent(this.customerId.toString())
        + '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent(this.orderCodeId.toString())
        + '&' + encodeURIComponent('orderhdrId') + '=' + encodeURIComponent(this.orderhdrId.toString())
        + '&' + encodeURIComponent('orderItemType') + '=' + encodeURIComponent(this.orderItemType.toString())
        + '&' + encodeURIComponent('orderItemSeq') + '=' + encodeURIComponent(this.orderItemSeq.toString());

      console.log('paramsBody', paramsBody);
      const url = CustomerServicesUrls.TK_EDIT_ORDER;
      this.baseService.getDataFromAPI(url, paramsBody)
        .subscribe((data) => {
          this.customerListData = data['CustomerDetails'];
          this.AddressListData = data['CustomerAddress'];
          this.OrderItem = data['OrderItem'];
          this.order_Category = data['orderCategory'];
          this.RateClassEffective = data['RateClassEffective'];
          this.orderStatusData = data['orderStatus'];
          this.paymentStatusData = data['paymentStatus'];
          this.editOrderServiceService.assignValueFromApi(this.editOrderModel, this.OrderItem);
          if (this.isrenewd == 1) {
            this.editOrderModel.hasBeenRenewed.value = this.isrenewd;
          }
          this.firstRateCardEffectiveSeq = this.editOrderModel.rateClassEffectiveSeq.value;
          this.taxRateLocal = this.editOrderModel.taxRateAmount.value;
          this.localamountfororderpaid = this.editOrderModel.localAmount.value;
          this.localorderStatus = this.editOrderModel.order_status.value;
          this.LocalpaymentStatus = this.editOrderModel.payment_status.value;
          this.localorderStatusValue = this.editOrderModel.orderStatus.value;
          this.localpaymentStatusValue = this.editOrderModel.paymentStatus.value;
          this.RateClassEffective.forEach(element => {
            if (element.rateClassEffectiveSeq.toString() === this.editOrderModel.rateClassEffectiveSeq.value.toString()) {
              this.discountLocalAmount = element.localAmount;
            }
          });
          this.setTaxViewData();
          this.operatorData.next({
            defaultKey: this.editOrderModel.rateClassEffectiveSeq,
            data: this.RateClassEffective
          });
          console.log('edit data...', data);
          //   this.hideLoader();
        });
    }
  }
  setTaxViewData() {

    this.editOrderModel.localAmount.value = (Utils.isEmpty(this.editOrderModel.localAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.localAmount.value).toFixed(2);

    this.editOrderModel.baseAmount.value = (Utils.isEmpty(this.editOrderModel.baseAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.baseAmount.value).toFixed(2);

    this.editOrderModel.grossLocalAmount.value = (Utils.isEmpty(this.editOrderModel.grossLocalAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.grossLocalAmount.value).toFixed(2);

    this.editOrderModel.grossBaseAmount.value = (Utils.isEmpty(this.editOrderModel.grossBaseAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.grossBaseAmount.value).toFixed(2);

    this.editOrderModel.netBaseAmount.value = (Utils.isEmpty(this.editOrderModel.netBaseAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.netBaseAmount.value).toFixed(2);

    this.editOrderModel.netLocalAmount.value = (this.editOrderModel.netLocalAmount.value === null) ? 0.00 :
      parseFloat(this.editOrderModel.netLocalAmount.value).toFixed(2);

    this.editOrderModel.totalTaxBaseAmount.value = (Utils.isEmpty(this.editOrderModel.totalTaxBaseAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.totalTaxBaseAmount.value).toFixed(2);

    this.editOrderModel.totalTaxLocalAmount.value = (Utils.isEmpty(this.editOrderModel.totalTaxLocalAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.totalTaxLocalAmount.value).toFixed(2);

    this.editOrderModel.taxRateAmount.value = (Utils.isEmpty(this.editOrderModel.taxRateAmount.value)) ? 0.00 :
      parseFloat(this.editOrderModel.taxRateAmount.value).toFixed(2);

    this.editOrderModel.new_commission.value =
      (Utils.isEmpty(this.editOrderModel.new_commission.value)) ? 0.00 : parseFloat(this.editOrderModel.new_commission.value).toFixed(2);

    this.editOrderModel.localCommission.value =
      (Utils.isEmpty(this.editOrderModel.localCommission.value)) ? 0.00 : parseFloat
        (this.editOrderModel.localCommission.value).toFixed(2);

    this.editOrderModel.baseCommission.value =
      (Utils.isEmpty(this.editOrderModel.baseCommission.value)) ? 0.00 : parseFloat
        (this.editOrderModel.baseCommission.value).toFixed(2);

    this.isCommition = (parseFloat(this.editOrderModel.localCommission.value) !== 0.00) ? true : false;
    this.isIncludeTax = (isNaN(this.editOrderModel.totalTaxLocalAmount.value) || parseFloat
      (this.editOrderModel.totalTaxLocalAmount.value) === 0.00) ? false : true;


    this.editOrderModel.discount.value = this.editOrderModel.manualDiscAmtLocal.value +
      this.editOrderModel.currency.value + '(' + this.editOrderModel.manualDiscPercentage.value + '%)';

  }
  createReseDataPopoup() {
    this.addnewpopupCustomerSetting = new CustomModalPopUpModel('Customer Search');
    this.addnewpopupAddresSetting = new CustomModalPopUpModel('Select Address');
    this.addnewpopupAgencyListSetting = new CustomModalPopUpModel('Agency List');
    this.addnewpopupsubsdefSetting = new CustomModalPopUpModel('Subscription Definition List');
    this.addnewpopupChangeAmountSetting = new CustomModalPopUpModel('Alter Order Amount', true, true, false);
    this.addnewpopupDiscountSetting = new CustomModalPopUpModel('Discounts', true, true, false);
    this.addnewpopupPaymentthresoldSetting = new CustomModalPopUpModel('Payment Thresold Handling');

    this.addnewpopupSourceSetting = new CustomModalPopUpModel('Source Code Lookup');

  }
  getSearchModel(name: string) {
    if (name === this.NAME_EDIT_ORDER) {
      return this.editOrderModel;
    } else {
      return this.editOrderModel;
    }
  }
  getAddressListpopup(eventdata: any) {
    this.addressType = eventdata;
    console.log('getOrderCodeList');

    if (this.addressType === 'Shipping') {
      this.addressCustomerID = this.editOrderModel.customerId.value;
    } else if (this.addressType === 'Alternate') {
      this.addressCustomerID = this.editOrderModel.altShipCustomerId.value;
    } else if (this.addressType === 'Renewal') {
      this.addressCustomerID = this.editOrderModel.renewToCustomerId.value;
    } else if (this.addressType === 'Billing') {
      this.addressCustomerID = this.editOrderModel.billToCustomerId.value;
    }

    this.customModalPopService.show(this.addnewpopupAddresSetting);
  }
  getCustomerListpopup(eventdata: any) {
    this.customerType = eventdata;
    console.log('getOrderCodeList');
    this.customModalPopService.show(this.addnewpopupCustomerSetting);
  }
  getAgencyListpopup() {
    console.log('getAgencyList');
    this.customModalPopService.show(this.addnewpopupAgencyListSetting);
  }
  getSubsDefListpopup() {
    console.log('getSubsDefListpopup');
    this.customModalPopService.show(this.addnewpopupsubsdefSetting);
  }
  changeorderamountpopup() {
    this.customModalPopService.show(this.addnewpopupChangeAmountSetting);
  }
  applydicountpopup() {
    if (this.firstRateCardEffectiveSeq.toString() ===
      this.editOrderModel.rateClassEffectiveSeq.value.toString() && this.isdiscountamtchange === true) {
      this.discountLocalAmount = this.editOrderModel.localAmount.value;
      this.isdiscountamtchange = false;
    } else {

      this.RateClassEffective.forEach(element => {
        if (element.rateClassEffectiveSeq.toString() === this.firstRateCardEffectiveSeq.toString()) {
          this.discountLocalAmount = parseFloat(element.localAmount);
        }
      });
    }
    console.log('applydicountpopup');
    this.customModalPopService.show(this.addnewpopupDiscountSetting);
  }
  paymentThresoldPopup() {
    console.log('paymentThresoldPopup');
    this.customModalPopService.show(this.addnewpopupPaymentthresoldSetting);
  }
  getAgency(rowdata: any) {
    console.log('getAgency', rowdata);
    this.customModalPopService.hide(this.addnewpopupAgencyListSetting);
    if (!!rowdata) {
      this.editOrderModel.agencyCode.value = rowdata['agencyCode'];
      this.editOrderModel.agencyName.value = rowdata['company'];
      this.editOrderModel.agencyCustomerId.value = rowdata['customerId'];
      this.onAgencyChange(rowdata);
    }
  }
  onAgencyChange(param: any) {

    const paramsBody = encodeURIComponent('agencyID') + '=' + encodeURIComponent(param.customerId.toString())
      + '&' + encodeURIComponent('rateClassId') + '=' + encodeURIComponent
        (this.editOrderModel.rateClassId.value.toString()) + '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent
        (this.editOrderModel.orderCodeID.value.toString())
      + '&' + encodeURIComponent('orderhdrId') + '=' + encodeURIComponent
        (this.editOrderModel.orderhdrId.value.toString()) + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent
        (this.editOrderModel.customerId.value.toString());

    const url = CustomerServicesUrls.TK_AGENCY_CHANGE;
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        console.log('onAgencyChange', data);
        this.editOrderModel.renewFullNameTo.value = data.AgencyData[0].contact_name;
        this.editOrderModel.renewToCustomerAddress.value = data.AgencyData[0].address;
        this.editOrderModel.billToFullName.value = data.AgencyData[0].contact_name;
        this.editOrderModel.billToCustomerAddress.value = data.AgencyData[0].address;

        this.editOrderModel.taxRateAmount.value = parseFloat(data.AgencyData[0].tax_rate).toFixed(2);
        this.editOrderModel.new_commission.value =
          (data.AgencyData[0].new_commission === null) ? 0.00 : parseFloat(data.AgencyData[0].new_commission);

        this.editOrderModel.ren_commission.value = (data.AgencyData[0].ren_commission
          === null) ? 0.00 : parseFloat(data.AgencyData[0].ren_commission);
        //this.editOrderModel.hasTax.value = true;
        // this.isIncludeTax = true;

        this.taxRateLocal = this.editOrderModel.taxRateAmount.value;
        this.agencyRateTax = this.taxRateLocal;
        this.isAgencyselected = false;
        // this.calculateTax();
        this.OnRatedropdownChange('agency');
        this.isAgencyselected = true;
        this.isdiscountamtchange = true;
      });

  }
  getsubsdefCode(rowdata: any) {
    this.customModalPopService.hide(this.addnewpopupsubsdefSetting);
    if (!!rowdata) {
      console.log('getsubsdefCode', rowdata);
      this.editOrderModel.subscriptionDef.value = rowdata['subscriptionDef'];
      this.editOrderModel.rateClassEffectiveSeq.value = rowdata['rateClassEffectiveSeq'];
      this.editOrderModel.rateClassId.value = rowdata['rateClassId'];

      const paramsBody = encodeURIComponent('rateClassId') + '=' + encodeURIComponent(this.editOrderModel.rateClassId.value.toString())
        + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent
          (this.editOrderModel.customerId.value.toString())
        + '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent
          (this.editOrderModel.orderCodeID.value.toString())
        + '&' + encodeURIComponent('orderhdrId') + '=' + encodeURIComponent
          (this.editOrderModel.orderhdrId.value.toString()) + '&' + encodeURIComponent('rateClassEffectiveSeq') + '=' + encodeURIComponent
          (this.editOrderModel.rateClassEffectiveSeq.value.toString());

      const url = CustomerServicesUrls.TK_SUBS_DEF_CHANGE;
      this.baseService.getDataFromAPI(url, paramsBody)
        .subscribe((data) => {
          // console.log('defdata', data);
          this.RateClassEffective = data['rateClassEffectiveList'];
          this.OnRatedropdownChange(data);
        }
        );

    }
  }
  getAddress(rowdata: any) {
    console.log('getAddress', rowdata);
    this.customModalPopService.hide(this.addnewpopupAddresSetting);
    if (!!rowdata) {
      if (this.addressType === 'Shipping') {
        this.editOrderModel.address1.value = rowdata['address1'];
      } else if (this.addressType === 'Alternate') {
        this.editOrderModel.altCustomerAddress.value = rowdata['address1'];
      } else if (this.addressType === 'Renewal') {
        this.editOrderModel.renewToCustomerAddress.value = rowdata['address1'];
      } else if (this.addressType === 'Billing') {
        this.editOrderModel.billToCustomerAddress.value = rowdata['address1'];

        if (this.isAgencyselected !== true) {

          this.editOrderModel.taxRateAmount.value = parseFloat(rowdata['tax_rate']).toFixed(2);

          // this.editOrderModel.hasTax.value = true;
          // this.isIncludeTax = true;

          // this.isAgencyselected = false;
          // // this.calculateTax();
          this.isbillingaddselect = true;
          this.OnRatedropdownChange('agency');
          // this.isAgencyselected = true;
          // this.isdiscountamtchange = true;
          //  this.calculateTax();

        }


      }
    }
  }
  getCustomer(rowdata: any) {
    console.log('getCustomer', rowdata);
    this.customModalPopService.hide(this.addnewpopupCustomerSetting);
    if (!!rowdata) {
      if (this.customerType === 'Alternate') {
        this.editOrderModel.altFullNameTo.value = rowdata['fname'] + ' ' + rowdata['lname'];
        this.editOrderModel.altShipCustomerId.value = rowdata['customer_id'];
        this.editOrderModel.altShipCustomerAddressSeq.value = rowdata['customer_address_seq'];
        this.editOrderModel.altCustomerAddress.value = rowdata['address1'];


      } else if (this.customerType === 'Renewal') {
        this.editOrderModel.renewFullNameTo.value = rowdata['fname'] + ' ' + rowdata['lname'];
        this.editOrderModel.renewToCustomerId.value = rowdata['customer_id'];
        this.editOrderModel.renewToCustomerAddressSeq.value = rowdata['customer_address_seq'];
        this.editOrderModel.renewToCustomerAddress.value = rowdata['address1'];
      } else if (this.customerType === 'Billing') {
        this.editOrderModel.billToFullName.value = rowdata['fname'] + ' ' + rowdata['lname'];
        this.editOrderModel.billToCustomerId.value = rowdata['customer_id'];
        this.editOrderModel.billToCustomerAddressSeq.value = rowdata['customer_address_seq'];

        this.editOrderModel.billToCustomerAddress.value = rowdata['address1'];

      }
    }
  }
  OnRatedropdownChange(eventdata: any) {
    console.log('OnRatedropdownChange', eventdata, this.editOrderModel.rateClassEffectiveSeq.value,
      'this.RateClassEffective', this.RateClassEffective);

    this.RateClassEffective.forEach(element => {
      if (element.rateClassEffectiveSeq.toString() === this.editOrderModel.rateClassEffectiveSeq.value.toString()) {
        this.editOrderModel.rateClassId.value = element.rateClassId;
        this.editOrderModel.rateClassEffectiveDate.value = element.effectiveDate;
        this.onRateCardChange(element);

      }
    });
  }
  onRateCardChange(data: any) {
    console.log('onRateCardChange', data);
    if (!!data) {

      this.editOrderModel.exchangeRate.value = (data.exchangeRate === null) ? 0.00 : parseFloat(data.exchangeRate);
      if (!this.isAgencyselected) {
        if (!this.isbillingaddselect) {
          this.editOrderModel.taxRateAmount.value = (data.tax_rate === null) ? 0.00 : parseFloat(data.tax_rate);
        }
      } else {

      }
      if (!this.hasdiscount) {
        this.editOrderModel.localAmount.value = (data.localAmount === null) ? 0.00 : parseFloat(data.localAmount);

        this.editOrderModel.baseAmount.value = (data.baseAmount === null) ? 0.00 : parseFloat(data.baseAmount);
        this.editOrderModel.manualDiscAmtLocal.value = 0;
        this.editOrderModel.manualDiscAmtBase.value = 0;
        this.editOrderModel.manualDiscPercentage.value = 0;

      } else {


      }
    } else {
      this.editOrderModel.netLocalAmount.value = 0.00;
      this.editOrderModel.grossLocalAmount.value = 0.00;
      this.editOrderModel.totalTaxLocalAmount.value = 0.00;
      this.editOrderModel.totalTaxBaseAmount.value = 0.00;
      this.editOrderModel.localAmount.value = 0.00;
      this.editOrderModel.baseAmount.value = 0.00;
    }
    if (!!data.tax_rate) {
      //this.editOrderModel.hasTax.value = true;
      // this.isIncludeTax = true;
    } else {
      //  this.isIncludeTax = false;
      //this.editOrderModel.hasTax.value = false;
    }
    this.hasdiscount = false;
    //  this.editOrderModel.new_commission.value = 0.00;
    this.taxRateLocal = this.editOrderModel.taxRateAmount.value;
    this.calculateTax();

  }
  updateOrder() {
    // const paramsBody = this.editOrderServiceService.getupdateOrderparam(this.editOrderModel);
    // if (this.localamountfororderpaid !== this.editOrderModel.localAmount.value &&
    //   this.localorderStatus.trim() === 'Order Placed' && this.LocalpaymentStatus.trim() === 'Paid') {
    //   this.paymentThresoldPopup();
    // } else {
    // this.editOrderModel.isProforma.value = (this.editOrderModel.isProforma.value) ? 1 : 0;
    // this.editOrderModel.hasTax.value = (this.editOrderModel.hasTax.value) ? 1 : 0;
    // this.editOrderModel.hasBeenRenewed.value = (this.editOrderModel.hasBeenRenewed.value) ? 1 : 0;
    const docref = SessionObject.getRefID()['documentReferenceDialogue'];
    console.log('docref', docref);
    let paramsBody = '';
    let url = '';
    if (this.isrenewd == 1) {
      paramsBody = '&' + encodeURIComponent('orderCodeID') + '=' + encodeURIComponent(this.editOrderModel.orderCodeID.value)
        + '&' + encodeURIComponent('sourceCodeID') + '=' + encodeURIComponent(this.editOrderModel.sourceCodeID.value)
        + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.editOrderModel.customerId.value)
        + '&' + encodeURIComponent('subscriptionDefId') + '=' + encodeURIComponent(this.editOrderModel.subscriptionDefId.value)
        + '&' + encodeURIComponent('poNumber') + '=' + encodeURIComponent(this.editOrderModel.poNumber.value)
        + '&' + encodeURIComponent('subscripId') + '=' + encodeURIComponent(this.subscripId.toString())
        + '&' + encodeURIComponent('docRefId') + '=' + encodeURIComponent(docref)
        + '&' + encodeURIComponent('orderhdrId') + '=' +
        '&' + encodeURIComponent('itemCount') + '=1';

      url = CustomerServicesUrls.TK_SAVE_ORDER;

    } else {
      paramsBody = this.getParamsBody(this.NAME_EDIT_ORDER);
      url = CustomerServicesUrls.TK_ORDER_UPDATE;
    }

    console.log('this.editOrderModel.orderItemSeq.value', this.editOrderModel.orderItemSeq.value);
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        if (data['Status'] === 'OK' || data['Status'] === true) {
          this.router.navigate(['pages/customer/agency-details/order'], {
            queryParams: {
              'From': 'Edit'
            }
          });

        }
        console.log('updateResponce', data);
      });

    //}
  }
  Includetaxchange(eventdata: any) {

    // this.isIncludeTax = this.isIncludeTax ? false : true;
    console.log(eventdata);
    if (Utils.isEmpty(this.editOrderModel.hasTax.value)) {
      return;
    }
    if (this.isIncludeTax && this.editOrderModel.hasTax.value === 0) {
      this.editOrderModel.totalTaxLocalAmount.value = 0.00;
      this.editOrderModel.totalTaxBaseAmount.value = 0.00;
      this.editOrderModel.taxRateAmount.value = 0.00;
    } else {
      this.editOrderModel.taxRateAmount.value = this.taxRateLocal;
      if (this.isAgencyselected) {
        this.editOrderModel.taxRateAmount.value = (this.agencyRateTax === null) ? 0.00 : this.agencyRateTax;
      }
    }
    this.editOrderModel.localAmount.value = (parseFloat(this.editOrderModel.localAmount.value)
      + parseFloat(this.editOrderModel.localCommission.value)).toFixed(2);

    this.editOrderModel.baseAmount.value = (parseFloat(this.editOrderModel.baseAmount.value)
      + parseFloat(this.editOrderModel.baseCommission.value)).toFixed(2);
    this.calculateTax();
  }
  onChangeAmount(eventdata: any) {

    console.log('eventdata', eventdata);
    this.editOrderModel.localAmount.value = eventdata['orderitemprice'];
    this.editOrderModel.baseAmount.value = eventdata['orderitemprice'];

    // this.editOrderModel.grossLocalAmount.value =
    //   parseFloat(this.editOrderModel.baseAmount.value) + parseFloat(this.editOrderModel.totalTaxBaseAmount.value);

    // this.editOrderModel.netLocalAmount.value =
    //   parseFloat(this.editOrderModel.localAmount.value) + parseFloat(this.editOrderModel.totalTaxLocalAmount.value);
    //  this.OnRatedropdownChange(this.firstRateCardEffectiveSeq);
    this.calculateTax();
  }
  ondiscounts(eventdata: any) {
    console.log('eventdata', eventdata);
    this.hasdiscount = true;

    this.editOrderModel.manualDiscAmtLocal.value = eventdata.fixedamount;
    this.editOrderModel.manualDiscAmtBase.value = (parseFloat(eventdata.fixedamount)
      * parseFloat(this.editOrderModel.exchangeRate.value)).toFixed(2);
    this.editOrderModel.manualDiscPercentage.value = parseFloat(eventdata.percentage).toFixed(2);

    this.editOrderModel.localAmount.value = parseFloat(eventdata.neworderitemamount).toFixed(2);
    this.editOrderModel.baseAmount.value = (parseFloat(this.editOrderModel.localAmount.value)
      * parseFloat(this.editOrderModel.exchangeRate.value)).toFixed(2);

    this.editOrderModel.rateClassEffectiveSeq.value = this.firstRateCardEffectiveSeq;

    this.OnRatedropdownChange(this.firstRateCardEffectiveSeq);

    //this.calculateTax();

  }
  calculateTax() {

    //  if (!this.isAgencyselected) {

    //  }
    this.editOrderModel.localCommission.value = ((parseFloat(this.editOrderModel.localAmount.value) * parseFloat
      (this.editOrderModel.new_commission.value)) / 100).toFixed(2);

    this.editOrderModel.baseCommission.value = ((parseFloat(this.editOrderModel.baseAmount.value) * parseFloat
      (this.editOrderModel.new_commission.value)) / 100).toFixed(2);

    this.editOrderModel.localAmount.value = (parseFloat(this.editOrderModel.localAmount.value)
      - parseFloat(this.editOrderModel.localCommission.value)).toFixed(2);

    this.editOrderModel.baseAmount.value = (parseFloat(this.editOrderModel.baseAmount.value)
      - parseFloat(this.editOrderModel.baseCommission.value)).toFixed(2);

    this.editOrderModel.totalTaxLocalAmount.value = ((parseFloat(this.editOrderModel.localAmount.value) *
      parseFloat(this.editOrderModel.taxRateAmount.value)) / 100).toFixed(2);

    this.editOrderModel.totalTaxBaseAmount.value = ((parseFloat(this.editOrderModel.baseAmount.value) *
      parseFloat(this.editOrderModel.taxRateAmount.value)) / 100).toFixed(2);


    this.editOrderModel.netLocalAmount.value
      = (parseFloat(this.editOrderModel.localAmount.value) + parseFloat(this.editOrderModel.totalTaxLocalAmount.value)).toFixed(2);


    this.editOrderModel.grossLocalAmount.value = (parseFloat(this.editOrderModel.localAmount.value) +
      parseFloat(this.editOrderModel.totalTaxLocalAmount.value)
      + parseFloat(this.editOrderModel.localCommission.value)
    ).toFixed(2);

    this.editOrderModel.netBaseAmount.value
      = (parseFloat(this.editOrderModel.baseAmount.value) + parseFloat(this.editOrderModel.totalTaxBaseAmount.value)).toFixed(2);


    this.editOrderModel.grossBaseAmount.value = (parseFloat(this.editOrderModel.baseAmount.value) +
      parseFloat(this.editOrderModel.totalTaxBaseAmount.value)
      + parseFloat(this.editOrderModel.baseCommission.value)
    ).toFixed(2);
    this.setTaxViewData();
    if (!Utils.isEmpty(this.localorderStatus) &&
      this.localorderStatus.trim() === 'Order Placed' &&
      this.LocalpaymentStatus.trim() === 'Paid' && this.localamountfororderpaid
      < parseFloat(this.editOrderModel.localAmount.value)) {
      // this.paidOrderStatusChange();
      this.editOrderModel.order_status.value = 'Hold for Payment';
      this.editOrderModel.payment_status.value = 'Partial Payment';

      this.orderStatusData.forEach((t) => {
        if (t.display.trim() === this.editOrderModel.order_status.value.trim()) {
          this.editOrderModel.orderStatus.value = t.key;
        }
      });
      this.paymentStatusData.forEach((t) => {
        if (t.display.trim() === this.editOrderModel.payment_status.value.trim()) {
          this.editOrderModel.paymentStatus.value = t.key;
        }
      });

    } else {
      this.editOrderModel.order_status.value = this.localorderStatus;
      this.editOrderModel.payment_status.value = this.LocalpaymentStatus;
      this.editOrderModel.orderStatus.value = this.localorderStatusValue;
      this.editOrderModel.paymentStatus.value = this.localpaymentStatusValue;
    }
  }
  paidOrderStatusChange() {
    if (this.localamountfororderpaid
      !== this.editOrderModel.localAmount.value) {

    }

  }

  proformaChange(event: any) {
    //  Utils.date.convertArrayKeytoDate(data['customerOrderList'], 'date');

    console.log(event);
    const currentdate = this.datePipe.transform(Date.now(), 'MM/dd/yyyy  hh:mm:ss a');
    this.editOrderModel.orderDate.value = currentdate;

  }
  getSourceCodeList() {

    console.log('getSourceCodeList');
    this.customModalPopService.show(this.addnewpopupSourceSetting);
  }

  getSourceCode(rowdata: any) {
    if (!!rowdata) {
      this.customModalPopService.hide(this.addnewpopupSourceSetting);
      this.editOrderModel.sourceCode.value = rowdata.sourceCode;
      this.editOrderModel.sourceCodeDescription.value = rowdata.description;
      this.editOrderModel.sourceCodeID.value = rowdata.sourceCodeId;
      console.log('getSourceCode', rowdata);


    }

  }

  setdate() {
    console.log('editOrderModel.startDate.value', this.editOrderModel.startDate.value, isDate(this.editOrderModel.startDate.value));

    if (this.editOrderServiceService.isDate(this.editOrderModel.startDate.value, '/')) {
      let dateyear = this.editOrderModel.startDate.value.toString().split('/')[2];

      dateyear = parseInt(dateyear, 10) + 1;

      this.editOrderModel.expireDate.value = this.editOrderModel.expireDate.value.toString().split('/')[0] + '/' +
        this.editOrderModel.expireDate.value.toString().split('/')[1] + '/' +
        dateyear.toString();
    } else {
      this.editOrderModel.startDate.value = '';
      alert('Please enter date as  mm/dd/yyyy.');
    }

  }

}
