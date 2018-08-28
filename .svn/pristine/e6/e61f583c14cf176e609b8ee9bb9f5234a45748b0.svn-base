import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../../core/base/base.component';
import { BaseService } from '../../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';

import { CustomModalPopUpService } from '../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from '../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';

import { columnDefsRenewalDescReports, columnDefsRenewalDefinitionReports } from './accounting-reconciliation-output.data';
import { columnDefsRenewalOrderClassReports } from './accounting-reconciliation-output.data';
import { columnDefsRenewalEffortsReports } from './accounting-reconciliation-output.data';
import { columnDefsRenewalEffortsReports1 } from './accounting-reconciliation-output.data';
import { columnDefsCloseAccountingReports } from './accounting-reconciliation-output.data';
import { columnDefsAddAccountingReports } from './accounting-reconciliation-output.data';
import { columnDefsPrintReconciliationReports } from './accounting-reconciliation-output.data';

import { ProcessUrls } from '../../../../core/shared';
import { Router } from '@angular/router';
import { GridAPII } from '../../../../core/base/base.component';
import { TabsComponent } from '../../../../component/ng-tabs/tabs.component';
import { DropdownWithDescriptionModel } from '../../../../component/dropdown-with-description';
let self;

@Component({
  selector: 'app-accounting-reconciliation-output',
  templateUrl: './accounting-reconciliation-output.component.html',
  styleUrls: ['./accounting-reconciliation-output.component.css']
})

export class AccountingReconciliationOutputComponent extends BaseComponent implements OnInit {


  shown: boolean;
  AlertType: any;
  profitCenterAccountingPeriodsExtraOption: any;
  printReconciliationExtraOption: any;
  OrderByClassExtraOption: any;
  profitCenterExtraOption: any;
  orderClassAccountingPeriodsExtraOption: any;
  closeAccountingPopupExtraOption: any;
  addAccountingPopupExtraOption: any;
  printReconciliationPopupExtraOption: any;


  addAccountingPeriodsSetting: any;
  closeAccountingPeriodsSetting: any;
  editAccountingPeriodsSetting: any;
  printReconciliationReportSetting: any;

  dropDown: any;
  is_edit: false;
  checked: boolean;
  is_edit1: boolean;
  description: any;

  PROFIT_CENTER_ACCOUNT_REPORTS = 'PROFIT_CENTER_ACCOUNT_REPORTS';
  PRINT_RECONCILIATION_REPORTS = 'PRINT_RECONCILIATION_REPORTS';
  CLOSE_ACCOUNTING_PERIODS = 'CLOSE_ACCOUNTING_PERIODS';

  ORDER_by_CLASS_REPORTS = 'ORDER_by_CLASS_REPORTS';
  PROFIT_CENTER_EXTRAOPTION = 'PROFIT_CENTER_EXTRAOPTION';
  ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS = 'ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS';
  ADD_ACCOUNTING_PERIODS = 'ADD_ACCOUNTING_PERIODS';
  PRINT_RECONCILIATION = 'PRINT_RECONCILIATION';

  statusType: 'All';
  statusType1: 'All';
  gridApi1: any;
  description1: any;
  columnApi1: any;
  gridApi2: any;
  columnApi2: any;
  gridApi3: any;
  columnApi3: any;
  columnApi4: any;
  gridApi4: any;
  gridApiCloseAccounting: any;
  columnApiCloseAccounting: any;
  columnApiAddAccounting: any;
  gridApiAddAccounting: any;
  columnApiPrintReconciliation: any;
  gridApiPrintReconciliation: any;

  profitCenterGridOptions: GridOptions;
  gridOptionsReports1: GridOptions;
  gridOptionsReports2: GridOptions;
  gridOptionsReports3: GridOptions;
  gridOptionsReportsGridOptions: GridOptions;
  profitCenterAccountinggridOptions: GridOptions;
  closeAccountingPopupgridOptions: GridOptions;
  addAccountingPopupgridOptions: GridOptions;
  printReconciliationPopupgridOptions: GridOptions;



  constructor(baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    self = this;
    this.profitCenterExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.profitCenterAccountingPeriodsExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.OrderByClassExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.printReconciliationExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.orderClassAccountingPeriodsExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.closeAccountingPopupExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.addAccountingPopupExtraOption = {
      showHeader: false,
      showFooter: false
    };
    this.printReconciliationPopupExtraOption = {
      showHeader: false,
      showFooter: false
    };


    this.createPopUp();
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PROFIT_CENTER_ACCOUNT_REPORTS) {
      return columnDefsRenewalDescReports;
    } else if (name === this.PRINT_RECONCILIATION_REPORTS) {
      return columnDefsRenewalDefinitionReports;
    } else if (name === this.ORDER_by_CLASS_REPORTS) {
      return columnDefsRenewalOrderClassReports;
    } else if (name === this.PROFIT_CENTER_EXTRAOPTION) {
      return columnDefsRenewalEffortsReports;
    } else if (name === this.ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS) {
      return columnDefsRenewalEffortsReports1;
    } else if (name === this.CLOSE_ACCOUNTING_PERIODS) {
      return columnDefsCloseAccountingReports;
    } else if (name === this.ADD_ACCOUNTING_PERIODS) {
      return columnDefsAddAccountingReports;
    } else if (name === this.PRINT_RECONCILIATION) {
      return columnDefsPrintReconciliationReports;
    }
  }

  getServiceUrl(name): any {
    if (name === this.PROFIT_CENTER_ACCOUNT_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.ORDER_by_CLASS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.PRINT_RECONCILIATION_REPORTS) {
      return ProcessUrls.TK_RENEWAL_DEF_URL;
    } else if (name === this.PROFIT_CENTER_EXTRAOPTION) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.CLOSE_ACCOUNTING_PERIODS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.ADD_ACCOUNTING_PERIODS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.PRINT_RECONCILIATION) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    }
  }
  ngOnInit() {
    this.gridOptionsReportsGridOptions = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };

    this.profitCenterGridOptions = {
      onCellClicked: this.profitCenterCellClicked,
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };

    this.gridOptionsReports1 = {

      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
    this.gridOptionsReports2 = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
    this.gridOptionsReports3 = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };

    this.profitCenterAccountinggridOptions = {
      suppressRowClickSelection: true,
      onCellClicked: this.aprofitCenterAccountingCellClicked,
      rowSelection: 'multiple'
    };
    this.closeAccountingPopupgridOptions = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
    this.addAccountingPopupgridOptions = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
    this.printReconciliationPopupgridOptions = {
      suppressRowClickSelection: true,
      rowSelection: 'multiple'
    };
  }

  getGridApi(name: string): GridAPII {
    if (name === this.PROFIT_CENTER_ACCOUNT_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.PRINT_RECONCILIATION_REPORTS) {
      return {
        gridApi: this.gridApi4,
        columnApi: this.columnApi4
      };
    } else if (name === this.ORDER_by_CLASS_REPORTS) {
      return {
        gridApi: this.gridApi3,
        columnApi: this.columnApi3
      };
    } else if (name === this.PROFIT_CENTER_EXTRAOPTION) {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    } else if (name === this.ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else if (name === this.CLOSE_ACCOUNTING_PERIODS) {
      return {
        gridApi: this.gridApiCloseAccounting,
        columnApi: this.columnApiCloseAccounting
      };
    } else if (name === this.ADD_ACCOUNTING_PERIODS) {
      return {
        gridApi: this.gridApiAddAccounting,
        columnApi: this.columnApiAddAccounting
      };
    } else if (name === this.PRINT_RECONCILIATION) {
      return {
        gridApi: this.gridApiPrintReconciliation,
        columnApi: this.columnApiPrintReconciliation
      };
    }

  }

  doOnGridReadyProfitCenter(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PROFIT_CENTER_ACCOUNT_REPORTS);
    this.OnSubmit(this.PROFIT_CENTER_ACCOUNT_REPORTS);
  }
  doOnGridReadyProfitCenterAccounting(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.PROFIT_CENTER_EXTRAOPTION);
    this.OnSubmit(this.PROFIT_CENTER_EXTRAOPTION);

  }

  doOnGridReadyOrderByClass(api) {
    self.gridApi1 = api.api;
    self.columnApi1 = api.columnApi;
    this.doOnGridReady(this.ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS);
    this.OnSubmit(this.ORDER_CLASS_ACCOUNTING_PERIODS_REPORTS);

  }

  doOnGridReadyOrderClassAccountingPeriods(api) {
    this.gridApi3 = api.api;
    this.columnApi3 = api.columnApi;
    this.doOnGridReady(this.ORDER_by_CLASS_REPORTS);
    this.OnSubmit(this.ORDER_by_CLASS_REPORTS);

  }

  doOnGridReadyPrintReconciliation(api) {
    this.gridApi4 = api.api;
    this.columnApi4 = api.columnApi;
    self.doOnGridReady(this.PRINT_RECONCILIATION_REPORTS);
    self.OnSubmit(this.PRINT_RECONCILIATION_REPORTS);

  }

  doOnGridReadyCloseAccountingPopup(api) {
    this.gridApiCloseAccounting = api.api;
    this.columnApiCloseAccounting = api.columnApi;
    self.doOnGridReady(this.CLOSE_ACCOUNTING_PERIODS);

  }

  doOnGridReadyAddAccountingPopup(api) {
    this.gridApiAddAccounting = api.api;
    this.columnApiAddAccounting = api.columnApi;
    self.doOnGridReady(this.ADD_ACCOUNTING_PERIODS);
  }

  doOnGridReadyPrintReconciliationPopup(api) {
    this.gridApiPrintReconciliation = api.api;
    this.columnApiPrintReconciliation = api.columnApi;
    self.doOnGridReady(this.PRINT_RECONCILIATION);
  }

  createPopUp() {
    this.closeAccountingPeriodsSetting
      = new CustomModalPopUpModel();
    this.closeAccountingPeriodsSetting
      .id = 'CloseAccountingPeriods';
    this.closeAccountingPeriodsSetting
      .title = 'Close Accounting Periods';
    this.closeAccountingPeriodsSetting
      .noButtons = true;
    this.closeAccountingPeriodsSetting
      .upperCross = true;
    this.closeAccountingPeriodsSetting
      .large = true;


    this.addAccountingPeriodsSetting
      = new CustomModalPopUpModel();
    this.addAccountingPeriodsSetting
      .id = 'AddAccountingPeriods';
    this.addAccountingPeriodsSetting
      .title = 'Add Accounting Periods';
    this.addAccountingPeriodsSetting
      .noButtons = true;
    this.addAccountingPeriodsSetting
      .upperCross = true;
    this.addAccountingPeriodsSetting
      .large = true;

    this.editAccountingPeriodsSetting
      = new CustomModalPopUpModel();
    this.editAccountingPeriodsSetting
      .id = 'EditAccountingPeriods';
    this.editAccountingPeriodsSetting
      .title = 'Edit Accounting Periods';
    this.editAccountingPeriodsSetting
      .noButtons = true;
    this.editAccountingPeriodsSetting
      .upperCross = true;
    this.editAccountingPeriodsSetting
      .large = true;


    this.printReconciliationReportSetting
      = new CustomModalPopUpModel();
    this.printReconciliationReportSetting
      .id = 'printReconciliation';
    this.printReconciliationReportSetting
      .title = 'Reconciliation Report: AR Reconciliation By Accounting Period Report';
    this.printReconciliationReportSetting
      .noButtons = true;
    this.printReconciliationReportSetting
      .upperCross = true;
    this.printReconciliationReportSetting
      .large = true;

  }


  openCloseAccountingPeriodsPopUp() {
    this.customModalPopService.show(this.closeAccountingPeriodsSetting);
    self.OnSubmit(this.CLOSE_ACCOUNTING_PERIODS);
  }
  openAddAccountingPeriodsPopUp() {
    this.customModalPopService.show(this.addAccountingPeriodsSetting);
    self.OnSubmit(this.ADD_ACCOUNTING_PERIODS);
  }
  openEditAccountingPeriodsPopUp() {
    this.customModalPopService.show(this.editAccountingPeriodsSetting);
  }
  printReconciliationReportPopUp() {
    this.customModalPopService.show(this.printReconciliationReportSetting);
    self.OnSubmit(this.PRINT_RECONCILIATION);
  }

  aprofitCenterAccountingCellClicked = (event) => {
    console.log(event);
    if (event.event.target.innerText === 'Edit') {
      this.openEditAccountingPeriodsPopUp();
    }
  }
  profitCenterCellClicked() {
    console.log('profitCenterCellClicked');
    self.OnSubmit(this.PROFIT_CENTER_ACCOUNT_REPORTS);
  }
}
