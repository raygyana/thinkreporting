import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsCustomerDepositReports } from './customer-deposit-reconciliation.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';
const salesByCatJSON = 'assets/json/process.json';
let self;
@Component({
  selector: 'app-customer-deposit-reconciliation',
  templateUrl: './customer-deposit-reconciliation.component.html',
  styleUrls: ['./customer-deposit-reconciliation.component.css']
})
export class CustomerDepositReconciliationComponent extends BaseComponent implements OnInit {
  description1: any;
  gridApi: any;
  dropDown: any;
  columnApi: any;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  CUSTOMER_DEPOSIT_REPORTS = 'CUSTOMER_DEPOSIT_REPORTS';
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    self = this;
  }

  ngOnInit() {
    this.initDropdown();
    this.gridOptionsReports.isExternalFilterPresent = this.isExternalFilterPresent,
      this.gridOptionsReports.doesExternalFilterPass = this.doesExternalFilterPass;
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.CUSTOMER_DEPOSIT_REPORTS) {
      return columnDefsCustomerDepositReports;
    } else {
      return columnDefsCustomerDepositReports;
    }
  }
  isExternalFilterPresent() {
    console.log('isExternalFilterPresent>self.statusType:', self.statusType);
    // if ageType is not everyone, then we are filtering
    return self.statusType !== 'All';
  }

  doesExternalFilterPass(node) {
    console.log('doesExternalFilterPass', node);
    switch (self.statusType) {
      case 'All': return true;
      case 'Selected': return node.selected === true;
      default: return false;
    }
  }

  setFilterModel(value) {
    self.statusType = value;
    self.gridApi.onFilterChanged();
  }


  initDropdown() {

    this.basicSetting = new DropdownWithDescriptionModel();
    this.basicSetting.ListDisplayKeys = [{
      headerName: 'Process',
      displayKey: 'process'
    }, {
      headerName: 'Process Type',
      displayKey: 'processType'
    }];


    this.basicSetting.descriptionKey = 'processType';
    this.basicSetting.displayKey = 'process';
    this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting.valueTypeOrKey = 'process';

    this.basicSetting1 = new DropdownWithDescriptionModel();
    this.basicSetting1.ListDisplayKeys = [{
      headerName: 'Key',
      displayKey: 'key'
    }];
    this.basicSetting1.displayKey = 'key';
    this.basicSetting1.serviceUrl = ProcessUrls.TK_SHOW_DROPDOWN_URL;
    this.basicSetting1.valueTypeOrKey = 'key';
  }
  getServiceUrl(name): any {
    return ProcessUrls.TK_CUSTOMER_DEPOSIT_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.CUSTOMER_DEPOSIT_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }
  doOnSave(event) {

  }

  doOnGridReadyCustomerDepositReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.CUSTOMER_DEPOSIT_REPORTS);
    this.OnSubmit(this.CUSTOMER_DEPOSIT_REPORTS);
  }


}
