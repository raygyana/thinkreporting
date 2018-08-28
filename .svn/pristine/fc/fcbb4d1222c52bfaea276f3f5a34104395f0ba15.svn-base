import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsLabelReports } from './lable.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
let self;
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent extends BaseComponent implements OnInit {
  @ViewChild('repeatingCheckbox') repeatingCheckbox: ElementRef;
  notification1: any;
  @ViewChild(TabsComponent) tabsComponent;
  @ViewChild('biilingTemplate') BiilingTemplate;
  @ViewChild('insertsTemplate') InsertTemplate;
  @ViewChild('splitsTemplate') SplitsTemplate;



  @ViewChild('autoRenewalTemplate') AutoRenewalTemplate;
  @ViewChild('renewalsTemplate') RenewalTemplate;

  @ViewChild('billing') billingCheckbox: ElementRef;
  @ViewChild('renewals') renewalCheckbox: ElementRef;
  @ViewChild('splits') splitsCheckbox: ElementRef;
  @ViewChild('inserts') insertsCheckbox: ElementRef;
  @ViewChild('autoRenewal') AutoRenewal: ElementRef;
  @ViewChild('renewal') openRenewalCheckbox: ElementRef;

  checked: any;
  is_edit1: boolean;



  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  basicSetting3: DropdownWithDescriptionModel;
  basicSetting4: DropdownWithDescriptionModel;
  basicSetting5: DropdownWithDescriptionModel;
  basicSetting6: DropdownWithDescriptionModel;
  statusType = 'All';
  is_edit = false;
  dropDown: any;
  gridApi: any;
  columnApi: any;
  headerName: any;
  description1: any;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  LABEL_REPORTS = 'LABEL_REPORTS';

  LABEL_DESCRIPTION_REPORT = 'LABEL_DESCRIPTION_REPORT';
  LABEL_OUTPUT_REPORT = 'LABEL_OUTPUT_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptionsReports.onCellClicked = this.agCellClicked;

    this.initDropdown();
    self = this;
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
    this.basicSetting6 = new DropdownWithDescriptionModel();
    this.basicSetting6.ListDisplayKeys = [{
      headerName: 'Queue',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];
    this.basicSetting6.descriptionKey = 'processType';
    this.basicSetting6.displayKey = 'process';
    this.basicSetting6.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting6.valueTypeOrKey = 'process';

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
    return columnDefsLabelReports;
  }



  doOnSave(event) {
    console.log('AutoRenewalNotifyComponent>doOnSave>event', event);

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.LABEL_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyLabelReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.LABEL_REPORTS);
    this.OnSubmit(this.LABEL_REPORTS);
  }
  repeatCheckBoxClick() {
    self.is_edit = self.repeatingCheckbox.nativeElement.checked;
  }
  openBiilingTab() {

    if (this.billingCheckbox.nativeElement.checked === true) {
      this.tabsComponent.openTab('Billing', this.BiilingTemplate, {}, true, 'biilingTemplate');
    } else {
      this.tabsComponent.closeTab2('biilingTemplate');
    }



  }
  openInsertTab() {
    if (this.insertsCheckbox.nativeElement.checked === true) {
      this.tabsComponent.openTab('Insert', this.InsertTemplate, {}, true, 'insertTemplate');
    } else {
      this.tabsComponent.closeTab2('insertTemplate');
    }
  }

  // openAutoRenewalTab() {
  //   if (this.autoRenewalCheckbox.nativeElement.checked === true) {
  //     this.tabsComponent.openTab('Splits', this.SplitsTemplate, {}, true, 'splitsTemplate');
  //   } else {
  //     this.tabsComponent.closeTab2(this.SplitsTemplate);
  //   }
  // }

  openSplitsTab() {
    if (this.splitsCheckbox.nativeElement.checked === true) {
      this.tabsComponent.openTab('Splits', this.SplitsTemplate, {}, true, 'splitsTemplate');
    } else {
      this.tabsComponent.closeTab2(this.SplitsTemplate);
    }
  }

  openRenewalsTab() {
    if (this.openRenewalCheckbox.nativeElement.checked === true) {
      this.tabsComponent.openTab('Renewals', this.RenewalTemplate, {}, true, 'RenewalTemplate');
    } else {
      this.tabsComponent.closeTab2('RenewalTemplate');
    }
  }

  Checked(value) {

    this.checked = this.AutoRenewal.nativeElement.checked;
    if (this.checked === true) {
      this.is_edit1 = true;
    } else {
      this.is_edit1 = false;
    }
    console.log('checked', this.checked);

  }



}
