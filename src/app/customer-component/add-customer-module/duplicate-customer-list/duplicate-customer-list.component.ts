import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridAPII } from '../../../core/base/base.component';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsDuplicateCustomer } from './duplicate-customer-list.data';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { BaseComponent, BaseService } from '../../../core/base/index';
@Component({
  selector: 'app-duplicate-customer-list',
  templateUrl: './duplicate-customer-list.component.html',
  styleUrls: ['./duplicate-customer-list.component.css']
})
export class DuplicateCustomerListComponent extends BaseComponent implements OnInit {
  gridOptions: any;
  gridApi: any;
  selectedrowdata: any;
  rowSelected = true;
  @Input() rowData = new Subject<any>();


  @Output() popUpClose: EventEmitter<any> = new EventEmitter();
  columnApi: any;
  NAME_DUPLICATE_CUSTOMER = 'NAME_DUPLICATE_CUSTOMER';
  constructor(
    protected baseService: BaseService,
    protected router: Router
  ) {
    super(baseService, router);
    this.gridOptions = {
      onCellClicked: this.agCellClicked
    };
  }


  agCellClicked = (event) => {
    this.rowSelected = false;
    console.log(event);
    const headerName: string = event.colDef.headerName;
    this.selectedrowdata = event['data'];
    console.log('data', this.selectedrowdata);
  }

  ngOnInit() {
    this.rowSelected = true;
    this.rowData.subscribe((data) => {
      this.gridApi.setRowData(data);
    });
  }
  addNewCustomer() {
    const obj = {
      id: this.selectedrowdata.customer_id,
      exitingSelected: false
    };
    this.sendPopupRespose(obj);
  }
  useExiting() {

    const obj = {
      id: this.selectedrowdata.customer_id,
      exitingSelected: true
    };
    this.sendPopupRespose(obj);

  }
  sendPopupRespose(obj) {
    this.popUpClose.emit(obj);
  }



  setColumnDef(name: string): Array<ColDef> {
    console.log('DocumentReferenceListComponent>setColumnDef');
    if (name === this.NAME_DUPLICATE_CUSTOMER) {
      return columnDefsDuplicateCustomer;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_DUPLICATE_CUSTOMER) {
      return '';
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_DUPLICATE_CUSTOMER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_DUPLICATE_CUSTOMER);
    // this.gridApi.setRowData(data.documentReferenceList);

  }

}
