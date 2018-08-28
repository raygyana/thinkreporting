import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessUrls } from '../../../core/shared';
import { columnDefsProductReports } from './review-job-history.data';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';
import { GridAPII } from '../../../core/base/base.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseComponent } from '../../../core/base/index';
import { DeletePopComponent } from '../../../component/delete-pop/delete-pop.component';
import { ReviewJobHistoryService } from './review-job-history.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
let self;
@Component({
  selector: 'app-review-job-history',
  templateUrl: './review-job-history.component.html',
  styleUrls: ['./review-job-history.component.css'],
  providers: [ReviewJobHistoryService]
})
export class ReviewJobHistoryComponent extends BaseComponent implements OnInit {
  @ViewChild(DeletePopComponent) protected childComp: DeletePopComponent;

  processIdList: any;
  PROCESS_ID = 'process id 100';
  gridApi: any;
  columnApi: any;
  gridOptions: any;
  constructor(protected reviewJobHistoryService: ReviewJobHistoryService,
    protected router: Router
  ) {
    super(reviewJobHistoryService, router);
    self = this;
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnInit() {
    this.loadProcessListFromApi();

  }
  agCellClicked(evt) {
    console.log(evt);
    if (evt.event.target.innerText === 'Delete') {
      console.log('Delete clicked');
      self.childComp.openDeletePopUp(evt.data.processType);
      // this.child.openDeletePopUp(evt.data.processType);
    }
  }


  setColumnDef(name: string): Array<ColDef> {
    if (name === this.PROCESS_ID) {
      return columnDefsProductReports;
    } else {
      return columnDefsProductReports;
    }
  }

  processIdChange(value) {
    console.log('processIdChange', value);
    this.PROCESS_ID = value;
   // this.OnSubmit(this.PROCESS_ID);
  }

  getServiceUrl(name): any {
    return ProcessUrls.TK_HISTORY_JOB_DATA_URL;
  }
  getGridApi(name: string): GridAPII {
    if (name === this.PROCESS_ID) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    } else {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyWorkTable(api) {
    console.log('doOnGridReadyJobLog(api):-', api);
    this.gridApi = api.api;
    this.columnApi = api.columnApi;

    this.doOnGridReady(this.PROCESS_ID);
   // this.OnSubmit(this.PROCESS_ID);
  }
  loadProcessListFromApi() {

    this.reviewJobHistoryService.loadJson(ProcessUrls.TK_REVIEW_JOB_HISTORY_PROCESS_ID_LIST)
      .subscribe(data => {
        console.log('<ReviewJobHistoryComponent>loadProcessListFromApi>data', data);
        this.processIdList = data;



      });
  }

}
