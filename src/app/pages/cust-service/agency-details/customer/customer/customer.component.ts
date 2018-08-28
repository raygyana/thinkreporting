import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CustomerServicesUrls, ProjectUtils, Utils } from '../../../../../core/shared';
import { Router } from '@angular/router';
import { BaseService, BaseComponent, GridAPII } from '../../../../../core/base';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { SessionObject } from '../../../../../core/shared';
import { columnDefsCustomerEdit, columnDefsTempAddCustomerEdit } from './customer.data';
import { CustomerModel, CustomerApiKeyModel, CustomerAddressModel } from './customer.model';
import { CustomModalPopUpModel, CustomModalPopUpService, AlertMessageService, DropdownDataModel } from '../../../../../component';
import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { PaginationComponent } from '../../../../../component/pagination/pagination.component';
import { CustomerGuard } from '../../../cust-destop.gard.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerGuard]
})
export class CustomerComponent extends BaseComponent implements OnInit {
  NAME_CUSTOMER_EDIT = 'NAME_CUSTOMER_EDIT';
  NAME_EDIT_SUBMIT_CUSTOMER = 'NAME_EDIT_SUBMIT_CUSTOMER';
  NAME_TEMP = 'NAME_TEMP';
  NAME_DEL_TEMP_ADD = 'DEL_TEMP_ADD';
  NAME_ADDRESS_ADD = 'NAME_ADDRESS_ADD';
  customerModel: CustomerModel;
  customerAddressModel: CustomerAddressModel;
  customerApiKeyModel: CustomerApiKeyModel;

  gridApiTempaddress: GridApi;
  columnApiTempaddress: ColumnApi;

  customerAddressSetting: any;
  customerTempAddressSetting: any;
  addAuxiliaryFieldsSttting: any;
  tempaddgridOptions: GridOptions = {};
  popUpType: any = {};
  editAddressData: any = {};
  AlertType: any;

  defaultAddressBillTo: any = false;
  defaultAddressReNew: any = false;
  customerExtraOption: any;
  customerCategoryData: any;
  creditStatusData: any;
  salesData: any;
  defaultAddressData: any;
  listRentalData: any;
  showGrid: any = 'none';
  customerModelOptions: any;
  custAddSeq: any;
  showButton: boolean = true;
  customerAddressSeq: any;
  customerAdd: any;

  @Output() openTab: EventEmitter<any> = new EventEmitter();

  reInitAddAuxi: Subject<any> = new Subject();
  reInitHistory: Subject<any> = new Subject();

  constructor(
    protected alert: AlertMessageService,
    protected customModelPopup: CustomModalPopUpService,
    protected baseService: BaseService,
    protected router: Router,
    protected customerGuard: CustomerGuard
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.gridOptions.onCellDoubleClicked = this.agCellDoubleClicked;
    this.customerModel = new CustomerModel();
    this.customerApiKeyModel = new CustomerApiKeyModel();
    this.customerAddressModel = new CustomerAddressModel();
    this.createReseDataPopoup();
  }

  doOnGridReadyCustomer(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CUSTOMER_EDIT);
    this.OnSubmit(this.NAME_CUSTOMER_EDIT);
  }

  doOnTempAddGridReadyCustomer(api) {
    this.gridApiTempaddress = api.api;
    this.columnApiTempaddress = api.columnApi;
    this.doOnGridReady(this.NAME_TEMP);
  }

  xtBaseOnInit() {
    this.customerExtraOption = {
      showHeader: false,
      showFooter: false
    };
  }

  createReseDataPopoup() {
    this.customerAddressSetting = new CustomModalPopUpModel('Customer Address');
    this.customerTempAddressSetting = new CustomModalPopUpModel('Customer History');
    this.addAuxiliaryFieldsSttting = new CustomModalPopUpModel('Add Auxiliary Fields');
  }

  agCellClicked = (evt: any) => {
    if (evt.event.target.className === 'fa fa-history') {
      this.custAddSeq = evt.data['customerAddressSeq'];
      this.openTabs(this.custAddSeq);
    }
    if (evt.event.target.className === 'fa fa-trash') {
      this.custAddSeq = evt.data['customerAddressSeq'];
      this.customerAdd = evt.data['CustomerAdd'];
      this.delTempCustomerAdd();
    }
    const headerName: string = evt.colDef.headerName;
    if (headerName !== 'Select') {
      const EvtData = evt.data;
      this.customerModel.fName.value = EvtData.fname;
      this.customerModel.lName.value = EvtData.lname;
      this.customerModel.salutation.value = EvtData.salutation;
      this.customerModel.initial.value = EvtData.initial;
      this.customerModel.suffix.value = EvtData.suffix;
      this.customerModel.company.value = EvtData.company;
      this.customerModel.address1.value = EvtData.address1;
      this.customerModel.city.value = EvtData.city;
      this.customerModel.state.value = EvtData.state;
      this.customerModel.zip.value = EvtData.zip;
    } else {
      const headerName: string = evt.colDef.headerName;
      if (headerName.toLowerCase() === 'select' && evt.event.target.className === 'custom-control-input') {
        this.showButton = false;
        const rowData = evt.data;
        this.custAddSeq = rowData.customerAddressSeq;
      }
    }
  }

  addAddressClicked = (evt: any) => {
    this.popUpType = {
      type: evt,
      customerAddressSeq: '',
      action: 'add'
    };
    this.customModelPopup.show(this.customerAddressSetting);
  }

  agCellDoubleClicked = (evt: any) => {
    const headerName: string = evt.colDef.headerName;
    const typeAdd = evt.data['changeType'];
    if (typeAdd === '0' || '1') {
      if (headerName !== 'Select') {
        const toEditData = evt.data;
        this.popUpType = {
          type: 'temp',
          customerAddressSeq: evt.data.customerAddressSeq,
          action: 'edit'
        };
        this.editAddressData = toEditData;
        this.customModelPopup.show(this.customerAddressSetting);
      }
    }
    if (typeAdd === null) {
      if (headerName !== 'Select') {
        const toEditData = evt.data;
        this.popUpType = {
          type: 'permanent',
          customerAddressSeq: evt.data.customerAddressSeq,
          action: 'edit'
        };
        this.editAddressData = toEditData;
        this.customModelPopup.show(this.customerAddressSetting);
      }

    }
  }

  delTempCustomerAdd() {
    this.loadDataFromApi(this.NAME_DEL_TEMP_ADD)
      .subscribe((data) => {
        if (data.Status === 'OK') {
          this.alert.showAlertScucess(['Customer Temp/Future Address Deleted Successfully!!!'], 3000);
          this.callOnSuccess();
        } else {
          this.alert.showAlertDanger(['Failed To Delete !! Try Again !!'], 3000);
        }
      });
  }

  getForm(name: string): FormGroup {
    if ((name === this.NAME_CUSTOMER_EDIT) || (name === this.NAME_EDIT_SUBMIT_CUSTOMER)) {
      return this.baseForm;
    }
  }

  customerCategoryChange(evt) {
  }

  defaultAddressChange(evt) {
  }

  creditStatusChange(evt) {
  }

  salesChange(evt) {
  }

  listRentalChange(evt) {
  }

  addAuxiliaryFields() {
    this.customModelPopup.show(this.addAuxiliaryFieldsSttting);
    this.reInitAddAuxi.next('Gyan');
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CUSTOMER_EDIT) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.NAME_EDIT_SUBMIT_CUSTOMER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.NAME_TEMP) {
      return {
        gridApi: this.gridApiTempaddress,
        columnApi: this.columnApiTempaddress
      };
    }
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_CUSTOMER_EDIT) {
      return columnDefsCustomerEdit;
    }
    if (name === this.NAME_TEMP) {
      return columnDefsTempAddCustomerEdit;
    }
    return columnDefsCustomerEdit;
  }

  billToAddressSetDefault() {
  }

  reNewAddressSetDefault() {
  }

  openTabs(id) {
    this.openTab.emit(id);
    this.customModelPopup.show(this.customerTempAddressSetting);
    this.reInitHistory.next(this.custAddSeq);
    // this.tabsComponent.selectTabWithID(id);
  }

  onUpdate() {
    if (this.isFormValid(this.NAME_EDIT_SUBMIT_CUSTOMER)) {
      this.showLoader();
      this.loadDataFromApi(this.NAME_EDIT_SUBMIT_CUSTOMER)
        .subscribe((data) => {
          if (data.Status === 'OK') {
            this.alert.showAlertScucess(['Customer Updated Successfully!!!'], 3000);
          }
        },
          (err) => {
          });
      this.hideLoader();
    }
  }

  getNonSearchModelParams(name: string) {
    const customer = SessionObject.getCustomerID();
    const refid = SessionObject.getRefID();
    const userDetails = SessionObject.getUserDetails();
    if (name === this.NAME_CUSTOMER_EDIT) {
      const obj = {
        customerId: customer.customerId || customer,
        userCode: userDetails.userCode,
        documentReferenceId: refid.documentReferenceDialogue
      };
      return obj;
    } else if (name === this.NAME_EDIT_SUBMIT_CUSTOMER) {
      const refid = SessionObject.getRefID();
      const submit = {
        customerId: customer.customerId || customer,
        type: 'permanent',
        userCode: userDetails.userCode,
        documentReferenceId: refid.documentReferenceDialogue
      };
      return submit;
    } else if (name === this.NAME_DEL_TEMP_ADD) {
      const obj = {
        customerId: customer.customerId || customer,
        customerAddressSeq: this.custAddSeq
      };
      return obj;
    } else if (name === this.NAME_ADDRESS_ADD) {
      const obj = {
        customerId: customer.customerId || customer,
        type: 'temp'
      };
      return obj;
    }
  }

  getSearchModel(name: string) {
    if (name === this.NAME_CUSTOMER_EDIT) {
      return this.customerApiKeyModel;
      // return this.customerModel;
    } else {
      return this.customerModel;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_CUSTOMER_EDIT) {
      return CustomerServicesUrls.TK_CUSTOMER_EDIT_EXITING_CUSTOMER;
    } else if (name === this.NAME_EDIT_SUBMIT_CUSTOMER) {
      return CustomerServicesUrls.TK_CUSTOMER_EDIT_SUBMIT_CUSTOMER;
    } else if (name === this.NAME_DEL_TEMP_ADD) {
      return CustomerServicesUrls.TK_DEL_CUSTOMER_TEMP_ADD;
    } else if (name === this.NAME_ADDRESS_ADD) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_ADD_DATA;
    }
  }

  xtBaseLoadDataFromApiProcessData(name, data) {
    if (name === this.NAME_CUSTOMER_EDIT) {
      this.setApiData(data);
    } else {
    }
  }

  setApiData(data) {
    if (data['futureTempaddressDetail'].length > 0) {
      this.showGrid = 'block';
      ProjectUtils.grid.setGridRowData(this.gridApiTempaddress, data['futureTempaddressDetail']);
    } else {
      this.showGrid = 'none';
    }
    const model = data.customerAddAttributeModel;
    if (model['defaultAddressList'].length > 0) {
      if (model.billTo === model.defaultAddress || model.defaultAddressList[0]) {
        this.defaultAddressBillTo = true;
      } if (model.renewTo === model.defaultAddress || model.defaultAddressList[0]) {
        this.defaultAddressReNew = true;
      }
    } else {
      if (model.billTo === model.defaultAddressList[0]) {
        this.defaultAddressBillTo = true;
      } if (model.renewTo === model.defaultAddressList[0]) {
        this.defaultAddressReNew = true;
      }
    }
    Utils.searchModel.assignValueFromApi(this.customerModel, model);
    //  this.gridApi.setRowData(data.addressDetail);
    this.creditStatusData = new DropdownDataModel(model.creditStatusList, model.creditStatus);
    this.customerCategoryData = new DropdownDataModel(model.customerCategoryList, model.customerCategory);
    this.salesData = new DropdownDataModel(model.salesRepresentativeList, model.sales);
    this.defaultAddressData = new DropdownDataModel(model.defaultAddressList, model.defaultAddress);
    this.listRentalData = new DropdownDataModel(model.listRentalList, model.listRental);
  }

  callOnSuccess() {
    this.loadDataFromApi(this.NAME_CUSTOMER_EDIT)
      .subscribe((reloadData) => {
        if (reloadData.Status === 'OK') {
          this.OnSubmit(this.NAME_CUSTOMER_EDIT);
          this.loadDataFromApi(this.NAME_ADDRESS_ADD)
            .subscribe((dateRange) => {
              debugger
              this.customerGuard.effectivearraydata = dateRange['EffectiveReverseDate'];
            });
        }
      });
  }

  ClosePopUp() {
    this.customModelPopup.hide(this.customerAddressSetting);
    this.callOnSuccess();
  }
}
