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
import { PaymentThresholdHandlingModel } from './payment-threshold-handling.model';
// import { columnDefsDocumentReference } from './order-in-progress-data';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
import { Subject } from 'rxjs';
import { Utils } from '../../../../../core/shared';
import { utils } from 'protractor';

@Component({
  selector: 'app-payment-threshold-handling',
  templateUrl: './payment-threshold-handling.component.html',
  styleUrls: ['./payment-threshold-handling.component.css']
})
export class PaymentThresholdHandlingComponent extends BaseComponent implements OnInit {
  paymentThresholdHandlingModel: PaymentThresholdHandlingModel;
  @Input() customerId: any;
  @Input() orderId: any;

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private route: ActivatedRoute
  ) {
    super(baseService, router);


    // this.gridOptions.onCellClicked = this.agCellClicked;
  }
  initSearchModels() {
    this.paymentThresholdHandlingModel = new PaymentThresholdHandlingModel();
    console.log('paymentThresholdHandlingModel', this.paymentThresholdHandlingModel);
  }

  applyPaymentThresold() {
    console.log('applyPaymentThresold');

  }
  ngOnInit() {

    // this.bindPartialPaymentData();
  }

  // bindPartialPaymentData() {

  //   const paramsBody = '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(this.customerId.toString())
  //     + '&' + encodeURIComponent('orderId') + '=' + encodeURIComponent(this.orderId.toString());
  //   const url = CustomerServicesUrls.TK_PARTIAL_PAYMENT;
  //   console.log('url', url);

  //   this.baseService.getDataFromAPI(url, paramsBody)
  //     .subscribe((data) => {
  //       console.log('paymentdata', data);

  //       Utils.searchModel.assignValueFromApi(this.paymentThresholdHandlingModel, data);
  //     });


  // }

}
