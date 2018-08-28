import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { CustomModalPopUpService } from '../../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../../core/base/base.component';

import { GridAPII } from '../../../../../core/base/base.component';
import {
  DropdownWithDescriptionComponent, DropdownWithDescriptionModel,
  AlertMessageModel, AlertMessageService, AlertMessageComponent

} from '../../../../../component';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, ProjectUtils, SessionObject } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions, Utils } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { AddOrderModel } from './add-order.model';
import { columnDefsDocumentReference } from './add-order-data';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { delay } from 'q';
import { DatePipe } from '@angular/common';
import { DataService } from './../order-in-progress/order-data-service';
import { element } from 'protractor';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent extends BaseComponent implements OnInit {
  private datePipe: DatePipe = new DatePipe('en-US');
  NAME_ADD_ORDER = 'ADDORDER';
  addnewpopupSetting: any;
  addnewpopupSourceSetting: any;
  orderInProgSetting: any;
  duplicatepopupSetting: any;
  addorderModel: AddOrderModel;
  flgsource = true;
  flgselect = true;
  selectedrowdata: any;
  ordercodelookupparam: any;
  showTable: any;
  alertSetting: AlertMessageModel;
  // orderinprogressparam = {
  orderCodeId = 0; orderCodeType = 0; customerId = 0; sourceCodeId = 0; subscriptionId = 0; orderdate = '';
  // };

  duplicateoc: any;
  duplicatestartdate: any;
  subscrip_id: any = 0;
  currentdate: any;
  itmcount = 0;
  orderhdrId = 0;

  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private route: ActivatedRoute,
    protected dataService: DataService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
    this.createReseDataPopoup();

    this.route.queryParams.subscribe(params => {
      this.orderhdrId = params['orderhdrId'];
      this.orderdate = params['orderdate'];

    });

  }

  ShowAlert() {
    //  this.alertSetting = new AlertMessageModel(['succesFullAdded'], 4920, 'alert-success');
    // const component = new AlertMessageComponent(this.alert);
    // component.showMessage(this.alertSetting);
    this.router.navigate(['pages/customer/agency-details/order'], {
      queryParams: {
        'From': 'Add'
      }
    });
    // this.alert.show(['succesFullAdded']);
  }




  ngOnInit() {
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ADD_ORDER) {
      return this.addorderModel;
    } else {
      return this.addorderModel;
    }
  }
  initSearchModels() {
    this.addorderModel = new AddOrderModel();
    this.addorderModel.customerId.value = SessionObject.getCustomerID()['customerId'];
    console.log('orderModel', this.addorderModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }
  getSubscriptionDefDetails() {
    if (this.addorderModel.orderCodeId.value !== '' && this.addorderModel.sourceCodeId.value !== '') {
      this.showTable = true;
      this.OnSubmit(this.NAME_ADD_ORDER);
      this.addorderModel.subscriptionDefId.value = '';
      // this.flgselect = true;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ADD_ORDER) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ADD_ORDER) {
      return CustomerServicesUrls.TK_CUSTOMER_ADD_ORDER_SEARCH;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ADD_ORDER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ADD_ORDER);
  }


  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = this.getParamsBody(name);
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

  getSourceCodeList() {

    console.log('getSourceCodeList');
    this.customModalPopService.show(this.addnewpopupSourceSetting);
  }
  getOrderCodeList() {
    console.log('getOrderCodeList');
    this.ordercodelookupparam = this.addorderModel.customerId.value;
    this.customModalPopService.show(this.addnewpopupSetting);
  }

  createReseDataPopoup() {
    this.addnewpopupSetting = new CustomModalPopUpModel();
    this.addnewpopupSetting.id = 'AddNew';
    this.addnewpopupSetting.title = 'Order Code Lookup';
    this.addnewpopupSetting.noButtons = true;
    this.addnewpopupSetting.upperCross = true;

    this.addnewpopupSourceSetting = new CustomModalPopUpModel();
    this.addnewpopupSourceSetting.id = 'Sourcecode';
    this.addnewpopupSourceSetting.title = 'Source Code Lookup';
    this.addnewpopupSourceSetting.noButtons = true;
    this.addnewpopupSourceSetting.upperCross = true;

    this.orderInProgSetting = new CustomModalPopUpModel();
    this.orderInProgSetting.id = 'orderinprogress';
    this.orderInProgSetting.title = 'Order In Progress';
    this.orderInProgSetting.noButtons = true;
    this.orderInProgSetting.upperCross = true;

    // this.duplicatepopupSetting = new CustomModalPopUpModel();
    // this.duplicatepopupSetting.id = 'duplicatecheck';
    // this.duplicatepopupSetting.title = 'Duplicate Order';
    // this.duplicatepopupSetting.noButtons = true;
    // this.duplicatepopupSetting.upperCross = true;
    this.duplicatepopupSetting = new CustomModalPopUpModel('Duplicate Order', true, true, false);
  }




  getOrderCode(rowdata: any) {
    if (!!rowdata) {
      this.customModalPopService.hide(this.addnewpopupSetting);
      this.addorderModel.orderCodeId.value = rowdata.orderCodeId;
      this.addorderModel.orderCodeType.value = rowdata.orderCodeType;
      this.addorderModel.ocId.value = rowdata.ocID;
      this.addorderModel.ordercode.value = rowdata.orderCode; this.addorderModel.orderdesc.value = rowdata.description;
      this.addorderModel.sourcecode.value = '';
      this.addorderModel.sourcedesc.value = '';
      this.addorderModel.sourceCodeId.value = '';
      this.flgsource = false;
      this.flgselect = true;
      console.log(rowdata, this.addorderModel.ocId.value);
    }

  }

  getSourceCode(rowdata: any) {
    if (!!rowdata) {
      this.customModalPopService.hide(this.addnewpopupSourceSetting);
      this.addorderModel.sourcecode.value = rowdata.sourceCode;
      this.addorderModel.sourcedesc.value = rowdata.description;
      this.addorderModel.sourceCodeId.value = rowdata.sourceCodeId;
      console.log('getSourceCode', rowdata);
      if (this.addorderModel.orderCodeId.value !== '' && this.addorderModel.sourceCodeId.value !== '') {

        this.flgselect = false;

      }

    }

  }
  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;

    if (headerName.toLowerCase() === 'select' && event.event.target.className === 'custom-control-input') {
      // this.rowdata = event;
      console.log('rowdata', event);

      this.selectedrowdata = event['data'];

      this.addorderModel.subscriptionDefId.value = this.selectedrowdata.subscriptionDefId;


      const paramsBody = '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.addorderModel.customerId.value)
        + '&' + encodeURIComponent('ocId') + '=' + encodeURIComponent(this.addorderModel.ocId.value);

      const url = CustomerServicesUrls.TK_CHECK_DUPLICATE_ORDER;
      //  this.openDuplicatePopup();
      this.baseService.getDataFromAPI(url, paramsBody)
        .subscribe((data) => {

          if (data.Status === true) {

            this.duplicateoc = data['duplicateOrder'][0].oc;
            this.duplicatestartdate = data['duplicateOrder'][0].subscription_start_date;
            this.addorderModel.subscripId.value = data['duplicateOrder'][0].subscrip_id;
            this.openDuplicatePopup();
          } else {
            this.addorderModel.subscripId.value = 0;
            this.orderProgressDetails();
          }
        });

      // this.dataService.getdata().forEach(element => {

      //   if (element.customerId === this.addorderModel.customerId.value && element.ocId === this.addorderModel.ocId.value) {
      //     this.subscrip_id = -1;
      //     this.openDuplicatePopup();

      //   }
      // });



    }
  }

  openDuplicatePopup() {

    this.currentdate = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    console.log(this.currentdate);
    this.customModalPopService.show(this.duplicatepopupSetting);
  }

  yesOrderInpro() {
    this.customModalPopService.hide(this.duplicatepopupSetting);
    this.orderProgressDetails();
  }
  noOrderInpro() {
    this.addorderModel.subscripId.value = 0;
    this.customModalPopService.hide(this.duplicatepopupSetting);
    this.orderProgressDetails();
  }


  cancelOrderInpro() {
    this.addorderModel.subscripId.value = 0;
    this.customModalPopService.hide(this.duplicatepopupSetting);

  }






  orderProgressDetails() {

    console.log('orderProgressDetails..');
    this.orderCodeId = this.addorderModel.orderCodeId.value;
    this.orderCodeType = this.addorderModel.orderCodeType.value;
    this.customerId = this.addorderModel.customerId.value;
    this.sourceCodeId = this.addorderModel.sourceCodeId.value;
    this.subscriptionId = this.addorderModel.subscriptionDefId.value;
    this.subscrip_id = this.addorderModel.subscripId.value;
    // this.orderhdrId = this.addorderModel.orderhdrId.value;
    this.itmcount++;
    // console.log(this.orderinprogressparam);
    // this.customModalPopService.handleHide(this.orderInProgSetting);
    this.customModalPopService.show(this.orderInProgSetting);
    this.customModalPopService.onshow(this.orderInProgSetting);
    //this.customModalPopService.applyclass();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('newmodal-open');

  }

}
