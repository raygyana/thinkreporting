import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsPromotionReports } from './promotion.data';
import { columnDefsPromotionDefReports } from './promotion.data';
import { columnDefsOthersReports } from './promotion.data';
import { columnDefsEffortsReports } from './promotion.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';


const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent extends BaseComponent implements OnInit, AfterViewInit {

  PROMOTION_REPORTS = 'PROMOTION_REPORTS';
  PROMOTION_DEF_REPORT = 'PROMOTION_DEF_REPORT';
  OTHERS_REPORT = 'OTHERS_REPORT';
  EFFORTS_REPORT = 'EFFORTS_REPORT';

  gridOptions1: any;
  gridOptions2: any;
  gridApi1: any;
  columnApi1: any;
  gridApi2: any;
  columnApi2: any;
  gridApi3: any;
  columnApi3: any;
  description1: any;

  PROMOTION_DESCRIPTION_REPORT = 'PROMOTION_DESCRIPTION_REPORT';
  PROMOTION_OUTPUT_REPORT = 'PROMOTION_OUTPUT_REPORT';
  PROMOTION_REPORT = 'PROMOTION_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
    this.gridOptions = {};
    this.gridOptions1 = {};
    this.gridOptions2 = {};
  }

  ngOnInit() {
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PROMOTION_REPORTS) {
      return columnDefsPromotionReports;
    } else if (name === this.PROMOTION_DEF_REPORT) {
      return columnDefsPromotionDefReports;
    } else if (name === this.OTHERS_REPORT) {
      return columnDefsOthersReports;
    } else if (name === this.EFFORTS_REPORT) {
      return columnDefsEffortsReports;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    if (name === this.PROMOTION_REPORTS) {
      return ProcessUrls.TK_PROCESS_LISTING_URL;
    } else if (name === this.PROMOTION_DEF_REPORT) {
      return ProcessUrls.TK_PROMOTION_URL;
    } else if (name === this.OTHERS_REPORT) {
      return ProcessUrls.TK_PROMOTION_URL;
    } else if (name === this.EFFORTS_REPORT) {
      return ProcessUrls.TK_PROMOTION_URL;
    }
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PROMOTION_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else if (name === this.PROMOTION_DEF_REPORT) {
      return {
        gridApi: this.gridApi1,
        columnApi: this.columnApi1
      };
    } else if (name === this.OTHERS_REPORT) {
      return {
        gridApi: this.gridApi2,
        columnApi: this.columnApi2
      };
    } else if (name === this.EFFORTS_REPORT) {
      return {
        gridApi: this.gridApi3,
        columnApi: this.columnApi3
      };
    }

  }
  doOnSave(event) {

  }
  doOnGridReadyPromotionsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PROMOTION_REPORTS);
    this.OnSubmit(this.PROMOTION_REPORTS);
  }

  doOnGridReadyPromotionPaymentsReports(api) {
    this.gridApi1 = api.api;
    this.columnApi1 = api.columnApi;
    this.doOnGridReady(this.PROMOTION_DEF_REPORT);
    this.OnSubmit(this.PROMOTION_DEF_REPORT);
  }

  doOnGridReadyOthersReports(api) {
    this.gridApi2 = api.api;
    this.columnApi2 = api.columnApi;
    this.doOnGridReady(this.OTHERS_REPORT);
    this.OnSubmit(this.OTHERS_REPORT);
  }
  doOnGridReadyEffortsReports(api) {
    this.gridApi3 = api.api;
    this.columnApi3 = api.columnApi;
    this.doOnGridReady(this.EFFORTS_REPORT);
    this.OnSubmit(this.EFFORTS_REPORT);
  }

}
