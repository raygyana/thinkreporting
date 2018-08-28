import { Component } from '@angular/core';
import { ColDef } from 'ag-grid';
import { columnDefsDupliacteAgencyRecod } from './add-agency.data';
import { CustomerServicesUrls, ProcessUrls, ProjectUtils } from '../../../../core/shared';
import { BaseComponent } from '../../../../core/base/index';
import { BaseService } from '../../../../core/base/base.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionObject, SearchModelUtil } from '../../../../core/shared';
import { AgencyService } from '.././agency.service';
import { AddAgencyModel, DupliacteAgancyModel } from './add-agency.model';
import { GridAPII } from '../../../../core/base/base.component';
import { ConstantService } from '../../../../core/services/constants';
import {
  AlertMessageService, DropdownWithDescriptionModel, DropdownDataModel,
  LoaderService, CustomModalPopUpService,
  CustomModalPopUpModel, DropdownDataModelWithZeroIndex
} from './../../../../component';

@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css'],
  providers: [AgencyService]
})

export class AddAgencyComponent extends BaseComponent {
  agencygridOptions: any;
  AlertType: any;
  columnApi: any;
  gridApi: any;
  agencyExtraOption: any;
  taxIDFiels = false;

  addAgencyModel: AddAgencyModel;
  dupliacteAgancyModel: DupliacteAgancyModel;

  NAME_AGENCY_ADD_GET = 'AGENCY_ADD_GET';
  NAME_AGENCY_ADD = 'AGENCY_ADD';
  NAME_COUNTRY_DATA = 'COUNTRY_DATA';
  NAME_CHECK_DUPLICATE_AGENCY = 'CHECK_DUPLICATE_AGENCY';

  stateCode: any;
  taxPayedOnGross: any;
  CustomerCategory: any;
  AddressType: any;
  SpecialTaxID: any;
  CountryList: any;
  Sales: any;
  AddressStatus: any;
  CreditStatus: any;
  listRentalList: any;
  paymentThersholdList: any;
  popShowed: boolean;

  duplicateAgencybasicSetting = new CustomModalPopUpModel('Duplicate Record(s)');

  mask: any[] = ['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(
    protected agencyService: AgencyService,
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
  }

  initSearchModels() {
    this.addAgencyModel = new AddAgencyModel();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_AGENCY_ADD_GET || name === this.NAME_AGENCY_ADD || name === this.NAME_CHECK_DUPLICATE_AGENCY) {
      return this.addAgencyModel;
    }
  }

  getServiceUrl(name): any {
    if (name === this.NAME_AGENCY_ADD_GET) {
      return CustomerServicesUrls.TK_ADD_AGENCY_GET;
    } else if (name === this.NAME_AGENCY_ADD) {
      return CustomerServicesUrls.TK_ADD_AGENCY;
    } else if (name === this.NAME_COUNTRY_DATA) {
      return CustomerServicesUrls.TK_CUSTOMER_GET_COUNTRY_DATA;
    } else if (name === this.NAME_CHECK_DUPLICATE_AGENCY) {
      return CustomerServicesUrls.TK_CUSTOMER_CHECK_DUPLICTE_CUSTOMER;
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_CHECK_DUPLICATE_AGENCY) {
      return columnDefsDupliacteAgencyRecod;
    }
  }

  agCellClicked = (event) => {
    const headerName = event.colDef.headerName;
    if (headerName === 'Customer ID') {
      SessionObject.setCustomerID(event.data.customer_id);
      this.navigateTo('/pages/customer/agency-details');
    }
  }

  xtBaseOnInit() {
    this.addAgencyFirstLoadComponents();
    this.agencyExtraOption = {
      showHeader: true,
      showFooter: true
    };
    this.agencygridOptions = {
      onCellClicked: this.agCellClicked,
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CHECK_DUPLICATE_AGENCY) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyDupliacteRecod(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CHECK_DUPLICATE_AGENCY);
  }

  changeTaxPayedOnGrossValue(e) {
    if (this.addAgencyModel.agencyPayTax.value === 1) {
      this.taxPayedOnGross = '';
    } else {
      this.taxPayedOnGross = '0';
    }
  }

  fillCountry(evnt) {
    this.stateCode = evnt;
    this.loadDataFromApi(this.NAME_COUNTRY_DATA)
      .subscribe((data) => {
        this.addAgencyModel.country.value = data.country[0];
        if (data.country.length > 1) {
          this.addAgencyModel.phone1.value = data.country[1];
          this.addAgencyModel.phone2.value = data.country[1];
        }
      });
  }

  getNonSearchModelParams(name: any): string | any {
    if (name === this.NAME_COUNTRY_DATA) {
      const obj = {
        statecode: this.stateCode
      };
      return obj;
    }
  }

  addAgencyFirstLoadComponents() {
    this.addAgencyModel = new AddAgencyModel();
    this.loadDataFromApi(this.NAME_AGENCY_ADD_GET)
      .subscribe((data) => {
        this.SpecialTaxID = new DropdownDataModel(data.AgencyAdd.taxFilterList);
        this.CustomerCategory = new DropdownDataModel(data.AgencyAdd.customerCategoryList);
        this.AddressType = new DropdownDataModel(data.AgencyAdd.addressTypeList);
        this.CountryList = new DropdownDataModel(data.AgencyAdd.stateList);
        this.Sales = new DropdownDataModel(data.AgencyAdd.salesRepresentativeList);
        this.AddressStatus = new DropdownDataModel(data.AgencyAdd.addressStatusList);
        this.CreditStatus = new DropdownDataModel(data.AgencyAdd.creditStatusList);
        this.listRentalList = new DropdownDataModel(data.AgencyAdd.listRentalList);
        this.paymentThersholdList = new DropdownDataModel(data.AgencyAdd.paymentThersholdList);
        this.addAgencyModel.addressStatus.value = data.AgencyAdd.addressStatus;
        this.addAgencyModel.addressType.value = data.AgencyAdd.addressType;
        this.addAgencyModel.creditStatus.value = data.AgencyAdd.creditStatus;
        this.addAgencyModel.listRental.value = data.AgencyAdd.listRental;
        this.addAgencyModel.remits.value = String(data.AgencyAdd.remits);
        this.taxPayedOnGross = String(data.AgencyAdd.taxPayedOnGross);
        this.addAgencyModel.taxPayedOnGross.value = data.AgencyAdd.taxPayedOnGross;
        this.addAgencyModel.customerAddressSeq.value = data.AgencyAdd.customerAddressSeq;
        this.addAgencyModel.orderClass.value = data.AgencyAdd.orderClass;
      });
  }

  addNewAgency() {
    if (this.isFormValid(this.NAME_CHECK_DUPLICATE_AGENCY)) {
      const docref = SessionObject.getRefID();
      this.addAgencyModel.documentReferenceId.value = docref.documentReferenceDialogue;
      const userCode = SessionObject.getUserDetails();
      this.addAgencyModel.userCode.value = userCode.userCode;
      if (this.taxPayedOnGross !== '') {
        this.addAgencyModel.taxPayedOnGross.value = parseInt(this.taxPayedOnGross, 10);
      }
      if (this.addAgencyModel.agencyPayTax.value === '') {
        this.addAgencyModel.agencyPayTax.value = '0';
      } else if (this.addAgencyModel.agencyPayTax.value === 1) {
        this.addAgencyModel.taxPayedOnGross.value = 1;
      }
      if (this.addAgencyModel.isBillTo.value === '') {
        this.addAgencyModel.isBillTo.value = '0';
      }
      if (this.addAgencyModel.isRenewTo.value === '') {
        this.addAgencyModel.isRenewTo.value = '0';
      }
      if (this.addAgencyModel.bundleDiscount.value === '') {
        this.addAgencyModel.bundleDiscount.value = '0';
      }
      this.addAgencyModel.isAgency.value = true;
      this.showLoader();
      this.loadDataFromApi(this.NAME_CHECK_DUPLICATE_AGENCY)
        .subscribe((checkData) => {
          if (checkData.duplicateCustomer.length !== 0) {
            this.alert.showAlertDanger(['Agency dupliacte recode(s) found.'], 3000);
            this.popShowed = true;
            this.OnSubmit(this.NAME_CHECK_DUPLICATE_AGENCY, true);
            this.customModalPopService.show(this.duplicateAgencybasicSetting);
          } else {
            this.continueSave();
          }
        });
    }
  }

  continueSave() {
    this.loadDataFromApi(this.NAME_AGENCY_ADD)
      .subscribe((data) => {
        this.hideLoader();
        if (data.Status === 'OK') {
          if (this.popShowed === true) {
            this.popShowed = false;
            this.customModalPopService.hide(this.duplicateAgencybasicSetting);
          }
          this.navigateTo('pages/customer/agency');
          this.alert.showAlertScucess(['Acency Added Successfully!!!'], 3000);
        }
      },
        (err) => {
        });
  }

  SpecialTaxIDEvent(e: any) {
    this.addAgencyModel.taxID.value = e['display'];
    this.addAgencyModel.specialTaxId.value = e['key'];
    this.taxIDFiels = true;
  }

  removeTextBoxValue() {
    this.addAgencyModel.taxID.value = '';
    this.taxIDFiels = false;
  }
}
