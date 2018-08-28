import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, Input, } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel, RadioButtonComponent } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
// import { SourceCodeLookupModel } from './source-code-lookup.model';
import { columnDefsDocumentReference } from './customer-search-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';



@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent extends BaseComponent implements OnInit {
  flage5 = true;
  flage6 = false;
  flage7 = false;
  Customersearch: any;

  context: any;
  frameworkComponents: any;


  NAME_CUSTOMER_SEARCH = 'CUSTOMERSEARCH';

  selectedrowdata: any;
  @Output() getCustomerClick = new EventEmitter();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.context = { componentParent: this };
    this.frameworkComponents = {
      RadioButtonComponent: RadioButtonComponent
    };

  }



  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('inputCustomerListData', this.inputCustomerListData);
  //   // this.sourceCodeLookupModel.ocId.value = this.inputCustomerListData;
  //   // this.OnSubmit(this.NAME_SOURCE_CODE_LOOKUP);
  //   this.bindDataToGrid(this.NAME_CUSTOMER_SEARCH, this.inputCustomerListData);
  // }


  getServiceUrl(name): string {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return CustomerServicesUrls.TK_CUSTOMER_LIST;
    }
  }
  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.CustomerDetails;
        console.log('CustomerDetails', data);
        // this.xtBaseLoadDataFromApiProcessData(name, data);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(data);
        gridApi.totalRowCount = data.length;

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

      this.getCustomerBillToAddress();
    }

  }
  doOnGridReadyDocRef(api) {

    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CUSTOMER_SEARCH);
    this.OnSubmit(this.NAME_CUSTOMER_SEARCH);
  }
  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CUSTOMER_SEARCH) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }
  setColumnDef(name: string): Array<ColDef> {


    if (name === this.NAME_CUSTOMER_SEARCH) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getCustomerBillToAddress() {

    this.getCustomerClick.emit(this.selectedrowdata);
  }

}
