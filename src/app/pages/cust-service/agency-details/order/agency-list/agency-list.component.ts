import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, Input, } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { AgencyListModel } from './agency-list.model';
import { columnDefsDocumentReference } from './agency-list-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';

@Component({

  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent extends BaseComponent implements OnInit {


  NAME_AGENCY_LIST = 'AGENCYLIST';
  agencyListModel: AgencyListModel;
  selectedrowdata: any;
  @Output() getAgencyClick = new EventEmitter();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;


  }

  getSearchModel(name: string) {
    if (name === this.NAME_AGENCY_LIST) {
      return this.agencyListModel;
    } else {
      return this.agencyListModel;
    }
  }
  initSearchModels() {
    this.agencyListModel = new AgencyListModel();
    console.log('orderModel', this.agencyListModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('inputCustomerListData', this.inputCustomerListData);
  //   // this.sourceCodeLookupModel.ocId.value = this.inputCustomerListData;
  //   // this.OnSubmit(this.NAME_SOURCE_CODE_LOOKUP);
  //   this.bindDataToGrid(this.NAME_CUSTOMER_SEARCH, this.inputCustomerListData);
  // }
  getServiceUrl(name): string {
    if (name === this.NAME_AGENCY_LIST) {
      return CustomerServicesUrls.TK_AGENCY_LIST;
    }
  }
  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.agencyList;
        console.log('agencyList', data);
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
      this.getAgency();

    }







  }
  doOnGridReadyDocRef(api) {

    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_AGENCY_LIST);
    this.OnSubmit(this.NAME_AGENCY_LIST);
  }
  getGridApi(name: string): GridAPII {
    if (name === this.NAME_AGENCY_LIST) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }
  setColumnDef(name: string): Array<ColDef> {


    if (name === this.NAME_AGENCY_LIST) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getAgency() {
    this.getAgencyClick.emit(this.selectedrowdata);
  }

  getAgencySearch() {

    this.OnSubmit(this.NAME_AGENCY_LIST);
  }

}
