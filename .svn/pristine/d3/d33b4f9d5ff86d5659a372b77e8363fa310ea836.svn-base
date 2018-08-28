

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsBillingDescriptionReports } from './sort.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent extends BaseComponent implements OnInit {

  OUTPUT_REPORTS = 'OUTPUT_REPORTS';
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };

  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
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

  setColumnDef(name: string): Array<ColDef> {
    return columnDefsBillingDescriptionReports;
  }

  doOnSave(event) {
    console.log('AutoRenewalNotifyComponent>doOnSave>event', event);

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_ORDER_CLASS_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.OUTPUT_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyOutputReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.OUTPUT_REPORTS);
    this.OnSubmit(this.OUTPUT_REPORTS);
  }

}
