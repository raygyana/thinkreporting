import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsExtractListReports } from './list-extract.data';
import { columnDefsRentalCategoryReports } from './list-extract.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-list-extract',
  templateUrl: './list-extract.component.html',
  styleUrls: ['./list-extract.component.css']
})
export class ListExtractComponent extends BaseComponent implements OnInit, AfterViewInit {

  gridApi1: any;
  columnApi1: any;
  gridOptions1: any;
  EXTRACT_LIST_REPORTS = 'EXTRACT_LIST_REPORTS';
  RENTAL_CATEGORY_REPORT = 'RENTAL_CATEGORY_REPORT';

  LIST_EXTRACT_DESCRIPTION = 'LIST_EXTRACT_DESCRIPTION';
  LIST_EXTRACT_OUTPUT = 'LIST_EXTRACT_OUTPUT';
  LIST_EXTRACT_LIST = 'LIST_EXTRACT_LIST';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.EXTRACT_LIST_REPORTS) {
      return columnDefsExtractListReports;
    } else {
      return columnDefsRentalCategoryReports;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    // if (name === this.EXTRACT_LIST_REPORTS) {
    // return ProcessUrls.TABLE_DEMO;
    // } else if (name === this.RENTAL_CATEGORY_REPORT) {
    return ProcessUrls.TK_PROCESS_LISTING_URL;
    //   }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.EXTRACT_LIST_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.RENTAL_CATEGORY_REPORT) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    }

  }
  doOnGridReadyExtractListReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.EXTRACT_LIST_REPORTS);
    this.OnSubmit(this.EXTRACT_LIST_REPORTS);
  }

  doOnGridReadyRentalCategoryReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.RENTAL_CATEGORY_REPORT);
    this.OnSubmit(this.RENTAL_CATEGORY_REPORT);
  }
}
