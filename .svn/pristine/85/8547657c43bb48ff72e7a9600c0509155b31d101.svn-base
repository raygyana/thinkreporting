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
import { DiscountsModel } from './discounts.model';
import { Router } from '@angular/router';
import { ComponentResolver } from 'ag-grid/dist/lib/components/framework/componentResolver';
@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent extends BaseComponent implements OnInit, OnChanges {

  NAME_DISCOUNTS = 'DISCOUNTS';
  discountsModel: DiscountsModel;
  @Output() getdiscounts = new EventEmitter();
  @Input() localAmt: any;
  @Input() currency: any;

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
    if (this.localAmt === '' && this.currency === '') {

    } else {

      this.discountsModel.orderitemamount = this.localAmt;
      this.discountsModel.neworderitemamount = this.localAmt;
      this.discountsModel.fixedamountcurrency = this.currency;
      this.discountsModel.orderitemamountcurrency = this.currency;
      this.discountsModel.neworderitemamountcurrency = this.currency;
      this.discountsModel.fixedamount = 0;
      this.discountsModel.percentage = 0;


    }
  }
  getSearchModel(name: string) {
    if (name === this.NAME_DISCOUNTS) {
      return this.discountsModel;
    } else {
      return this.discountsModel;
    }
  }
  initSearchModels() {
    this.discountsModel = new DiscountsModel();
    console.log('orderModel', this.discountsModel);
    //  const model = ProjectUtils.getDynamicReports();
    // this.setValueFromSession(this.dynamicReportsModel, model);
  }

  applydiscount() {
    this.getdiscounts.emit(this.discountsModel);
  }

  calculatepercent() {

    this.discountsModel.percentage = (parseFloat(this.discountsModel.fixedamount) * 100) /
      parseFloat(this.discountsModel.orderitemamount);

    this.discountsModel.neworderitemamount = parseFloat(this.discountsModel.orderitemamount) - parseFloat(this.discountsModel.fixedamount);

  }
  calculatefixedAmount() {

    this.discountsModel.fixedamount =
      (parseFloat(this.discountsModel.orderitemamount) *
        parseFloat(this.discountsModel.percentage)) / 100;
    this.discountsModel.neworderitemamount = parseFloat(this.discountsModel.orderitemamount) - parseFloat(this.discountsModel.fixedamount);
  }


}
