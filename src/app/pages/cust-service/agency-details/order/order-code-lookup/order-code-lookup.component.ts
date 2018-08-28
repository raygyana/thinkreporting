import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import { DropdownWithDescriptionComponent, DropdownWithDescriptionModel, DropdownDataModel } from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { OrderCodeLookupModel } from './order-code-lookup.model';
import { columnDefsDocumentReference } from './order-code-lookup-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Subject } from 'rxjs';
import { $ } from 'protractor';
import { AgRadioVerticalComponent } from '../../../../../component/ag-component/ag-radio/ag-radio.component';
import { AgRadioService } from '../../../../../component/ag-component/ag-radio/ag-radio.service';

@Component({
  selector: 'app-order-code-lookup',
  templateUrl: './order-code-lookup.component.html',
  styleUrls: ['./order-code-lookup.component.css']
})
export class OrderCodeLookupComponent extends BaseComponent implements OnInit, AfterContentInit {

  flage1 = true;
  flage2 = false;
  flage3 = false;
  flage4 = false;
  orderCodeSearchby: any;
  NAME_ORDER_CODE_LOOKUP = 'ORDERCODELOOKUP';
  addnewpopupSetting: any;
  addnewpopupSourceSetting: any;
  orderCodeLookupModel: OrderCodeLookupModel;
  selectedrowdata: any;
  orderClassdata: any;
  orderCodetypeData: any;
  orderTermdata: any;
  orderCodeSearchbyDorpdownData: any;
  showTable: any;
  orderCodeSearchbyDorpdown = [{ key: 'option1', value: 'Order Code' },
  { key: 'option2', value: 'Subscr.Attributes' },
  { key: 'option3', value: 'Product Attributes' },
  { key: 'option4', value: 'Address Lookup' }];


  context: any;
  frameworkComponents: any;

  ddOptionsorderClass: DropdownWithDescriptionModel;
  orderClassBasicSetting: DropdownWithDescriptionModel;

  ddOptionsorderCodetypeData: DropdownWithDescriptionModel;
  orderCodetypeDataBasicSetting: DropdownWithDescriptionModel;

  ddOptionsorderTermdata: DropdownWithDescriptionModel;
  orderTermdataBasicSetting: DropdownWithDescriptionModel;

  @Output() public getOrderCodeClick = new EventEmitter();
  @Input() public inputorderlookup: any;

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private agRadioSer: AgRadioService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.orderCodeSearchby = 'option1';
    this.orderCodeSearchbyDorpdownData = new DropdownDataModel(this.orderCodeSearchbyDorpdown);

    this.context = { componentParent: this };
    this.frameworkComponents = {
      AgRadioVerticalComponent: AgRadioVerticalComponent
    };

  }


  ngOnInit() {

    this.binddropdownapi();
  }
  getOrderCodeSearch() {
    this.showTable = true;
    this.OnSubmit(this.NAME_ORDER_CODE_LOOKUP);

  }

  binddropdownapi() {
    const paramsBody = '';
    const url = CustomerServicesUrls.TK_ORDER_CODE_LOOKUP_DROPDOWN;
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        this.orderClassdata = new DropdownDataModel(data.orderClass);
        this.orderCodetypeData = new DropdownDataModel(data.orderCodetype);
        this.orderTermdata = new DropdownDataModel(data.orderTerm);
      });
    console.log('this.orderClassdata', this.orderClassdata, 'this.orderCodetypeData', this.orderCodetypeData);

  }

  ngAfterContentInit() {

    // this.OnSubmit(this.NAME_ORDER_CODE_LOOKUP);

  }

  changesearchcriteria(eventdata: any) {

    console.log('eventdata', eventdata, this.orderCodeSearchby);

    if (this.orderCodeSearchby === 'option1') {
      this.flage1 = true;
      this.flage2 = false;
      this.flage3 = false;
      this.flage4 = false;
    } else if (this.orderCodeSearchby === 'option2') {
      this.flage1 = false;
      this.flage2 = true;
      this.flage3 = false;
      this.flage4 = false;
    } else if (this.orderCodeSearchby === 'option3') {
      this.flage1 = false;
      this.flage2 = false;
      this.flage3 = true;
      this.flage4 = false;
    } else if (this.orderCodeSearchby === 'option4') {
      this.flage1 = false;
      this.flage2 = false;
      this.flage3 = false;
      this.flage4 = true;
    }

    console.log('this.orderCodeLookupModel.orderClass.value', this.orderCodeLookupModel.orderClass.value);

  }


  getSearchModel(name: string) {
    if (name === this.NAME_ORDER_CODE_LOOKUP) {
      return this.orderCodeLookupModel;
    } else {
      return this.orderCodeLookupModel;
    }
  }
  initSearchModels() {
    this.orderCodeLookupModel = new OrderCodeLookupModel();
    console.log('orderModel', this.orderCodeLookupModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ORDER_CODE_LOOKUP) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ORDER_CODE_LOOKUP) {
      return CustomerServicesUrls.TK_ORDER_CODE_LOOKUP_SEARCH;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ORDER_CODE_LOOKUP) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ORDER_CODE_LOOKUP);
  }


  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = this.getParamsBody(name);
    const url = this.getServiceUrl(name);

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        data = data.orderCodeList;
        this.agRadioSer.genrateAgRaioConfigVertical(data, [{ field: 'orderCode' }]);
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

    if (headerName.toLowerCase() === 'select') {
      // this.rowdata = event;
      console.log('rowdata', event);

      this.selectedrowdata = event['data'];

      this.getOrderCodeClick.emit(this.selectedrowdata);


    }

  }


  getOrderCode() {

    this.getOrderCodeClick.emit(this.selectedrowdata);


  }
  reset() {
    this.orderCodeLookupModel.orderCodeType.value = '';
    this.orderCodeLookupModel.orderClass.value = '';
    this.orderCodeLookupModel.orderCode.value = '';
    this.orderCodeLookupModel.discription.value = '';
    this.orderCodeLookupModel.ID.value = '';
    this.orderCodeLookupModel.productColor.value = '';
    this.orderCodeLookupModel.productStyle.value = '';
    this.orderCodeLookupModel.productSize.value = '';
    this.orderCodeLookupModel.edition.value = '';
    this.orderCodeLookupModel.media.value = '';
    this.orderCodeLookupModel.term.value = '';
  }

}
