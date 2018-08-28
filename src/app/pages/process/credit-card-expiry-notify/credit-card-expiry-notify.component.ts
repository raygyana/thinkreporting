import { Component, OnInit } from '@angular/core';
import { DropdownWithDescriptionModel } from '../../../component/dropdown-with-description';
import { ProcessUrls } from '../../../core/shared';

@Component({
  selector: 'app-vredit-card-expiry-notify',
  templateUrl: './credit-card-expiry-notify.component.html',
  styleUrls: ['./credit-card-expiry-notify.component.css']
})
export class CreditCardExpiryNotifyComponent implements OnInit {
  dropDown: any;
  description1: any;
  CARD_EXPIRY_DESCRIPTION_REPORT = 'CARD_EXPIRY_DESCRIPTION_REPORT';
  CARD_EXPIRY_OUTPUT_REPORT = 'CARD_EXPIRY_OUTPUT_REPORT';
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
