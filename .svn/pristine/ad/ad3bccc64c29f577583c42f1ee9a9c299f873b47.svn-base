import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';
import { columnDefsProductReports } from './process.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


import { GridOptions } from 'ag-grid';

const salesByCatJSON = 'assets/json/process.json';
import { ProcessService } from './process.service';
import $ from 'jquery';
import { CustomModalPopUpService } from '../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from '../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { Router } from '@angular/router';
import { DeletePopComponent } from '../../../component/delete-pop/delete-pop.component';
import { ProcessSubmitJobComponent } from '../../../component/project-comp/process/process-submit-job/process-submit-job.component';





let self;
@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  providers: [ProcessService]
})
export class ProcessComponent extends BaseComponent implements OnInit {
  statusFilterComponent: any;
  @ViewChild(DeletePopComponent) private child: DeletePopComponent;
  @ViewChild(ProcessSubmitJobComponent) private submitJobPopup: ProcessSubmitJobComponent;
  statusType = 'All';
  rowselected = false;
  AlertType: any;
  rowSelection = 'single';
  emailNotibasicSetting: any;
  showBox: any = 'Default';
  activeFilter = true;
  massage: any;
  runPayProcessbasicSetting: any;
  inActiveFilter = true;
  PRODUCT_FULLFILLMENT_REPORTS = 'PRODUCT_FULLFILLMENT_REPORTS';

  PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT = 'PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT';
  constructor(
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    protected processService: ProcessService
  ) {


    super(processService, router);

    self = this;
    // this.gridOptions.onCellClicked = this.agCellClicked;

    this.gridOptions = {

      onCellClicked: this.agCellClicked,
      onSelectionChanged: this.onSelectionChanged

    };



  }
  onSelectionChanged() {
    self.rowselected = true;
    const selectedRows = self.gridApi.getSelectedRows();
    let selectedRowsString = '';
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        console.log('onSelectionChanged>selectedRow', selectedRow);
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.athlete;
      console.log('selectedRowsString', selectedRowsString);
    });

  }
  isExternalFilterPresent() {
    return self.statusType !== 'All';
  }

  doesExternalFilterPass(node) {
    switch (self.statusType) {
      case 'All': return true;
      case 'Active': return node.data.status === 'Active';
      case 'Inactive': return node.data.status === 'Inactive';

      default: return false;
    }
  }

  GetSeletedRow() {
    this.gridApi.forEachNode(function (node) {
      console.log('GetSlectedRow>node:', node);
    });
  }

  createReseDataPopoup() {
    this.emailNotibasicSetting = new CustomModalPopUpModel();
    this.emailNotibasicSetting.id = 'EmailNotificationSetupPop';
    this.emailNotibasicSetting.title = 'Email Notification Setup';
    this.emailNotibasicSetting.noButtons = true;
    this.emailNotibasicSetting.upperCross = true;

  }

  showNewProcessPopUp(emailNotibasicSetting) {
    this.customModalPopService.show(emailNotibasicSetting);
  }
  showSubmitJobPopUp() {
    this.submitJobPopup.openSubmitJobPopUp();
  }

  okClick() {
    this.customModalPopService.hide(this.emailNotibasicSetting);
  }

  setActiveFilterModel() {
    if (self.activeFilter === false) {
      self.activeFilter = true;
      self.statusType = 'Active';
    } else {
      self.activeFilter = false;
      self.statusType = '';
      if (self.inActiveFilter === true) {
        self.statusType = 'Inactive';
      }
    }
    this.doCommanStep();
  }

  setInActiveFilterModel() {
    if (this.inActiveFilter === false) {
      this.inActiveFilter = true;
      self.statusType = 'Inactive';
    } else {
      self.inActiveFilter = false;
      self.statusType = '';
      if (self.activeFilter === true) {
        self.statusType = 'Active';
      }
    }
    this.doCommanStep();

  }
  doCommanStep() {
    if (self.activeFilter && this.inActiveFilter) {
      self.statusType = 'All';
    }
    this.gridApi.onFilterChanged();
  }

  ngOnInit() {
    this.gridOptions.isExternalFilterPresent = this.isExternalFilterPresent,
      this.gridOptions.doesExternalFilterPass = this.doesExternalFilterPass;
    this.createReseDataPopoup();

  }

  agCellClicked = (event) => {
    console.log(event);
    if (event.event.target.innerText === 'Delete') {
      console.log('Delete clicked');
      this.child.openDeletePopUp(event.data.processType);
    }
    if (event.event.target.innerText === 'Submit Job') {
      this.navigetToComonent(event);
      let URL = this.navigetToComonent(event);
      URL = URL + '_submit';
      this.router.navigate([URL]);
    }
    if (event.event.target.innerText === 'Open') {
      console.log('open clicked');

      const URL = this.navigetToComonent(event);
      this.router.navigate([URL]);
    }
  }
  navigetToComonent(event) {
    this.router.navigate(['pages/auto-renewal_notify']);
    console.log('event.data.processType>', event.data.processType);
    let URL = event.data.processType + '';
    if (URL) {
      URL = URL.toLowerCase();
    }
    const replaceTo = ' ';
    URL = URL.replace(new RegExp(replaceTo, 'g'), '_');
    URL = 'pages/' + URL;
    return URL;
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PRODUCT_FULLFILLMENT_REPORTS) {
      return columnDefsProductReports
        ;
    } else {
      return columnDefsProductReports
        ;
    }
  }

  setRadioValue(evt) {
    console.log('setRadioValue>', evt.target.value);
    this.showBox = evt.target.value;
  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_PROCESS_LISTING_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PRODUCT_FULLFILLMENT_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  openPopup() {
    console.log('openPopup click');
  }

  doOnGridReadyProductReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PRODUCT_FULLFILLMENT_REPORTS);
   // this.OnSubmit(this.PRODUCT_FULLFILLMENT_REPORTS);
    document.getElementById('inactivecheck').click();
  }

}

