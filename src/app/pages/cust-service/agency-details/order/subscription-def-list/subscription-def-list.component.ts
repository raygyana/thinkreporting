import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, ProjectUtils } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { columnDefsDocumentReference } from './subscription-def-list-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Utils } from '../../../../../core/shared';
@Component({
  selector: 'app-subscription-def-list',
  templateUrl: './subscription-def-list.component.html',
  styleUrls: ['./subscription-def-list.component.css']
})
export class SubscriptionDefListComponent extends BaseComponent implements OnInit, AfterContentInit, OnChanges {

  NAME_SUBS_DEF_LIST = 'SUBSDEFLIST';

  selectedrowdata: any;

  @Output() public getsubsdefCodeClick = new EventEmitter();
  @Input() public orderCodeId: any;
  @Input() public orderCodeType: any;
  @Input() public customerId: any;
  // };
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnChanges(changes: SimpleChanges) {

    if ((this.orderCodeId === '' && this.orderCodeType === '') || (this.orderCodeId === undefined && this.orderCodeType === undefined)) {

    } else {


      this.OnSubmit(this.NAME_SUBS_DEF_LIST);
    }
  }

  ngOnInit() {
  }

  ngAfterContentInit() {

    //  this.OnSubmit(this.NAME_ORDER_IN_PROGRESS);

  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_SUBS_DEF_LIST) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SUBS_DEF_LIST) {
      return CustomerServicesUrls.TK_CUSTOMER_ADD_ORDER_SEARCH;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_SUBS_DEF_LIST) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_SUBS_DEF_LIST);
  }

  loadDataFromApiNSetGrid(name: string) {
    const paramsBody = '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent(this.orderCodeId)
      + '&' + encodeURIComponent('orderCodeType') + '=' + encodeURIComponent(this.orderCodeType)
      + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.customerId);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.subscriptionDefinitionList;

        this.xtBaseLoadDataFromApiProcessData(name, data);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(data);
        if (data === undefined) {
          gridApi.totalRowCount = 0;

        } else {
          gridApi.totalRowCount = data.length;
        }
        // gridApi.setRowData(data.data);  //from api
        this.autoSizeColumns(name);
      });
  }

  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    if (headerName.toLowerCase() === 'select' && event.event.target.className === 'custom-control-input') {
      // this.rowdata = event;
      console.log('rowdata', event);

      this.selectedrowdata = event['data'];
      console.log('rowdata', this.selectedrowdata);

      this.getSubsDef();
    }
  }
  getSubsDef() {
    this.getsubsdefCodeClick.emit(this.selectedrowdata);
  }



}
