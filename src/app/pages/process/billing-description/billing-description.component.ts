import {
  Component, OnInit, AfterViewInit,
  ViewChild, ElementRef
} from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions, FlattenStage } from 'ag-grid';
import { columnDefsBillingDescriptionReports } from './billing-description.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
let self;
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-billing-description',
  templateUrl: './billing-description.component.html',
  styleUrls: ['./billing-description.component.css']
})

export class BillingDescriptionComponent extends BaseComponent implements OnInit, AfterViewInit {
  dropDown: any;
  @ViewChild(TabsComponent) tabsComponent;
  @ViewChild('installmentTemplate') InstallmentTemplate;
  @ViewChild('billingCheck') billingCheckbox: ElementRef;

  @ViewChild('repeatingId') repeatingCheckbox: ElementRef;
  statusType: 'All';
  checkValue: any;
  // checked: any;
  repeatingCheck = false;
  is_edit = false;
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  basicSetting3: DropdownWithDescriptionModel;
  basicSetting4: DropdownWithDescriptionModel;
  basicSetting5: DropdownWithDescriptionModel;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };

  BILLING_REPORTS = 'BILLING_REPORTS';
  BILLING_DESCRIPTION_REPORT = 'BILLING_OUTPUT';
  BILLING_OUTPUT_REPORT = 'BILLING_REPORT';
  BILLING_REPORT = 'BILLING_DESCRIPTION';
  description1: any;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.initDropdown();
    self = this;
  }



  openInstallmentTab() {
    if (this.billingCheckbox.nativeElement.checked === true) {
      this.tabsComponent.openTab('Installment', this.InstallmentTemplate, {}, true, 'installmentTemplate');
    } else {
      this.tabsComponent.closeTab2('installmentTemplate');
    }
  }


  initDropdown() {

    this.basicSetting = new DropdownWithDescriptionModel();
    this.basicSetting.ListDisplayKeys = [{
      headerName: 'Code',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];
    this.basicSetting.descriptionKey = 'processType';
    this.basicSetting.displayKey = 'process';
    this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting.valueTypeOrKey = 'process';

    this.basicSetting3 = new DropdownWithDescriptionModel();
    this.basicSetting3.ListDisplayKeys = [{
      headerName: 'Queue',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];
    this.basicSetting3.descriptionKey = 'processType';
    this.basicSetting3.displayKey = 'process';
    this.basicSetting3.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting3.valueTypeOrKey = 'process';

    this.basicSetting4 = new DropdownWithDescriptionModel();
    this.basicSetting4.ListDisplayKeys = [{
      headerName: 'Group',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];
    this.basicSetting4.descriptionKey = 'processType';
    this.basicSetting4.displayKey = 'process';
    this.basicSetting4.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting4.valueTypeOrKey = 'process';

    this.basicSetting5 = new DropdownWithDescriptionModel();
    this.basicSetting5.ListDisplayKeys = [{
      headerName: 'KeyLine',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];
    this.basicSetting5.descriptionKey = 'processType';
    this.basicSetting5.displayKey = 'process';
    this.basicSetting5.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting5.valueTypeOrKey = 'process';

    this.basicSetting1 = new DropdownWithDescriptionModel();
    this.basicSetting1.ListDisplayKeys = [{
      headerName: 'Show',
      displayKey: 'key'
    }];
    this.basicSetting1.displayKey = 'key';
    this.basicSetting1.serviceUrl = ProcessUrls.TK_SHOW_DROPDOWN_URL;
    this.basicSetting1.valueTypeOrKey = 'key';

    this.basicSetting2 = new DropdownWithDescriptionModel();
    this.basicSetting2.ListDisplayKeys = [{
      headerName: 'Order Class',
      displayKey: 'key'
    }];
    this.basicSetting2.displayKey = 'key';
    this.basicSetting2.serviceUrl = ProcessUrls.TK_ORDER_CLASS_DROPDOWN1_URL;
    this.basicSetting2.valueTypeOrKey = 'key';
  }

  // ngOnInit() {
  //   this.gridOptionsReports.onCellClicked = this.agCellClicked;
  // }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.BILLING_REPORTS) {
      return columnDefsBillingDescriptionReports;
    } else {
      return columnDefsBillingDescriptionReports;
    }
  }

  isExternalFilterPresent() {
    console.log('isExternalFilterPresent>self.statusType:', self.statusType);
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

  repeatCheckBoxClick() {
    self.is_edit = self.repeatingCheckbox.nativeElement.checked;
  }

}
