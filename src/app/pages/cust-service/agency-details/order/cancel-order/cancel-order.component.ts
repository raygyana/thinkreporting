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
import { columnDefsDocumentReference } from './cancel-order-data';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Utils, SessionObject } from '../../../../../core/shared';
import { element } from 'protractor';
import { CancelOrderModel } from './cancel-order.model';
@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent extends BaseComponent implements OnInit {

  NAME_CANCEL_ORDER = 'CANCELORDER';
  gridOptions: GridOptions = {};
  customExtraOption: any;
  cancelOrderModel: CancelOrderModel;
  orderHdrId: any;
  orderItemSeq: any;
  orderDetail: any;
  reasonList: any;
  cancelRenewalList: any;
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private route: ActivatedRoute
  ) {
    super(baseService, router);

    this.route.queryParams.subscribe(params => {

      this.orderHdrId = params['orderhdrId'];
      this.orderItemSeq = params['orderItemSeq'];
    });



    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  ngOnInit() {
    this.xtBaseOnInit();
    this.OnSubmit(this.NAME_CANCEL_ORDER);
  }

  agCellClicked = (event) => {


  }

  xtBaseOnInit() {
    this.customExtraOption = {
      showHeader: false,
      showFooter: false
    };
  }
  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_CANCEL_ORDER);
  }

  getSearchModel(name: string) {
    if (name === this.NAME_CANCEL_ORDER) {
      return this.cancelOrderModel;
    } else {
      return this.cancelOrderModel;
    }
  }
  initSearchModels() {
    this.cancelOrderModel = new CancelOrderModel();
    this.cancelOrderModel.customerId.value = SessionObject.getCustomerID()['customerId'];
    console.log('orderModel', this.cancelOrderModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_CANCEL_ORDER) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_CANCEL_ORDER) {
      return CustomerServicesUrls.TK_CUSTOMER_CANCEL_ORDER_DATA;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_CANCEL_ORDER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  loadDataFromApiNSetGrid(name: string) {

    const paramsBody = '&' + encodeURIComponent('orderHdrId') + '=' + encodeURIComponent(this.orderHdrId.toString())

      + '&' + encodeURIComponent('orderItemSeq') + '=' + encodeURIComponent(this.orderItemSeq.toString());

    const url = CustomerServicesUrls.TK_CUSTOMER_CANCEL_ORDER_DATA;

    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {


        if (!Utils.isEmpty(data)) {
          this.orderDetail = data.cancelOrderAttributeModel.orderDetail;
          this.reasonList = data.cancelOrderAttributeModel.reasonList;
          this.cancelRenewalList = data.cancelOrderAttributeModel.cancellationRenewalStatusList;
        }
        console.log('  this.orderDetail ', this.orderDetail);
        this.xtBaseLoadDataFromApiProcessData(name, this.orderDetail);
        const gridApi: any = this.getGridApi(name).gridApi;
        gridApi.setRowData(this.orderDetail);
        if (data === undefined) {
          gridApi.totalRowCount = 0;
        } else {
          gridApi.totalRowCount = this.orderDetail.length;
        }
        // gridApi.setRowData(data.data);  //from api
        this.autoSizeColumns(name);
      });
  }

  orderCancel() {


  }

  OnReasonChange(event) {

  }
  cancelClick() {

  }


}

