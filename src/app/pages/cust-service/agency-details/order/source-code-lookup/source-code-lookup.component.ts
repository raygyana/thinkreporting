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
import { SourceCodeLookupModel } from './source-code-lookup.model';
import { columnDefsDocumentReference } from './source-code-lookup-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';

@Component({
  selector: 'app-source-code-lookup',
  templateUrl: './source-code-lookup.component.html',
  styleUrls: ['./source-code-lookup.component.css']
})
export class SourceCodeLookupComponent extends BaseComponent implements OnInit, AfterContentInit, OnChanges {
  flage5 = true;
  flage6 = false;
  flage7 = false;

  @Input() ocId: any;
  NAME_SOURCE_CODE_LOOKUP = 'ORDERCODELOOKUP';
  addnewpopupSetting: any;
  addnewpopupSourceSetting: any;
  sourceCodeLookupModel: SourceCodeLookupModel;
  selectedrowdata: any;

  @Output() getSourceCodeClick = new EventEmitter();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      console.log(curVal);
      console.log(prevVal);


    }
    this.sourceCodeLookupModel.ocId.value = this.ocId;
    this.OnSubmit(this.NAME_SOURCE_CODE_LOOKUP);
  }


  ngOnInit() {
  }
  ngAfterContentInit() {

    // this.sourceCodeLookupModel.ocId.value = this.ocId;

    // this.OnSubmit(this.NAME_SOURCE_CODE_LOOKUP);

  }

  getSearchModel(name: string) {
    if (name === this.NAME_SOURCE_CODE_LOOKUP) {
      return this.sourceCodeLookupModel;
    } else {
      return this.sourceCodeLookupModel;
    }
  }
  initSearchModels() {
    this.sourceCodeLookupModel = new SourceCodeLookupModel();
    console.log('orderModel', this.sourceCodeLookupModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_SOURCE_CODE_LOOKUP) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_SOURCE_CODE_LOOKUP) {
      return CustomerServicesUrls.TK_SOURCE_CODE_LOOKUP_SEARCH;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_SOURCE_CODE_LOOKUP) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_SOURCE_CODE_LOOKUP);
  }


  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.sourceCodeList;

        this.xtBaseLoadDataFromApiProcessData(name, data);
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

      this.getSourceCodeClick.emit(this.selectedrowdata);
    }

  }

  getSourceCode() {


    this.getSourceCodeClick.emit(this.selectedrowdata);

  }


}
