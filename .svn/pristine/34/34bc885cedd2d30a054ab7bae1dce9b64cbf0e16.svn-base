import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBillingReports } from './billing.data';
import { columnDefsBillingOrderClassReports } from './billing.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { columnDefsBillingEffortsReports } from './billing.data';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';

import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent extends BaseComponent implements OnInit, AfterViewInit {


  gridOptions1: any;
  columnApi1: any;
  gridApi1: any;
  columnApi2: any;
  dropDown: any;
  gridApi2: any;
  // dropDown: any;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };


  gridOptionsReports1: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };

  gridOptionsReports2: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };


  basicSetting: DropdownWithDescriptionModel;

  BILLING_REPORTS = 'BILLING_REPORTS';
  BILLING_ORDER_CLASS = 'BILLING_ORDER_CLASS';
  BILLING_EFFORT_REPORT = 'BILLING_EFFORT_REPORT';

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptions = {};
    this.gridOptions1 = {};
    this.inItDropdown();
  }

  ngOnInit() {
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BILLING_REPORTS) {
      return columnDefsBillingReports;
    } else if (name === this.BILLING_ORDER_CLASS) {
      return columnDefsBillingOrderClassReports;
    } else {
      return columnDefsBillingEffortsReports;
    }
  }
  ngAfterViewInit() {

  }
  agCellClicked = (event) => {
    if (event.colDef.headerName === 'Ind') {
      const headerName: string = event.colDef.headerName;
      const row = event['data'];
      // if (headerName === 'Edit Access Details') {
      //   // this.fillData();
      // }
      console.log('AG Clicked');
    }
  }



  getServiceUrl(name): any {
    // if (name === this.BILLING_REPORTS) {
    return ProcessUrls.TK_ORDER_CLASS_URL;
    // } else {
    //   return ProcessUrls.TABLE_DEMO;
    // }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BILLING_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.BILLING_ORDER_CLASS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    }

  }

  inItDropdown() {
    this.basicSetting = new DropdownWithDescriptionModel();
    this.basicSetting.ListDisplayKeys = [{
      headerName: 'Code',
      displayKey: 'processType'
    },
    {
      headerName: 'Description',
      displayKey: 'process'
    }];
    this.basicSetting.descriptionKey = 'processType';
    this.basicSetting.displayKey = 'process';
    this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting.valueTypeOrKey = 'key';
  }




  doOnGridReadyBillingDefinitionReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BILLING_REPORTS);
    this.OnSubmit(this.BILLING_REPORTS);
  }

  doOnGridReadyBillingOrderClassReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.BILLING_ORDER_CLASS);
    this.OnSubmit(this.BILLING_ORDER_CLASS);
  }

  doOnGridReadyBillingEffortsReports(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.BILLING_EFFORT_REPORT);
    this.OnSubmit(this.BILLING_EFFORT_REPORT);
  }
}
