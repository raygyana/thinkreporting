import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
// import { columnDefsBillingReports } from './billing-submit.data';
// import { columnDefsBillingOrderClassReports } from './billing-submit.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { columnDefsBillingDescriptionReports } from './billing-submit.data';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';
const salesByCatJSON = 'assets/json/process.json';
let self;
@Component({
  selector: 'app-billing-submit-job',
  templateUrl: './billing-submit-job.component.html',
  styleUrls: ['./billing-submit-job.component.css']
})
export class BillingSubmitJobComponent extends BaseComponent implements OnInit, AfterViewInit {
  statusType: any;
  basicSetting: DropdownWithDescriptionModel;
  dropDown: any;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };

  BILLING_REPORTS = 'BILLING_REPORTS';
  BILLING_DESCRIPTION_REPORT = 'BILLING_OUTPUT';
  BILLING_OUTPUT_REPORT = 'BILLING_REPORT';
  RENEWALS_REPORT = 'RENEWALS_REPORT';
  BILLING_REPORT = 'BILLING_DESCRIPTION';
  description1: any;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.initDropdown();
    self = this;
  }

  initDropdown() {

    this.basicSetting = new DropdownWithDescriptionModel();
    // this.basicSetting.ListDisplayKeys = ['process', 'processType'];
    this.basicSetting.descriptionKey = 'processType';
    this.basicSetting.displayKey = 'process';
    this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting.valueTypeOrKey = 'process';

    this.basicSetting1 = new DropdownWithDescriptionModel();
    // this.basicSetting1.ListDisplayKeys = ['key'];
    this.basicSetting1.displayKey = 'key';
    this.basicSetting1.serviceUrl = ProcessUrls.TK_SHOW_DROPDOWN_URL;
    this.basicSetting1.valueTypeOrKey = 'key';

    this.basicSetting2 = new DropdownWithDescriptionModel();
    // this.basicSetting2.ListDisplayKeys = ['key'];
    this.basicSetting2.displayKey = 'key';
    this.basicSetting2.serviceUrl = ProcessUrls.TK_ORDER_CLASS_DROPDOWN1_URL;
    this.basicSetting2.valueTypeOrKey = 'key';
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

  ngOnInit() {
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
    this.gridOptionsReports.isExternalFilterPresent = this.isExternalFilterPresent,
      this.gridOptionsReports.doesExternalFilterPass = this.doesExternalFilterPass;
  }

  setFilterModel(value) {
    self.statusType = value;
    self.gridApi.onFilterChanged();
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BILLING_REPORTS) {
      return columnDefsBillingDescriptionReports;
    } else {
      return columnDefsBillingDescriptionReports;
    }
  }
  agCellClicked = (event) => {
    if (event.colDef.headerName === 'CheckBox') {
      const headerName: string = event.colDef.headerName;
      const row = event['data'];
      // if (headerName === 'Edit Access Details') {
      //   // this.fillData();
      // }
      console.log('AG Clicked');
    }
  }
  ngAfterViewInit() {
  }
  doOnSave(event) {
  }
  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BILLING_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }

  }
  doOnGridReadyBillingDescriptionReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BILLING_REPORTS);
    this.OnSubmit(this.BILLING_REPORTS);
  }
}
