import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsRenewalDescReports } from './renewal.data';
import { columnDefsRenewalDefinitionReports } from './renewal.data';
import { columnDefsRenewalOrderClassReports } from './renewal.data';
import { columnDefsRenewalEffortsReports } from './renewal.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';
let self;
const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})
export class RenewalComponent extends BaseComponent implements OnInit {

  @ViewChild('abcde') abcde: ElementRef;

  @ViewChild('repeatCheckBox') repeatingCheckbox: ElementRef;
  shown: boolean;
  dropDown: any;
  is_edit: false;
  checked: boolean;
  notification1: any;
  is_edit1: boolean;
  description: any;
  RENEWAL_DESCRIPTION_REPORT = 'RENEWAL_DESCRIPTION_REPORT';
  RENEWAL_OUTPUT_REPORT = 'RENEWAL_OUTPUT_REPORT';
  RENEWAL_REPORT = 'RENEWAL_REPORT';

  RENEWAL_DESCRIPTION_REPORTS = 'RENEWAL_DESCRIPTION_REPORTS';
  RENEWAL_DEFINITION_REPORTS = 'RENEWAL_DEFINITION_REPORTS';
  RENEWAL_ORDER_CLASS_REPORTS = 'RENEWAL_ORDER_CLASS_REPORTS';
  RENEWAL_EFFORTS_REPORTS = 'RENEWAL_EFFORTS_REPORTS';
  statusType: 'All';
  statusType1: 'All';
  gridApi1: any;

  // dropDown: any;
  description1: any;
  columnApi1: any;
  gridApi2: any;
  columnApi2: any;
  gridApi3: any;
  columnApi3: any;
  basicSetting: DropdownWithDescriptionModel;
  basicSetting1: DropdownWithDescriptionModel;
  basicSetting2: DropdownWithDescriptionModel;
  basicSetting3: DropdownWithDescriptionModel;
  basicSetting4: DropdownWithDescriptionModel;
  basicSetting5: DropdownWithDescriptionModel;
  basicSetting6: DropdownWithDescriptionModel;
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };
  gridOptionsReports1: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };


  constructor(baseService: BaseService,
    protected router: Router
  ) {
    super(baseService, router);
    this.initDropdown();
    self = this;
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.RENEWAL_DESCRIPTION_REPORTS) {
      return columnDefsRenewalDescReports;
    } else if (name === this.RENEWAL_DEFINITION_REPORTS) {
      return columnDefsRenewalDefinitionReports;
    } else if (name === this.RENEWAL_ORDER_CLASS_REPORTS) {
      return columnDefsRenewalOrderClassReports;
    } else if (name === this.RENEWAL_EFFORTS_REPORTS) {
      return columnDefsRenewalEffortsReports;
    }
  }
  doOnSave(event) {

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
      headerName: 'Order Class',
      displayKey: 'key'
    }];
    this.basicSetting1.displayKey = 'key';
    this.basicSetting1.serviceUrl = ProcessUrls.TK_ORDER_CLASS_DROPDOWN1_URL;
    this.basicSetting1.valueTypeOrKey = 'key';

    this.basicSetting2 = new DropdownWithDescriptionModel();
    this.basicSetting2.ListDisplayKeys = [{
      headerName: 'Show',
      displayKey: 'key'
    }];
    this.basicSetting2.displayKey = 'key';
    this.basicSetting2.serviceUrl = ProcessUrls.TK_SHOW_DROPDOWN_URL;
    this.basicSetting2.valueTypeOrKey = 'key';

    this.basicSetting3 = new DropdownWithDescriptionModel();
    this.basicSetting3.ListDisplayKeys = [{
      headerName: 'Renewal Card',
      displayKey: 'process'
    }, {
      headerName: 'Description',
      displayKey: 'processType'
    },
    {
      headerName: 'Order Class',
      displayKey: 'description'
    }];
    this.basicSetting3.displayKey = 'key';
    this.basicSetting3.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting3.valueTypeOrKey = 'key';


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


  isExternalFilterPresent1() {
    console.log('isExternalFilterPresent1>self.statusType1:', self.statusType1);
    // if ageType is not everyone, then we are filtering
    return self.statusType1 !== 'All';
  }
  doesExternalFilterPass(node) {
    console.log('doesExternalFilterPass', node);
    switch (self.statusType) {
      case 'All': return true;
      case 'Selected': return node.selected === true;
      default: return false;
    }
  }

  doesExternalFilterPass1(node) {
    console.log('doesExternalFilterPass', node);
    switch (self.statusType1) {
      case 'All': return true;
      case 'Selected': return node.selected === true;
      default: return false;
    }
  }

  ngOnInit() {

    this.gridOptionsReports.isExternalFilterPresent = this.isExternalFilterPresent,
      this.gridOptionsReports.doesExternalFilterPass = this.doesExternalFilterPass;

    this.gridOptionsReports1.isExternalFilterPresent = this.isExternalFilterPresent1,
      this.gridOptionsReports1.doesExternalFilterPass = this.doesExternalFilterPass1;
  }

  Checked(value) {

    this.checked = this.abcde.nativeElement.checked;
    if (this.checked === true) {
      this.is_edit1 = true;
    } else {
      this.is_edit1 = false;
    }
    console.log('checked', this.checked);

  }



  setFilterModel(value) {
    self.statusType = value;
    self.gridApi.onFilterChanged();
  }
  setFilterModel1(value) {
    self.statusType1 = value;
    self.gridApi2.onFilterChanged();
  }




  getServiceUrl(name): any {
    if (name === this.RENEWAL_DESCRIPTION_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.RENEWAL_ORDER_CLASS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    } else if (name === this.RENEWAL_DEFINITION_REPORTS) {
      return ProcessUrls.TK_RENEWAL_DEF_URL;
    } else if (name === this.RENEWAL_EFFORTS_REPORTS) {
      return ProcessUrls.TK_ORDER_CLASS_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.RENEWAL_DESCRIPTION_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.RENEWAL_DEFINITION_REPORTS) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else if (name === this.RENEWAL_ORDER_CLASS_REPORTS) {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    } else if (name === this.RENEWAL_EFFORTS_REPORTS) {
      return {
        gridApi: this.gridApi3,
        columnApi: this.columnApi3
      };
    }
  }

  doOnGridReadyRenewalDescriptionReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.RENEWAL_DESCRIPTION_REPORTS);
    this.OnSubmit(this.RENEWAL_DESCRIPTION_REPORTS);
  }

  doOnGridReadyRenewalDefinitionReports(api) {
    self.gridApi1 = api.api;
    self.columnApi1 = api.columnApi;
    self.doOnGridReady(self.RENEWAL_DEFINITION_REPORTS);
    self.OnSubmit(self.RENEWAL_DEFINITION_REPORTS);
  }

  doOnGridReadyRenewalOrderClassReports(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.RENEWAL_ORDER_CLASS_REPORTS);
    this.OnSubmit(this.RENEWAL_ORDER_CLASS_REPORTS);
  }

  doOnGridReadyRenewalEffortsReports(api) {
    this.gridApi3 = api.api;
    this.columnApi3 = api.columnApi;
    this.doOnGridReady(this.RENEWAL_EFFORTS_REPORTS);
    this.OnSubmit(this.RENEWAL_EFFORTS_REPORTS);
  }
  repeatCheckBoxClick(value) {
    self.is_edit = self.repeatingCheckbox.nativeElement.checked;

  }


}
