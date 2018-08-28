import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsOutputReports } from './output.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { Router } from '@angular/router';

const salesByCatJSON = 'assets/json/process.json';
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent extends BaseComponent implements OnInit {

  OUTPUT_REPORTS = 'OUTPUT_REPORTS';
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };

  constructor(baseService: BaseService,
    router: Router

  ) {
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
    return columnDefsOutputReports;
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
