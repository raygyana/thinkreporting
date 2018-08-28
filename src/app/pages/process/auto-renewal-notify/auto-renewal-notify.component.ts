import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsAutoRenewalReports } from './auto-renewal-notify.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';

let self;
@Component({
  selector: 'app-auto-renewal-notify',
  templateUrl: './auto-renewal-notify.component.html',
  styleUrls: ['./auto-renewal-notify.component.css']
})
export class AutoRenewalNotifyComponent extends BaseComponent implements OnInit, AfterViewInit {


  @ViewChild('repeatingCheckBox') repeatingCheckBox: ElementRef;

  is_edit = false;
  AUTO_RENEWAL_REPORTS = 'AUTO_RENEWAL';
  optionSelected1: any;
  optionSelected: any;
  description1: any;
  notification1: any;
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  basicSetting4: DropdownWithDescriptionModel;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  user: any;
  statusType = 'All';
  data: any;
  dropDown: any;
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptions = {};
    self = this;
    this.initDropdown();

  }
  ngOnInit() {
    this.gridOptionsReports.onCellClicked = this.agCellClicked;

    this.gridOptionsReports.isExternalFilterPresent = this.isExternalFilterPresent,
      this.gridOptionsReports.doesExternalFilterPass = this.doesExternalFilterPass;
  }
  isExternalFilterPresent() {
    console.log('isExternalFilterPresent>self.statusType:', self.statusType);
    // if ageType is not everyone, then we are filtering
    return self.statusType !== 'All';
  }
  setFilterModel(value) {
    console.log('setFilterModel>value:', value);
    self.statusType = value;
    self.gridApi.onFilterChanged();
  }

  doesExternalFilterPass(node) {
    console.log('doesExternalFilterPass', node);
    switch (self.statusType) {
      case 'All': return true;
      case 'Selected': return node.selected === true;
      default: return false;
    }
  }



  setColumnDef(name: string): Array<ColDef> {
    if (name === this.AUTO_RENEWAL_REPORTS) {
      return columnDefsAutoRenewalReports;
    } else {
      return columnDefsAutoRenewalReports;
    }
  }
  ngAfterViewInit() {
    // this.OnSubmit(this.AUTO_RENEWAL_REPORTS);

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



    this.basicSetting4 = new DropdownWithDescriptionModel();
    this.basicSetting4.ListDisplayKeys = [{
      headerName: 'Queue',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    }];


    this.basicSetting4.descriptionKey = 'processType';
    this.basicSetting4.displayKey = 'process';
    this.basicSetting4.serviceUrl =
      ProcessUrls.TK_PROCESS_LISTING_URL;

    this.basicSetting4.valueTypeOrKey = 'process';



    this.basicSetting1 = new DropdownWithDescriptionModel();
    this.basicSetting1.ListDisplayKeys = [{
      headerName: 'Show',
      displayKey: 'key'
    }];
    this.basicSetting1.displayKey = 'key';
    this.basicSetting1.serviceUrl =
      ProcessUrls.TK_SHOW_DROPDOWN_URL;
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

  doOnSave(event) {
    console.log('AutoRenewalNotifyComponent>doOnSave>event', event);

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

  getServiceUrl(name): any {
    return ProcessUrls.TK_AUTO_RENEWAL_NOTIFY_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.AUTO_RENEWAL_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAutoRenewalReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.AUTO_RENEWAL_REPORTS);
    this.OnSubmit(this.AUTO_RENEWAL_REPORTS);
  }
  repeatingCheckBoxClick(val) {
    self.is_edit = self.repeatingCheckBox.nativeElement.checked;

  }

}
