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
import { OrderInProgressModel } from './order-in-progress.model';
import { columnDefsDocumentReference } from './order-in-progress-data';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Utils, SessionObject } from '../../../../../core/shared';
import { DataService } from './order-data-service';
import { element } from 'protractor';


@Component({
  selector: 'app-order-in-progress',
  templateUrl: './order-in-progress.component.html',
  styleUrls: ['./order-in-progress.component.css']
})
export class OrderInProgressComponent extends BaseComponent implements OnInit, AfterContentInit, OnChanges {

  chkItem: true;
  chkDel: true;
  chkTax: true;
  chkCom: true;

  NAME_ORDER_IN_PROGRESS = 'ORDERINPROGRESS';
  customExtraOption: any;
  addnewpopupSourceSetting: any;
  orderInProgressModel: OrderInProgressModel;
  selectedrowdata: any;
  taxRateAmount: any;
  baseamount: any = 0.00;
  currency: any;
  price: any;
  amountcharged: any;
  exchangerate: any;
  totalbaseAmt: any = 0;
  gridOptions: GridOptions = {};
  gridrowClick = false;
  @Output() public AddOrderClick = new EventEmitter();
  @Input() public orderCodeId = 0;
  @Input() public orderCodeType = 0;
  @Input() public customerId = 0;
  @Input() public sourceCodeId = 0;
  @Input() public subscriptionId = 0;
  @Input() public duplicatesubscripId = 0;
  @Input() public orderhdrId = 0;
  @Input() public orderdate = '';
  @Input() public itmcount = 0;

  resultData = [];

  strOrderCodeId = '';
  strSourceCodeId = '';
  strSubscriptionDef = '';
  strsbscriptId = '';

  // };
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    protected dataService: DataService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chkItem = true;
    this.chkDel = true;
    this.chkTax = true;
    this.chkCom = true;
    this.initSearchModels();
    if (this.orderCodeId == 0 && this.orderCodeType == 0 && this.customerId == 0 &&
      this.sourceCodeId == 0 && this.subscriptionId == 0 && this.itmcount == 0) {

    } else {

      this.orderInProgressModel.customerId.value = this.customerId;
      this.orderInProgressModel.orderCodeID.value = this.orderCodeId;
      this.orderInProgressModel.sourceCodeID.value = this.sourceCodeId;
      this.orderInProgressModel.subscriptionDefId.value = this.subscriptionId;
      this.orderInProgressModel.orderCodeType.value = this.orderCodeType;
      this.orderInProgressModel.subscripId.value = this.duplicatesubscripId;
      this.orderInProgressModel.docRefId.value = SessionObject.getRefID()['documentReferenceDialogue'];
      this.orderInProgressModel.orderhdrId.value = (this.orderhdrId != 0) ? this.orderhdrId : 'New Order';

      this.orderInProgressModel.orderdate.value = this.orderdate;


      this.OnSubmit(this.NAME_ORDER_IN_PROGRESS);
    }
  }

  ngOnInit() {
    this.xtBaseOnInit();
  }

  ngAfterContentInit() {

    //  this.OnSubmit(this.NAME_ORDER_IN_PROGRESS);

  }
  xtBaseOnInit() {
    this.customExtraOption = {
      showHeader: false,
      showFooter: false
    };
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ORDER_IN_PROGRESS) {
      return this.orderInProgressModel;
    } else {
      return this.orderInProgressModel;
    }
  }
  initSearchModels() {
    this.orderInProgressModel = new OrderInProgressModel();
    console.log('orderModel', this.orderInProgressModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ORDER_IN_PROGRESS) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ORDER_IN_PROGRESS) {
      return CustomerServicesUrls.TK_ORDER_IN_PROGRESS;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ORDER_IN_PROGRESS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ORDER_IN_PROGRESS);
  }

  loadDataFromApiNSetGrid(name: string) {

    if (this.gridrowClick === true) {
      this.gridrowClick = false;
      this.xtBaseLoadDataFromApiProcessData(name, this.resultData);
      const gridApi: any = this.getGridApi(name).gridApi;
      gridApi.setRowData(this.resultData);
      gridApi.totalRowCount = this.resultData.length;
      this.autoSizeColumns(name);
      return;
    }
    const paramsBody = '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent(this.orderCodeId.toString())
      + '&' + encodeURIComponent('orderCodeType') + '=' + encodeURIComponent(this.orderCodeType.toString())
      + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.customerId.toString())
      + '&' + encodeURIComponent('sourceCodeId') + '=' + encodeURIComponent(this.sourceCodeId.toString())
      + '&' + encodeURIComponent('subscriptionId') + '=' + encodeURIComponent(this.subscriptionId.toString());

    console.log('paramsBody', paramsBody);
    const url = this.getServiceUrl(name);
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {
        this.taxRateAmount = parseFloat(data.taxRateAmount).toFixed(2);
        data = data.subscriptionDefinitionsList;

        if (!Utils.isEmpty(data)) {
          // this.resultData = [];
          if (this.strOrderCodeId !== '') {
            this.strOrderCodeId = this.strOrderCodeId + ',' + this.orderCodeId;
          } else {
            this.strOrderCodeId = this.orderCodeId.toString();
          }
          if (this.strSourceCodeId !== '') {
            this.strSourceCodeId = this.strSourceCodeId + ',' + this.sourceCodeId;
          } else {
            this.strSourceCodeId = this.sourceCodeId.toString();
          }
          if (this.strSubscriptionDef !== '') {
            this.strSubscriptionDef = this.strSubscriptionDef + ',' + this.subscriptionId;
          } else {
            this.strSubscriptionDef = this.subscriptionId.toString();
          }
          if (this.strsbscriptId !== '') {
            this.strsbscriptId = this.strsbscriptId + ',' + this.duplicatesubscripId;
          } else {
            this.strsbscriptId = this.duplicatesubscripId.toString();
          }
          this.currency = data[0].ratecardModel.currency;
          this.exchangerate = parseFloat(data[0].ratecardModel.exchangeRate);
          this.price = parseFloat(data[0].ratecardModel.price).toFixed(2);
          this.amountcharged = (parseFloat(data[0].ratecardModel.price) +
            ((parseFloat(data[0].ratecardModel.price) * parseFloat(this.taxRateAmount)) / 100)).toFixed(2);

          if (Utils.isEmpty(this.amountcharged)) {
            data[0].amountcharged = '0';
            this.baseamount = 0.00;
          } else {
            data[0].amountcharged = this.amountcharged.toString();
            this.baseamount = (this.amountcharged * this.exchangerate).toFixed(2);
          }

          if (Utils.isEmpty(this.currency)) {
            data[0].currency = '';
          } else {
            data[0].currency = this.currency.toString();
          }
        }

        //  this.totalbaseAmt = (parseFloat(this.totalbaseAmt) + parseFloat(this.baseamount)).toFixed(2);
        data[0].baseamount = this.baseamount;
        data[0].price = this.price;
        data[0].exchangerate = this.exchangerate;
        data[0].taxRateAmount = this.taxRateAmount;

        this.baseamount = 0;
        this.price = 0;
        this.exchangerate = 0;
        this.taxRateAmount = 0;
        this.totalbaseAmt = 0;

        console.log(data);

        this.resultData.push(data[0]);

        let i = 0;
        this.resultData.forEach(element => {
          i++;
          this.totalbaseAmt = (parseFloat(this.totalbaseAmt) + parseFloat(element.baseamount)).toFixed(2);
          element.rowseq = i;
        });

        // this.dataService.setData(this.resultData);

        // this.resultData.rowseq=this.resultData.length;

        this.xtBaseLoadDataFromApiProcessData(name, this.resultData);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(this.resultData);
        gridApi.totalRowCount = this.resultData.length;
        this.autoSizeColumns(name);
      });




  }

  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;



    if (headerName.toLowerCase() === 'remove' && event.event.target.className === 'fa fa-remove') {
      this.chkItem = true;
      this.chkDel = true;
      this.chkTax = true;
      this.chkCom = true;
      this.totalbaseAmt = 0.00;
      let arrdata: any = [];
      this.selectedrowdata = event['data'];
      this.resultData.forEach(element => {

        if (element.rowseq !== this.selectedrowdata.rowseq) {
          this.totalbaseAmt = (parseFloat(this.totalbaseAmt) + parseFloat(element.baseamount)).toFixed(2);
          arrdata.push(element);
        }

      });

      console.log('this.selectedrowdata ', this.selectedrowdata);
      this.resultData = arrdata;

      this.gridrowClick = true;
      this.OnSubmit(this.NAME_ORDER_IN_PROGRESS);

    }


  }


  itemCheck(event: any) {
    console.log('chkItem', event);
    this.totalbaseAmt = 0.00;
    this.resultData.forEach(element => {



      if (event === true) {

        if (this.chkTax === true) {
          // this.baseamount = this.amountcharged;
          this.baseamount = (parseFloat(element.amountcharged) * parseFloat(element.exchangerate)).toFixed(2);
        } else {

          this.baseamount = (parseFloat(element.price) * parseFloat(element.exchangerate)).toFixed(2);
        }

      } else {
        if (this.chkTax === true) {

          //  this.baseamount = (this.amountcharged - this.price).toFixed(2);
          this.baseamount = ((parseFloat(element.amountcharged) - parseFloat(element.price)) * parseFloat(element.exchangerate)).toFixed(2);

        } else {
          this.baseamount = 0.00;
        }


      }
      this.totalbaseAmt = (parseFloat(this.totalbaseAmt) + parseFloat(this.baseamount)).toFixed(2);
      this.baseamount = 0.00;
    });

  }

  taxCheck(event: any) {
    console.log('chkTax', event);
    this.totalbaseAmt = 0.00;

    this.resultData.forEach(element => {

      if (event === true) {
        if (this.chkItem === true) {
          // this.baseamount = this.amountcharged;
          this.baseamount = (parseFloat(element.amountcharged) * parseFloat
            (element.exchangerate)).toFixed(2);
        } else {
          //  this.baseamount = (this.amountcharged - this.price).toFixed(2);
          this.baseamount = ((parseFloat(element.amountcharged) - parseFloat(element.price) * parseFloat(element.exchangerate))).toFixed(2);

        }

      } else {
        if (this.chkItem === true) {

          //  this.baseamount = this.price;
          this.baseamount = (parseFloat(element.price) * parseFloat(element.exchangerate)).toFixed(2);

        } else {
          this.baseamount = 0.00;
        }
      }
      this.totalbaseAmt = (parseFloat(this.totalbaseAmt) + parseFloat(this.baseamount)).toFixed(2);
      this.baseamount = 0.00;
    });
  }
  delCheck(event: any) {
    console.log('chkDel', event);
  }
  comCheck(event: any) {
    console.log('chkCom', event);
  }

  orderSave() {
    // const paramsBody = this.getParamsBody(this.NAME_ORDER_IN_PROGRESS);




    // this.resultData.forEach(element => {
    //   strOrderCodeId = element.orderCodeId + strOrderCodeId;
    //   strSourceCodeId=element.
    // });


    const paramsBody = '&' + encodeURIComponent('itemCount') + '=' + encodeURIComponent(this.resultData.length.toString())
      + '&' + encodeURIComponent('poNumber') + '=' + encodeURIComponent(this.orderInProgressModel.poNumber.value.toString())
      + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.customerId.toString())
      + '&' + encodeURIComponent('subscripId') + '=' + encodeURIComponent(this.strsbscriptId.toString())
      + '&' + encodeURIComponent('docRefId') + '=' + encodeURIComponent(this.orderInProgressModel.docRefId.value.toString())
      + '&' + encodeURIComponent('orderCodeID') + '=' + encodeURIComponent(this.strOrderCodeId.toString())
      + '&' + encodeURIComponent('sourceCodeID') + '=' + encodeURIComponent(this.strSourceCodeId.toString())
      + '&' + encodeURIComponent('subscriptionDefId') + '=' + encodeURIComponent(this.strSubscriptionDef.toString())
      + '&' + encodeURIComponent('orderhdrId') + '=' + encodeURIComponent(
        (this.orderInProgressModel.orderhdrId.value === 'New Order') ? '' : this.orderInProgressModel.orderhdrId.value);

    const url = CustomerServicesUrls.TK_SAVE_ORDER;
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        console.log('save Order ....', data);

        this.AddOrderClick.emit(data);
      });

  }

  addItm() { }


}
