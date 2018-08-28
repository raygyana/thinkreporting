import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsCleanUpReports } from './cleanup.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleanup',
  templateUrl: './cleanup.component.html',
  styleUrls: ['./cleanup.component.css']
})
export class CleanupComponent extends BaseComponent implements OnInit, AfterViewInit {
  description1: any;
  CLEAN_UP_REPORTS = 'CLEAN_UP_REPORTS';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.CLEAN_UP_REPORTS) {
      return columnDefsCleanUpReports
        ;
    } else {
      return columnDefsCleanUpReports
        ;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.CLEAN_UP_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }
  doOnSave(event) {

  }

  doOnGridReadyCleanUpReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.CLEAN_UP_REPORTS);
    this.OnSubmit(this.CLEAN_UP_REPORTS);
  }


}
