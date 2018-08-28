import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../core/base/base.component';
import { BaseService } from '../../../../core/base/base.service';
import { ColDef, GridOptions } from 'ag-grid';
import { columnDefsCustomerHistoryReports } from './customer-history.service';
import { ProcessUrls, CustomerServicesUrls } from '../../../../core/shared';
import { GridAPII } from '../../../../core/base/base.component';
import { DropdownDataModel } from '../../../../component/dropdown-with-description';
import { SessionObject } from '../../../../core/shared';
import { Router } from '@angular/router';
import { CustomerHistoryModel } from './customer-history.model';
import { Utils } from '../../../../core/shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent extends BaseComponent implements OnInit {

  firstLoad = true;
  firstLoadDropValue = false;
  ddOptionsCustHistoryData: any;
  customerId: any;
  previousValue: any;
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
  }

  ngOnInit() {
    this.customerId = SessionObject.getCustomerID();
    this.customerHistoryModel.customerId.value = this.customerId.customerId;
  }
  getForm(name: string): FormGroup {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return this.baseForm;
    }
  }
  getSearchModel(name: string) {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return this.customerHistoryModel;
    }
  }
  initSearchModels() {
    this.customerHistoryModel = new CustomerHistoryModel();
    this.customerHistoryModel.historyFilter.value = '100';
    console.log('customerHistoryModel', this.customerHistoryModel);
  }
  // ag-grid set-up
  // set columns
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return columnDefsCustomerHistoryReports;
    }
  }
  getServiceUrl(name): any {
    return CustomerServicesUrls.TK_CUSTOMER_HISTORY_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    if (name === this.CUSTOMER_HISTORY_REPORTS) {
      Utils.date.convertArrayKeytoDate(data[this.customerHistoryModel.apiDatakey], 'creation_date');
      Utils.arrayUtil.convert01ToBoolean(data[this.customerHistoryModel.apiDatakey],
        this.condition_special_tax_id, 'before_change', 'after_change');
      if (this.firstLoad) {
        this.lastElement = data['historyFilterType'];
        this.ddOptionsCustHistoryData = new DropdownDataModel(this.lastElement);
        this.firstLoad = false;
      }
    }
  }

  doOnGridReadyAutoRenewalReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.CUSTOMER_HISTORY_REPORTS);
    this.OnSubmit(this.CUSTOMER_HISTORY_REPORTS);
  }

  changeTableData(val) {
    if (this.firstLoadDropValue) {
      this.OnSubmit(this.CUSTOMER_HISTORY_REPORTS);
    }
    this.firstLoadDropValue = true;
  }

  condition_special_tax_id = (item) => {
    return item['column_name'] === 'special_tax_id';
  }

  setChangedTableData(name) {
    Utils.arrayUtil.convert01ToBoolean(this.customerHistoryData, this.condition_special_tax_id, 'before_change', 'after_change');
  }
}
