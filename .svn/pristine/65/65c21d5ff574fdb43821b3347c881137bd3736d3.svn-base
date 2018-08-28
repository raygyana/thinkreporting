import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef } from 'ag-grid';
import { columnDefsAgencyReports } from './agency.data';
import { CustomerServicesUrls, ProcessUrls, ProjectUtils } from '../../../core/shared';
import { BaseComponent } from '../../../core/base/index';
import { BaseService } from '../../../core/base/base.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SessionObject, SearchModelUtil } from '../../../core/shared';
import { AgencyService } from './agency.service';
import { AgencyModel, EditAgencyModel } from './agency.model';
import { GridAPII } from '../../../core/base/base.component';
import { ConstantService } from '../../../core/services/constants';
import {
  AlertMessageService, DropdownWithDescriptionModel, DropdownDataModel,
  LoaderService, CustomModalPopUpService,
  CustomModalPopUpModel, DropdownDataModelWithZeroIndex
} from './../../../component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
  providers: [AgencyService]

})
export class AgencyComponent extends BaseComponent implements OnInit {
  agencygridOptions: any;
  AlertType: any;
  columnApi: any;
  gridApi: any;
  agencyExtraOption: any;
  AGENCY_REPORTS = 'AGENCY_REPORTS';
  NAME_AGENCY_LIST = 'AGENCY_LIST';
  NAME_AGENCY_EDIT = 'AGENCY_EDIT';
  NAME_AGENCY_SEARCH = 'AGENCY_SEARCH';
  NAME_COUNTRY_DATA = 'COUNTRY_DATA';
  agencyModel: AgencyModel;
  editAgencyModel: EditAgencyModel;


  stateCode: any;
  CustomerCategory: any;
  AddressType: any;
  SpecialTaxID: any;
  CountryList: any;
  Sales: any;
  AddressStatus: any;
  CreditStatus: any;
  listRentalList: any;
  taxPayedOnGross: any;
  edittaxPayedOnGross: any;
  paymentThersholdList: any;
  EditpaymentThersholdList: any;
  showGrid: boolean;

  editAgencybasicSetting = new CustomModalPopUpModel('Agency Edit');

  @ViewChild(NgForm) myForm: NgForm;

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
    this.agencyModel = new AgencyModel();
    this.editAgencyModel = new EditAgencyModel();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_AGENCY_LIST || name === this.NAME_AGENCY_SEARCH) {
      return this.agencyModel;
    } else if (name === this.NAME_AGENCY_EDIT) {
      return this.editAgencyModel;
    }
  }

  getServiceUrl(name): any {
    if (name === this.NAME_AGENCY_LIST) {
      return CustomerServicesUrls.TK_AGENCY_LIST;
    } else if (name === this.NAME_AGENCY_EDIT) {
      return CustomerServicesUrls.TK_AGENCY_EDIT;
    } else if (name === this.NAME_AGENCY_SEARCH) {
      return CustomerServicesUrls.TK_AGENCY_SEARCH;
    } else if (name === this.NAME_COUNTRY_DATA) {
      return CustomerServicesUrls.TK_CUSTOMER_GET_COUNTRY_DATA;
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_AGENCY_LIST || name === this.NAME_AGENCY_SEARCH) {
      return columnDefsAgencyReports;
    }
  }

  agCellClicked = (event) => {
    const headerName = event.colDef.headerName;
    if (headerName === 'Edit') {
      this.fillEditForm(event.data);
      this.showEditAgencyPopUp();
    } else if (headerName === 'Agency') {
      SessionObject.setCustomerID(
        {
          'customerId': event.data.customerId
        });
      this.navigateTo('/pages/customer/agency-details');
    } else if (headerName === 'Customer ID') {
      SessionObject.setCustomerID(
        {
          'customerId': event.data.customer_id
        });
      this.navigateTo('/pages/customer/agency-details');
    }
  }

  xtBaseOnInit() {
    this.showGrid = false;
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
    if (name === this.NAME_AGENCY_LIST || name === this.NAME_AGENCY_SEARCH) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAgency(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_AGENCY_LIST);
    this.OnSubmit(this.NAME_AGENCY_LIST);
  }

  xtBaseLoadDataFromApiProcessData(name, data) {
    this.xtBaseLoadDataTastComplete(data);
  }

  xtBaseLoadDataTastComplete(data: any) {
    // this.EditpaymentThersholdList = new DropdownDataModelWithZeroIndex(data.PaymentThresholdList);
    this.EditpaymentThersholdList = data.PaymentThresholdList;
  }

  onSearch(f: NgForm) {
    console.log('value', f.value);
  }

  resetForm() {
    this.agencyModel.agencyCode.value = '';
    this.agencyModel.company.value = '';
    this.agencyModel.customerId.value = '';
  }

  addAgency() {
    this.navigateTo('pages/customer/add-agency');
  }

  showEditAgencyPopUp() {
    this.customModalPopService.show(this.editAgencybasicSetting);
  }

  changeEditTaxPayedOnGrossValue(e) {
    if (this.editAgencyModel.agencyPayTax.value === 1) {
      this.edittaxPayedOnGross = '';
    } else {
      this.edittaxPayedOnGross = '0';
    }
  }

  SearchAgency() {
    this.OnSubmit(this.NAME_AGENCY_SEARCH);
  }

  getForm(name: string): FormGroup {
    if ((name === this.NAME_AGENCY_LIST) || (name === this.NAME_AGENCY_SEARCH)) {
      return this.baseForm;
    }
  }

  fillEditForm(e: any) {
    this.editAgencyModel.agencyCode.value = e['agencyCode'];
    this.editAgencyModel.company.value = ProjectUtils.NullHandler(e['company']);
    this.editAgencyModel.customerId.value = e['customerId'];
    this.editAgencyModel.acceptOrd.value = e['acceptOrd'];
    this.editAgencyModel.agencyPayTax.value = e['agencyPayTax'];
    this.editAgencyModel.isBillTo.value = e['isBillTo'];
    this.editAgencyModel.isRenewTo.value = e['isRenewTo'];
    this.editAgencyModel.newOrderCommission.value = e['newOrderCommission'];
    this.editAgencyModel.paymentThershold.value =
      (ProjectUtils.NullHandler(e['paymentThershold'])) === '' ? '' : ProjectUtils.NullHandler(e['paymentThershold']);
    this.editAgencyModel.remits.value = String(e['remits']);
    this.editAgencyModel.renewalCommission.value = e['renewalCommission'];
    this.editAgencyModel.bundleDiscount.value = e['bundleDiscount'];
    if (this.editAgencyModel.agencyPayTax.value === '1') {
      this.edittaxPayedOnGross = null;
    } else {
      this.editAgencyModel.taxPayedOnGross.value = e['taxPayedOnGross'];
      this.edittaxPayedOnGross = String(e['taxPayedOnGross']);
    }
  }

  EditAgencyDetails() {
    this.showLoader();
    if (this.edittaxPayedOnGross !== '') {
      this.editAgencyModel.taxPayedOnGross.value = parseInt(this.edittaxPayedOnGross, 10);
    }
    if (this.editAgencyModel.agencyPayTax.value === '') {
      this.editAgencyModel.agencyPayTax.value = '0';
    } else if (this.editAgencyModel.agencyPayTax.value === '1') {
      this.editAgencyModel.taxPayedOnGross.value = 1;
    }
    if (this.editAgencyModel.isBillTo.value === '') {
      this.editAgencyModel.isBillTo.value = '0';
    }
    if (this.editAgencyModel.isRenewTo.value === '') {
      this.editAgencyModel.isRenewTo.value = '0';
    }
    if (this.editAgencyModel.bundleDiscount.value === '') {
      this.editAgencyModel.bundleDiscount.value = '0';
    }
    this.loadDataFromApi(this.NAME_AGENCY_EDIT)
      .subscribe((data) => {
        this.hideLoader();
        if (data.Status === 'OK') {
          this.alert.showAlertScucess(['Agency Edited Successfully!!!'], 2000);
          this.customModalPopService.hide(this.editAgencybasicSetting);
          this.OnSubmit(this.NAME_AGENCY_LIST);
        }
        if (data.Status === 'Error') {
          // this.alert.showAlertDanger([''])
        }
      });
  }

}
