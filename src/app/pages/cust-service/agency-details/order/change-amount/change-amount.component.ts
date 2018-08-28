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
import { ChangeAmountModel } from './change-amount.model';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';

@Component({
  selector: 'app-change-amount',
  templateUrl: './change-amount.component.html',
  styleUrls: ['./change-amount.component.css']
})
export class ChangeAmountComponent extends BaseComponent implements OnInit, OnChanges {

  NAME_CHANGE_AMOUNT = 'CHANGEAMOUNT';
  changeAmountModel: ChangeAmountModel;
  @Input() orderitemprice: any;
  @Input() deliverycharge: any;
  @Output() getchangeamount = new EventEmitter();
  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
  }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    this.initSearchModels();
    if (this.orderitemprice === '' && this.deliverycharge === '') {

    } else {

      this.changeAmountModel.orderitemprice = this.orderitemprice;
      this.changeAmountModel.deliverycharge = this.deliverycharge;

    }
  }




  getSearchModel(name: string) {
    if (name === this.NAME_CHANGE_AMOUNT) {
      return this.changeAmountModel;
    } else {
      return this.changeAmountModel;
    }
  }
  initSearchModels() {
    this.changeAmountModel = new ChangeAmountModel();
    console.log('orderModel', this.changeAmountModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  changeorderamount() {
    this.getchangeamount.emit(this.changeAmountModel);
  }



}
