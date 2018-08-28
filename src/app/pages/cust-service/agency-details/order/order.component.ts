import { Component, OnInit, AfterViewInit, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { CustomModalPopUpService } from '../../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../../core/base/base.component';

import { GridAPII } from '../../../../core/base/base.component';
import {
  DropdownWithDescriptionComponent, DropdownWithDescriptionModel, DropdownDataModel,
  AlertMessageModel, AlertMessageService, AlertMessageComponent, AgDropdownComponent
} from '../../../../component';
import { BaseService } from '../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, SessionObject, Utils } from '../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { OrderModel } from './order.model';
import { columnDefsDocumentReference } from './order-data';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseComponent implements OnInit, AfterContentInit {

  // context: any;
  //frameworkComponents: any;

  NAME_ORDER = 'ORDER';
  From: any;
  orderModel: OrderModel;
  // @Output() public addorderclick = new EventEmitter();
  // page: any;
  selectedrowdata: any;
  orderCodeId = 0; orderItemType = 0; customerId = 0; orderhdrId = 0; ocID = 0; subscripId = 0; orderItemSeq = 0; orderdate = '';
  viewdropdowndata: any;
  renewpopupSetting: any;
  item: any;

  // action = [{
  //   'process': '1.QATS-Backlabel',
  //   'processType': 'Backlabel',
  //   'status': 'Active'
  // },
  // {
  //   'process': '1.QATS-Backlabel',
  //   'processType': 'Backlabel',
  //   'status': 'Active'
  // }];


  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    protected alert: AlertMessageService,
    private route: ActivatedRoute
  ) {
    super(baseService, router);
    // this.page = 'order';
    //this.GRIDPAGESIZE = 10;
    this.gridOptions.onCellClicked = this.agCellClicked;

    this.route.queryParams.subscribe(params => {
      this.From = params['From'];
    });
    if (!Utils.isEmpty(this.From)) {
      this.alert.show(['Order save successfully']);
    }
    this.renewpopupSetting = new CustomModalPopUpModel('Alert!..', true, true, false);

    // this.context = { componentParent: this };
    //  this.frameworkComponents = {
    //   AgDropdownComponent: AgDropdownComponent
    // };

  }

  ngOnInit() {
    //  
    this.binddropdownapi();
    this.OnSubmit(this.NAME_ORDER);
  }

  binddropdownapi() {
    const paramsBody = '';
    const url = CustomerServicesUrls.TK_ORDER_DROPDOWN;
    this.baseService.getDataFromAPI(url, paramsBody)
      .subscribe((data) => {

        this.viewdropdowndata = new DropdownDataModel(data.viewOrderType);
      });
  }

  ngAfterContentInit() {

    //   this.OnSubmit(this.NAME_ORDER);

  }


  getSearchModel(name: string) {
    if (name === this.NAME_ORDER) {
      return this.orderModel;
    } else {
      return this.orderModel;
    }
  }
  initSearchModels() {
    this.orderModel = new OrderModel();
    this.orderModel.customerId.value = SessionObject.getCustomerID()['customerId'];
    this.orderModel.orderType.value = '-1';
    this.orderModel.inActive.value = 0;
    this.orderModel.paid.value = 0;
    this.orderModel.controlled.value = 0;
    this.orderModel.complimentary.value = 0;
    console.log('orderModel', this.orderModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }
  onClick() {

    console.log('dropdown');
    this.OnSubmit(this.NAME_ORDER);
  }

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ORDER) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ORDER) {
      return CustomerServicesUrls.TK_CUSTOMER_ORDER;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ORDER) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };

    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ORDER);
  }




  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {

    if (name === this.NAME_ORDER) {

      // data['customerOrderList'].forEach(element => {
      //   element.action = {
      //     data: this.action,
      //     basicSetting: {
      //       ListDisplayKeys: [{
      //         headerName: 'Process',
      //         displayKey: 'process'
      //       }, {
      //         headerName: 'Process Type',
      //         displayKey: 'processType'
      //       }, {
      //         headerName: 'Status',
      //         displayKey: 'status'
      //       }],
      //       descriptionKey: 'processType',
      //       displayKey: 'process',
      //       valueTypeOrKey: 'process'
      //     }
      //   };
      // });



      Utils.date.convertArrayKeytoDate(data['customerOrderList'], 'date');
      Utils.date.convertArrayKeytoDate(data['customerOrderList'], 'startDate');
      Utils.date.convertArrayKeytoDate(data['customerOrderList'], 'expireDate');
    }

  }

  // xtBaseLoadDataFromApiProcessData(data) {
  //   // console.log(data['customerOrderList']);

  //   // if (!Array.isArray(data)) {
  //   data = data.customerOrderList;
  //   console.log(data);
  //   // }


  //   //data = data['customerOrderList'];
  // }

  // OpenMakePayment() {
  //   this.page = 'makePayment';
  // }
  agCellClicked = (event) => {


    console.log(event);

    const headerName: string = event.colDef.headerName;
    this.selectedrowdata = event['data'];
    console.log('selectedrowdata', this.selectedrowdata, 'headerName', headerName);

    if (headerName.toLowerCase() === 'action' && event.event.target.text !== undefined) {

      if (event.event.target.text.trim() === 'Edit') {

        console.log('selectedrowdata', this.selectedrowdata);

        this.orderCodeId = this.selectedrowdata.orderCodeId;
        this.orderItemType = this.selectedrowdata.orderItemType;
        this.customerId = this.orderModel.customerId.value;
        this.orderhdrId = this.selectedrowdata.orderId;
        this.ocID = this.selectedrowdata.ocId;
        this.orderItemSeq = this.selectedrowdata.line;
        //this.page = 'editorder';
        this.router.navigate(['pages/customer/agency-details/order/edit-order'], {
          queryParams: {
            'orderCodeId': this.orderCodeId, 'orderhdrId': this.orderhdrId,
            'orderItemType': this.orderItemType, 'customerId': this.customerId, 'ocID':
              this.ocID, 'isrenewd': 0, 'subscripId': 0, 'orderItemSeq': this.orderItemSeq
          }
        });
      } else if (event.event.target.text.trim() === 'Renew') {
        const paramsBody = '&' + encodeURIComponent('subscripId') + '=' + encodeURIComponent(this.selectedrowdata.subscripId);

        const url = CustomerServicesUrls.TK_CHECK_RENEW_ORDER;
        //  this.openDuplicatePopup();
        this.baseService.getDataFromAPI(url, paramsBody)
          .subscribe((data) => {
            // debugger
            console.log('TK_CHECK_RENEW_ORDER', data);


            this.orderCodeId = data.renewalOrder[0].order_code_id;
            this.orderItemType = data.renewalOrder[0].order_item_type;
            this.customerId = data.renewalOrder[0].customer_id;
            this.orderhdrId = data.renewalOrder[0].orderhdr_id;
            this.ocID = this.selectedrowdata.ocId;
            this.subscripId = this.selectedrowdata.subscripId;
            this.orderItemSeq = this.selectedrowdata.line;
            this.item = 1;
            if (data.renewalOrder[0].payment_status === 0 ||
              data.renewalOrder[0].payment_status === 5) {
              this.openRenewalPopup();
            } else {
              this.router.navigate(['pages/customer/agency-details/order/edit-order'], {
                queryParams: {
                  'orderCodeId': this.orderCodeId, 'orderhdrId': this.orderhdrId,
                  'orderItemType': this.orderItemType, 'customerId': this.customerId, 'ocID': this.ocID, 'isrenewd': 1,
                  'subscripId': this.subscripId, 'orderItemSeq': this.orderItemSeq
                }
              });
            }

          });

      } else if (event.event.target.text === 'Add To Order') {

        this.orderhdrId = this.selectedrowdata.orderId;
        this.orderdate = this.selectedrowdata.date;
        this.router.navigate(['pages/customer/agency-details/order/add-order'], {
          queryParams: {
            'orderhdrId': this.orderhdrId,
            'orderdate': this.orderdate
          }
        });

      } else if (event.event.target.text === 'Payments') {
        this.orderhdrId = this.selectedrowdata.orderId;
        this.orderdate = this.selectedrowdata.date;
        this.router.navigate(['pages/customer/agency-details/payments-report/make-payment'], {
          queryParams: {
            'orderhdrId': this.orderhdrId,
            'line': this.selectedrowdata.line,
            'page': 'makePayment'
          }
        });

      } else if (event.event.target.text === 'Cancel Order') {
        this.orderhdrId = this.selectedrowdata.orderId;
        this.orderdate = this.selectedrowdata.date;
        this.router.navigate(['pages/customer/agency-details/order/cancel-order'], {
          queryParams: {
            'orderhdrId': this.orderhdrId,
            'orderItemSeq': this.selectedrowdata.line,
            'page': 'Cancel Order'
          }
        });

      }


    }



  }

  openRenewalPopup() {

    this.customModalPopService.show(this.renewpopupSetting);
  }
  yesOrderRenew() {

    this.router.navigate(['pages/customer/agency-details/order/edit-order'], {
      queryParams: {
        'orderCodeId': this.orderCodeId, 'orderhdrId': this.orderhdrId,
        'orderItemType': this.orderItemType, 'customerId': this.customerId, 'ocID': this.ocID, 'isrenewd': 1,
        'subscripId': this.subscripId, 'orderItemSeq': this.orderItemSeq
      }
    });


    this.customModalPopService.hide(this.renewpopupSetting);
  }
  noOrderRenew() {
    this.orderCodeId = 0;
    this.orderItemType = 0;
    this.customerId = 0;
    this.orderhdrId = 0;
    this.ocID = 0;
    this.customModalPopService.hide(this.renewpopupSetting);
  }

  addNewOrder() {
    // this.page = 'addorder';
    this.router.navigate(['pages/customer/agency-details/order/add-order'], {
      queryParams: {
        'orderhdrId': 0,
        'orderdate': this.orderdate
      }
    });
    // this.addorderclick.emit(this.orderModel.customerId.value);

  }
  goToOrder() {
    // this.page = 'order';
    if (this.orderModel.inActive.value) {
      this.orderModel.inActive.value = 1;
    } else {
      this.orderModel.inActive.value = 0;
    }
    if (this.orderModel.paid.value) {
      this.orderModel.paid.value = 1;
    } else {
      this.orderModel.paid.value = 0;
    }
    if (this.orderModel.controlled.value) {
      this.orderModel.controlled.value = 1;
    } else {
      this.orderModel.controlled.value = 0;
    }
    if (this.orderModel.complimentary.value) {
      this.orderModel.complimentary.value = 1;
    } else {
      this.orderModel.complimentary.value = 0;
    }

    this.OnSubmit(this.NAME_ORDER);
  }
  // changesearchcriteria(eventdata: any) {

  //   this.OnSubmit(this.NAME_ORDER);

  // }


}
