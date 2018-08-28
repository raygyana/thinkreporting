import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../../../core/base/base.service';
import { ColDef, GridOptions } from 'ag-grid';
import { columnDefsCustomerHistoryReports } from './customer-add-history.service';
import { Utils, CustomerServicesUrls } from '../../../../../core/shared';
import { GridAPII } from '../../../../../core/base/base.component';
import { SessionObject } from '../../../../../core/shared';
import { ModelPopUpBase } from '../../../../../core/base/index';
import { Router } from '@angular/router';
import { CustomerHistoryModel } from './customer-add-history.model';
let self;

@Component({
  selector: 'app-customer-add-history',
  templateUrl: './customer-add-history.component.html',
  styleUrls: ['./customer-add-history.component.css']
})
export class CustomerAddHistoryComponent extends ModelPopUpBase implements OnInit {

  ddOptionsCustHistoryData: any;
  customerId: any;
  customerHistoryModel: CustomerHistoryModel;
  CUSTOMER_HISTORY_REPORTS = 'CUSTOMER_HISTORY_REPORTS';
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  lastElement: Array<any>;
  customerHistoryData: any;

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptionsReports = {};
    self = this;
  }

  reInit(data) {
    this.customerHistoryModel.addrSeq.value = data;
    let finaltest = [];
    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        this.customerHistoryData = data.addressHistoryList;
        this.ddOptionsCustHistoryData = finaltest;
        this.xtBaseLoadDataFromApiProcessData(name, this.customerHistoryData);
        const gridApi: any = this.getGridApi(this.CUSTOMER_HISTORY_REPORTS).gridApi;
        gridApi.setRowData(this.customerHistoryData);
        gridApi.totalRowCount = this.customerHistoryData.length;
        this.autoSizeColumns(this.CUSTOMER_HISTORY_REPORTS);
      });
  }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
    }
    Utils.date.convertArrayKeytoDate(data, 'creation_date');
  }


  ngOnInit() {
    this.customerId = SessionObject.getCustomerID();
    this.customerHistoryModel.customerId.value = this.customerId.customerId || this.customerId;
  }


  getSearchModel(name: string) {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return this.customerHistoryModel;
    } else {
      return this.customerHistoryModel;
    }
  }

  initSearchModels() {
    this.customerHistoryModel = new CustomerHistoryModel();
    console.log('customerHistoryModel', this.customerHistoryModel);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return columnDefsCustomerHistoryReports;
    }
  }

  getServiceUrl(name): any {
    return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_HISTORY_URL;
  }

  getGridApi(name: string): GridAPII {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  OnClickHistory() {

    let finaltest = [];
    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        this.customerHistoryData = data.addressHistoryList;
        this.ddOptionsCustHistoryData = finaltest;
        this.xtBaseLoadDataFromApiProcessData(name, this.customerHistoryData);
        const gridApi: any = this.getGridApi(this.CUSTOMER_HISTORY_REPORTS).gridApi;
        gridApi.setRowData(this.customerHistoryData);
        gridApi.totalRowCount = this.customerHistoryData.length;
        this.autoSizeColumns(this.CUSTOMER_HISTORY_REPORTS);
        this.customerHistoryModel.addrSeq.value = '100';
      });
  }


  doOnGridReadyAutoRenewalReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.CUSTOMER_HISTORY_REPORTS);
  }



}

