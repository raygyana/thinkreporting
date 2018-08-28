import { Component, OnInit } from '@angular/core';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';

import { ProcessUrls } from '../../../core/shared';
@Component({
  selector: 'app-credit-card-token-refresh',
  templateUrl: './credit-card-token-refresh.component.html',
  styleUrls: ['./credit-card-token-refresh.component.css']
})
export class CreditCardTokenRefreshComponent implements OnInit {
  description1: any;
  dropDown: any;
  CARD_REFRESH_DESCRIPTION_REPORT = 'CARD_REFRESH_DESCRIPTION_REPORT';
  CARD_REFRESH_OUTPUT_REPORT = 'CARD_REFRESH_OUTPUT_REPORT';
  basicSetting: DropdownWithDescriptionModel;
  constructor() { }

  ngOnInit() {
    this.initDropdown();
  }

  initDropdown() {

    this.basicSetting = new DropdownWithDescriptionModel();
    this.basicSetting.ListDisplayKeys = [{
      headerName: 'Process',
      displayKey: 'process'
    }, {
      headerName: 'Process Type',
      displayKey: 'processType'
    }];
    this.basicSetting.descriptionKey = 'processType';
    this.basicSetting.displayKey = 'process';
    this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
    this.basicSetting.valueTypeOrKey = 'process';
  }
  doOnSave(evt) { }

}
