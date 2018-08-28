import { Component, OnInit } from '@angular/core';
import { CustomerSearchService } from './customer-search.service';
import { CustomerSearchModel } from './customer-serach.model';
import { BaseService } from '../../../core/base/base.service';
import { CustomerServicesUrls } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { BaseComponent } from '../../../core/base/index';
import { columnDefsCustomerSearch } from './customer-search.data';
import { SessionObject } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DropdownDataModel } from '../../../component';
@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css'],
  providers: [CustomerSearchService]
})
export class CustomerSearchComponent extends BaseComponent implements OnInit {

  gridApi: any;
  columnApi: any;
  rowdata: any;
  showtable = 'none';
  NAME_CUSTOMER_SEARCH = 'NAME_CUSTOMER_SEARCH';
  NAME_GET_COUNTRY_LIST = 'GET_COUNTRY_LIST';
  searchByKeword: any = 'Name';
  CountryList: any;
  customerSearchModel: CustomerSearchModel;
  searchBy = [
    {
      lable: 'Name',
      value: 'Name'
    },
    {
      lable: 'Customer ID',
      value: 'CustomerID'
    },
    {
      lable: 'Phone Number / Email ',
      value: 'phoneNo'
    },
    {
      lable: ' Company / Location',
      value: 'Company'
    },
    {
      lable: 'Payment',
      value: 'Payment'
    },
    {
      lable: 'Subscriptions',
      value: 'Subscriptions'
    },
    {
      lable: 'Order Number',
      value: 'OrderNumber'
    },
    {
      lable: 'Refrence Number',
      value: 'RefrenceNumber'
    }
  ];
  constructor(
    protected customerSearchService: CustomerSearchService,
    protected baseService: BaseService,
    protected router: Router
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  initSearchModels() {
    this.customerSearchModel = new CustomerSearchModel();
  }
  ngOnInit() {
    this.initSearchModels();
    this.getCountryList();
    console.log('customerSearchModel', this.searchByKeword,
      this.customerSearchModel);
  }



  onSubmit() {
    this.showtable = 'block';
    this.gridApi.sizeColumnsToFit();
    this.loadDataFromApi1();

  }

  agCellClicked = (event) => {
    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    this.rowdata = row;
    SessionObject.setCustomerID({
      'customerId': row.customerId,
    });
    SessionObject.setOpenTab({
      'openTab': 'ORDER_REPORTS',
    });
    this.navigateTo('pages/customer/agency-details');

  }

  loadDataFromApi1() {
    let parm = this.setParm(this.customerSearchModel);
    parm = parm + '&searchBy=' + this.searchByKeword;
    this.showLoader();
    this.baseService.getDataFromAPI(CustomerServicesUrls.TK_CUSTOMER_SEARCH_DATA, parm)
      .subscribe((data) => {

        // console.log('DocumentReferenceListComponent>datafrom api::', data);
        this.gridApi.setRowData(data.searchresult);
        this.hideLoader();
      });
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return columnDefsCustomerSearch;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return CustomerServicesUrls.TK_DOCUMENT_REFERENCE_URL;
    } else if (name === this.NAME_GET_COUNTRY_LIST) {
      return CustomerServicesUrls.TK_GET_COUNTRY_LIST;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyCs(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CUSTOMER_SEARCH);
    // this.loadDataFromApi1();
  }


  getForm(name: string): FormGroup {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return this.baseForm;
    }
  }

  resetform() {
    this.customerSearchModel.lName.value = null;
    this.customerSearchModel.fName.value = null;
    this.customerSearchModel.initial.value = null;
    this.customerSearchModel.customerId.value = null;
    this.customerSearchModel.eMail.value = null;
    this.customerSearchModel.phoneNumber.value = null;
    this.customerSearchModel.companyName.value = null;
    this.customerSearchModel.country.value = null;
    this.customerSearchModel.cheque.value = null;
    this.customerSearchModel.subscriptionNumber.value = null;
    this.customerSearchModel.orderNumber.value = null;
    this.customerSearchModel.salesInvoice.value = null;
    this.customerSearchModel.agentReference.value = null;
    this.customerSearchModel.poNumber.value = null;
    this.customerSearchModel.creditNote.value = null;
    this.customerSearchModel.postalCode.value = null;
  }

  public getCountryList() {
    this.loadDataFromApi(this.NAME_GET_COUNTRY_LIST)
      .subscribe((data) => {
        this.CountryList = new DropdownDataModel(data.StateList);
      });
  }

}


