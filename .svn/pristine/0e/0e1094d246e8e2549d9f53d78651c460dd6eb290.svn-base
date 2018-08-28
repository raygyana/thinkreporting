import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBillingReports } from './installment.data';
// import { columnDefsBillingOrderClassReports } from './installment.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
// import { columnDefsBillingEffortsReports } from './installment.data';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css']
})
export class InstallmentComponent extends BaseComponent implements OnInit, AfterViewInit {


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
  basicSetting: DropdownWithDescriptionModel;

  BILLING_REPORTS = 'BILLING_REPORTS';
  BILLING_ORDER_CLASS = 'BILLING_ORDER_CLASS';
  BILLING_EFFORT_REPORT = 'BILLING_EFFORT_REPORT';

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptions = {};


  }

  ngOnInit() {
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BILLING_REPORTS) {
      return columnDefsBillingReports;
    }
  }
  ngAfterViewInit() {

  }
  agCellClicked = (event) => {
    if (event.colDef.headerName === 'Ind') {
      const headerName: string = event.colDef.headerName;
      const row = event['data'];
      console.log('AG Clicked');
    }
  }



  getServiceUrl(name): any {
    return ProcessUrls.TK_BILLING_INSTALLMENT_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BILLING_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyBillingDefinitionReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BILLING_REPORTS);
    this.OnSubmit(this.BILLING_REPORTS);
  }

}





















