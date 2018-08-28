import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { BaseService } from '../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsOnOffReports } from './on-off.data';
import { ProcessUrls } from '../../../core/shared';
import { GridAPII } from '../../../core/base/base.component';
import { TabsComponent } from '../../../component/ng-tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.css']
})
export class OnOffComponent extends BaseComponent implements OnInit, AfterViewInit {

  ON_OFF_REPORTS = 'ON_OFF_REPORTS';
  constructor(protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.ON_OFF_REPORTS) {
      return columnDefsOnOffReports
        ;
    } else {
      return columnDefsOnOffReports
        ;
    }
  }
  ngAfterViewInit() {

  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_PROCESS_LISTING_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.ON_OFF_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyOnOffReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.ON_OFF_REPORTS);
    this.OnSubmit(this.ON_OFF_REPORTS);
  }

}
