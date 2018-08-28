import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsProductReports } from './product-fullfillment.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';


const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-product-fullfillment',
  templateUrl: './product-fullfillment.component.html',
  styleUrls: ['./product-fullfillment.component.css']
})
export class ProductFullfillmentComponent extends BaseComponent implements OnInit, AfterViewInit {
  description1: any;
  PRODUCT_FULLFILLMENT_REPORTS = 'PRODUCT_FULLFILLMENT_REPORTS';

  PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT = 'PRODUCT_FULLFILLMENT_DESCRIPTION_REPORT';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
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
  ngAfterViewInit() {

  }
  doOnSave(event) {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PRODUCT_FULLFILLMENT_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyProductReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.PRODUCT_FULLFILLMENT_REPORTS);
    this.OnSubmit(this.PRODUCT_FULLFILLMENT_REPORTS);
  }
}
