import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CustomModalPopUpService } from '../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../core/base/base.component';
import { Router } from '@angular/router';

import { GridAPII } from '../../../core/base/base.component';


import { BaseService } from '../../../core/base/base.service';
import { ProcessUrls } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';

import { columnDefsCounterReports } from './data';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-job-queue',
  templateUrl: './job-queue.component.html',
  styleUrls: ['./job-queue.component.css']
})
export class JobQueueComponent extends BaseComponent implements OnInit, AfterViewInit {
  AlertType: any;
  restDatebasicSetting: any;
  chooseJobQueuebasicSetting: any;
  NAME_JOB_QUEUE = 'COUNTER_REPORTS';

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions = {};
  }

  ngOnInit() {
    this.createChoseJobQueuePopoup();
    this.createReseDataPopoup();
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_JOB_QUEUE) {
      return columnDefsCounterReports;
    } else {
      return columnDefsCounterReports;
    }
  }


  ngAfterViewInit() {

  }
  getServiceUrl(name): any {
    return ProcessUrls.TK_PROCESS_LISTING_URL;
  }

  createReseDataPopoup() {
    this.restDatebasicSetting = new CustomModalPopUpModel();
    this.restDatebasicSetting.id = 'ResetDates';
    this.restDatebasicSetting.title = 'Reset Dates';
    this.restDatebasicSetting.noButtons = true;
    this.restDatebasicSetting.upperCross = false;
  }


  createChoseJobQueuePopoup() {
    this.chooseJobQueuebasicSetting = new CustomModalPopUpModel();
    this.chooseJobQueuebasicSetting.id = 'ChoseJobQueue';
    this.chooseJobQueuebasicSetting.title = 'Choose Job Queue(s)';
    this.chooseJobQueuebasicSetting.noButtons = true;
    this.chooseJobQueuebasicSetting.upperCross = false;
  }

  showResetDatePopUp() {
    this.customModalPopService.show(this.restDatebasicSetting);
  }

  showJobQueueChoosePopUp() {
    this.customModalPopService.show(this.chooseJobQueuebasicSetting);

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_JOB_QUEUE) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }


  doOnGridReadyCounterReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_JOB_QUEUE);
    this.OnSubmit(this.NAME_JOB_QUEUE);
  }


}
