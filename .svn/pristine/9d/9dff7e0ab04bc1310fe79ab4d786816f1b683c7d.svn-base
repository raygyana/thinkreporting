import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBacsAuddisReports } from './bacs-auddis.data';
import { columnDefsBacsInstallmentReports } from './bacs-auddis.data';
import { Router } from '@angular/router';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';


let self;
@Component({
  selector: 'app-bacs-auddis',
  templateUrl: './bacs-auddis.component.html',
  styleUrls: ['./bacs-auddis.component.css']
})
export class BacsAuddisComponent extends BaseComponent implements OnInit {

  dropDown: any;
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  BACS_AUDDIS_REPORTS = 'BACS_AUDDIS_REPORTS';
  BACS_INSTALLMENT_REPORTS = 'BACS_INSTALLMENT_REPORTS';
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  gridApi1: any;
  statusType = 'All';
  gridApi: any;
  columnApi1: any;
  description1: any;
  BACS_AUDDIS_DESCRIPTION_REPORT = 'BACS_AUDDIS_DESCRIPTION_REPORT';
  BACS_AUDDIS_OUTPUT_REPORT = 'BACS_AUDDIS_OUTPUT_REPORT';
  BACS_AUDDIS_INSTALLMENT_REPORT = 'BACS_AUDDIS_INSTALLMENT_REPORT';
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
    if (name === this.BACS_AUDDIS_REPORTS) {
      return columnDefsBacsAuddisReports;
    } else {
      return columnDefsBacsInstallmentReports;
    }
  }
  // ngAfterViewInit() {

  // }
  doOnSave(event) {

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

    this.basicSetting2 = new DropdownWithDescriptionModel();
    this.basicSetting2.ListDisplayKeys = [{
      headerName: 'Key',
      displayKey: 'key'
    }];
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

  setFilterModel(value) {
    self.statusType = value;
    self.gridApi.onFilterChanged();
  }

  getServiceUrl(name): any {
    if (name === this.BACS_AUDDIS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.BACS_INSTALLMENT_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.BACS_AUDDIS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.BACS_INSTALLMENT_REPORTS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    }

  }
  doOnGridReadyBacsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.BACS_AUDDIS_REPORTS);
    this.OnSubmit(this.BACS_AUDDIS_REPORTS);
  }

  doOnGridReadyBacsInstallmentReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.BACS_INSTALLMENT_REPORTS);
    this.OnSubmit(this.BACS_INSTALLMENT_REPORTS);
  }

}
