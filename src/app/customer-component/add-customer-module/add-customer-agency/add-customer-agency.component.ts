
import { Component, OnInit, Input, NgZone, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  DropdownDataModel, DropdownWithDescriptionComponent,
  CustomModalPopUpService, CustomModalPopUpModel,
  LoaderService,
  AlertMessageModel, AlertMessageService, AlertMessageComponent
} from '../../../component';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { CustomerServicesUrls } from '../../../core/shared/constant';
import { AddAgecyModel, AddCustomerModel } from './add-customer-agency.model';
import { Subject } from 'rxjs';
import { BaseService, BaseComponent, GridAPII } from '../../../core/base';
import { SessionObject, Utils, ProjectUtils } from '../../../core/shared';
import { columnDefsDuplicateCustomer } from './add-Customer-agency.data';

@Component({
  selector: 'app-add-customer-agency',
  templateUrl: './add-customer-agency.component.html',
  styleUrls: ['./add-customer-agency.component.css']
})
export class AddCustomerAgencyComponent extends BaseComponent {
  NAME_ADD_CUSTOMER = 'NAME_ADD_CUSTOMER';
  NAME_ADD_CUSTOMER_SUBMIT = 'NAME_ADD_CUSTOMER_SUBMIT';
  NAME_CHECK_DUPLICTE_CUSTOMER = 'NAME_CHECK_DUPLICTE_CUSTOMER';
  apiParmenterList: any;

  @Input() popType: any;
  rowData = new Subject<any>();
  dropDown: any;
  customergridOptions: any;
  customerExtraOption: any;
  popShowed: boolean;
  taxPayedOnGross: any;
  taxIDFiels: boolean;

  ddOptionsStateData: DropdownDataModel;
  checkboxValue = false;
  DropDownData: Array<any>;
  ddOptionsListRentalData: DropdownDataModel;
  ddOptionsCustomerCategoryData: DropdownDataModel;
  ddOptionsSalesData: DropdownDataModel;
  ddOptionsAddressTypeData: DropdownDataModel;
  ddOptionsCreditStatusData: DropdownDataModel;
  ddOptionsPaymentThersholdData: DropdownDataModel;
  ddOptionsSpecialTaxIDData: DropdownDataModel;
  ddOptionsAddressStatusData: DropdownDataModel;
  addCustomerModel: AddCustomerModel;
  addAgecyModel: AddAgecyModel;
  alertSetting: AlertMessageModel;
  duplicateCustomerListSetting = new CustomModalPopUpModel('Duplicate Record(s)');
  mask: any[] = ['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected loader: LoaderService,
    protected router: Router,
    protected customModalPopUpService: CustomModalPopUpService
  ) {
    super(baseService, router);
  }

  xtBaseOnInit() {
    this.firstLoadAddCustomerComponent();
    this.setRefObject();
    this.customerExtraOption = {
      showHeader: true,
      showFooter: true
    };
    this.customergridOptions = {
      onCellClicked: this.agCellClicked,
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
  }

  initSearchModels() {
    this.addCustomerModel = new AddCustomerModel();
    this.addAgecyModel = new AddAgecyModel();
  }

  setRefObject() {
    const refObj: any = SessionObject.getRefID();
    this.addCustomerModel.documentReferenceId.value = refObj.documentReferenceDialogue;
    const userCode = SessionObject.getUserDetails();
    this.addCustomerModel.userCode.value = userCode.userCode;
    console.log('setRefObject>refObj:', refObj);
  }

  agencyArrowClick() {
    this.addCustomerModel.isAgency.value = (this.addCustomerModel.isAgency.value) ? false : true;
  }

  changeTaxBasedOn() {
    console.log('changeTaxBasedOn>');
  }

  setRemitsRadioValue(evt) {
    this.addAgecyModel.remits.value = evt.target.value;
  }
  setRadioValue(evt) {
    this.addAgecyModel.taxPayedOnGross.value = evt.target.value;
  }

  stateChange(stateCode) {
    this.fetchCountryList(stateCode);
  }

  fetchCountryList(statecode) {
    if (!statecode) { return; }
    const param = '&statecode=' + statecode;
    this.baseService.getDataFromAPI(CustomerServicesUrls.TK_CUSTOMER_GET_COUNTRY_DATA, param).subscribe((data) => {
      console.log('DocumentReferenceListComponent>datafrom api::', data);
      this.addCustomerModel.country.value = data.country[0];
      if (data.country.length > 1) {
        this.addCustomerModel.phone1.value = data.country[1];
        this.addCustomerModel.phone2.value = data.country[1];
      }
    });
  }

  agCellClicked = (event) => {
    const headerName = event.colDef.headerName;
    if (headerName === 'Customer ID') {
      SessionObject.setCustomerID(event.data.customer_id);
      this.navigateTo('/pages/customer/agency-details');
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ADD_CUSTOMER) {
      return CustomerServicesUrls.TK_CUSTOMER_ADD_CUSTOMER_DATA;
    } else if (name === this.NAME_CHECK_DUPLICTE_CUSTOMER) {
      return CustomerServicesUrls.TK_CUSTOMER_CHECK_DUPLICTE_CUSTOMER;
    } else if (name === this.NAME_ADD_CUSTOMER_SUBMIT) {
      return CustomerServicesUrls.TK_CUSTOMER_SEND_ADD_CUSTOMER_DATA;
    }
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ADD_CUSTOMER_SUBMIT || name === this.NAME_CHECK_DUPLICTE_CUSTOMER) {
      if (this.addCustomerModel.isAgency.value === false) {
        return this.addCustomerModel;
      } else {
        return ProjectUtils.object.asignObjTofirstOne(this.addCustomerModel, this.addAgecyModel);
      }
    }
  }

  changeTaxPayedOnGrossValue(e) {
    if (this.addAgecyModel.agencyPayTax.value === 1) {
      this.taxPayedOnGross = '';
    } else {
      this.taxPayedOnGross = '0';
    }
  }

  firstLoadAddCustomerComponent() {
    this.loadDataFromApi(this.NAME_ADD_CUSTOMER)
      .subscribe((data) => {
        this.DropDownData = data.customerAddAttributeModel;
        this.setCustomerDropDown(data.customerAddAttributeModel);
        this.addCustomerModel.addressStatus.value = data.customerAddAttributeModel.addressStatus;
        this.addCustomerModel.addressType.value = data.customerAddAttributeModel.addressType;
        this.addCustomerModel.creditStatus.value = data.customerAddAttributeModel.creditStatus;
        this.addCustomerModel.listRental.value = data.customerAddAttributeModel.listRental;
        this.addCustomerModel.customerAddressSeq.value = data.customerAddAttributeModel.customerAddressSeq;
        this.addAgecyModel.remits.value = String(data.customerAddAttributeModel.remits);
        this.taxPayedOnGross = String(data.customerAddAttributeModel.taxPayedOnGross);
        this.addAgecyModel.taxPayedOnGross.value = data.customerAddAttributeModel.taxPayedOnGross;
      });
  }

  SubmitCustomer() {

    if (this.isFormValid(this.NAME_CHECK_DUPLICTE_CUSTOMER)) {
      if (this.addCustomerModel.isAgency.value === true) {
        const docref = SessionObject.getRefID();
        this.addCustomerModel.documentReferenceId.value = docref.documentReferenceDialogue;
        const userCode = SessionObject.getUserDetails();
        this.addCustomerModel.userCode.value = userCode.userCode;
        if (this.taxPayedOnGross !== '') {
          this.addAgecyModel.taxPayedOnGross.value = parseInt(this.taxPayedOnGross, 10);
        }
        if (this.addAgecyModel.agencyPayTax.value === '') {
          this.addAgecyModel.agencyPayTax.value = '0';
        } else if (this.addAgecyModel.agencyPayTax.value === 1) {
          this.addAgecyModel.taxPayedOnGross.value = 1;
        }
        if (this.addAgecyModel.isBillTo.value === '') {
          this.addAgecyModel.isBillTo.value = '0';
        }
        if (this.addAgecyModel.isRenewTo.value === '') {
          this.addAgecyModel.isRenewTo.value = '0';
        }
        if (this.addAgecyModel.bundleDiscount.value === '') {
          this.addAgecyModel.bundleDiscount.value = '0';
        }
      }
      this.loadDataFromApi(this.NAME_CHECK_DUPLICTE_CUSTOMER)
        .subscribe((checkData) => {
          if (checkData.duplicateCustomer.length !== 0) {
            this.alert.showAlertDanger(['Dupliacte Customer recode(s) found.'], 3000);
            this.popShowed = true;
            this.OnSubmit(this.NAME_CHECK_DUPLICTE_CUSTOMER, true);
            this.customModalPopUpService.show(this.duplicateCustomerListSetting);
          } else {
            this.addContinue();
          }
        });
    }

  }


  addContinue() {
    this.loadDataFromApi(this.NAME_ADD_CUSTOMER_SUBMIT)
      .subscribe((data) => {
        this.hideLoader();
        if (data.Status === 'OK') {
          if (this.popShowed === true) {
            this.popShowed = false;
            this.customModalPopUpService.hide(this.duplicateCustomerListSetting);
          }
          SessionObject.setCustomerID(
            {
              'customerId': data.CustomerId
            });
          this.navigateTo('/pages/customer/agency-details');
          this.alert.showAlertScucess(['Customer Added Successfully!!!'], 3000);
        }
      },
        (err) => {
        });
  }

  getNonSearchModelParams(name: string) {
    return;
  }

  setCustomerDropDown(data) {
    this.ddOptionsStateData = new DropdownDataModel(data.stateList,
      data.state);
    this.ddOptionsSalesData = new DropdownDataModel(
      data.salesRepresentativeList, data.sales
    );
    this.ddOptionsAddressTypeData = new DropdownDataModel(data.addressTypeList,
      data.addressType);
    this.ddOptionsListRentalData = new DropdownDataModel(data.listRentalList,
      data.listRental);
    this.ddOptionsCustomerCategoryData = new DropdownDataModel(data.customerCategoryList,
      data.customerCategory);
    this.ddOptionsAddressStatusData = new DropdownDataModel(data.addressStatusList,
      data.addressStatus);
    this.ddOptionsCreditStatusData = new DropdownDataModel(data.creditStatusList,
      data.creditStatus);
    this.ddOptionsPaymentThersholdData = new DropdownDataModel(data.paymentThersholdList,
      data.paymentThershold);
    this.ddOptionsSpecialTaxIDData = new DropdownDataModel(data.taxFilterList,
      data.specialTaxId);
  }


  resetButton() {
    this.addCustomerModel = new AddCustomerModel();
    this.addCustomerModel.addressStatus.value = this.DropDownData['addressStatus'];
    this.addCustomerModel.addressType.value = this.DropDownData['addressType'];
    this.addCustomerModel.creditStatus.value = this.DropDownData['creditStatus'];
    this.addCustomerModel.listRental.value = this.DropDownData['listRental'];
  }

  doOnGridReadyDulicateCustomer(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CHECK_DUPLICTE_CUSTOMER);
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CHECK_DUPLICTE_CUSTOMER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  setColumnDef(name: string): Array<ColDef> {
    console.log('DocumentReferenceListComponent>setColumnDef');
    if (name === this.NAME_CHECK_DUPLICTE_CUSTOMER) {
      return columnDefsDuplicateCustomer;
    }
  }

  SpecialTaxIDEvent(e: any) {
    this.addCustomerModel.taxID.value = e['display'];
    this.addCustomerModel.specialTaxId.value = e['key'];
    this.taxIDFiels = true;
  }

  removeTextBoxValue() {
    this.addCustomerModel.taxID.value = '';
    this.taxIDFiels = false;
  }
}
