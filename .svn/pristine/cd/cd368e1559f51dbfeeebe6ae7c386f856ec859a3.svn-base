import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
// import { SourceCodeLookupModel } from './source-code-lookup.model';
import { columnDefsDocumentReference } from './address-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent extends BaseComponent implements OnInit, OnChanges {
  flage5 = true;
  flage6 = false;
  flage7 = false;

  @Input() inputCustomerId: any;
  @Input() orderCodeId: any;
  NAME_ADDRESS = 'ADDRESS';
  addnewpopupSetting: any;
  addnewpopupSourceSetting: any;
  selectedrowdata: any;
  @Output() getAddressClick = new EventEmitter();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('inputAddressListData', this.inputAddressListData);

    // this.bindDataToGrid(this.NAME_ADDRESS, this.inputAddressListData);

    // this.sourceCodeLookupModel.ocId.value = this.inputCustomerId;
    this.OnSubmit(this.NAME_ADDRESS);
  }
  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    if (headerName.toLowerCase() === 'select' && event.event.target.className === 'custom-control-input') {
      // this.rowdata = event;
      console.log('rowdata', event);

      this.selectedrowdata = event['data'];
      console.log('rowdata', this.selectedrowdata);

      this.getAddress();
    }

  }
  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ADDRESS);
    this.OnSubmit(this.NAME_ADDRESS);
  }
  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ADDRESS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ADDRESS) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.inputCustomerId.toString())
      + '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent(this.orderCodeId.toString());
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.customerAddress;
        console.log('AddressDetails', data);
        // this.xtBaseLoadDataFromApiProcessData(name, data);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(data);
        gridApi.totalRowCount = data.length;

        // gridApi.setRowData(data.data);  //from api
        this.autoSizeColumns(name);
      });
  }
  getServiceUrl(name): string {
    if (name === this.NAME_ADDRESS) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS;
    }
  }
  getAddress() {

    this.getAddressClick.emit(this.selectedrowdata);
  }


}
