import { Component, OnInit } from '@angular/core';
import { AddAuxiliaryFieldsModel } from './add-auxiliary-fields.model';
import { Router } from '@angular/router';
import { CustomerServicesUrls, Utils, SessionObject } from '../../../../../core/shared';
import { BaseComponent, BaseService, ModelPopUpBase } from '../../../../../core/base/index';
import { DropdownDataModel } from '../../../../../component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-auxiliary-fields',
  templateUrl: './add-auxiliary-fields.component.html',
  styleUrls: ['./add-auxiliary-fields.component.css']
})
export class AddAuxiliaryFieldsComponent extends ModelPopUpBase implements OnInit {

  CUSTOMER_ADD_AUXILIARY = 'CUSTOMER_ADD_AUXILIARY';
  CUSTOMER_ADD_AUXILIARY_SUBMIT = 'CUSTOMER_ADD_AUXILIARY_SUBMIT';

  auxiliaryModel: AddAuxiliaryFieldsModel;
  zzauxCreditCurrencyData: DropdownDataModel;
  zzauxCreditTermsData: DropdownDataModel;
  zzauxCreditTerms: DropdownDataModel;
  zzauxIsBadDebtorData: DropdownDataModel;
  zzaux_credit_currency: DropdownDataModel;
  constructor(

    protected baseService: BaseService,
    protected router: Router,
  ) {
    super(baseService, router);

    this.auxiliaryModel = new AddAuxiliaryFieldsModel();

  }

  reInit(data) {
  }

  getSearchModel(name: string) {
    if (name === this.CUSTOMER_ADD_AUXILIARY) {
      return this.auxiliaryModel;
    }
    return this.auxiliaryModel;
  }

  ngOnInit() {
    // this.OnSubmit(this.CUSTOMER_ADD_AUXILIARY);
  }

  getServiceUrl(name): string {
    if (name === this.CUSTOMER_ADD_AUXILIARY) {
      return CustomerServicesUrls.TK_CUSTOMER_AXUILIARY_ADD_DATA;
    } else if (name === this.CUSTOMER_ADD_AUXILIARY_SUBMIT) {
      return CustomerServicesUrls.TK_CUSTOMER_AXUILIARY_ADD_SUBMIT;
    }
  }
  doOnSubmit(e) {
    this.OnSubmit(this.CUSTOMER_ADD_AUXILIARY_SUBMIT);
  }

  getNonSearchModelParams(name: string) {
    const customer = SessionObject.getCustomerID();
    if (name !== this.CUSTOMER_ADD_AUXILIARY) {
      const obj = {
        customerId: customer.customerId || customer
      };
      return obj;
    } else if (name === this.CUSTOMER_ADD_AUXILIARY) {
      const refid = SessionObject.getRefID();
      const submit = {
        customerId: customer.customerId || customer,
        type: 'permanent',
        userCode: refid.userCode,
        documentReferenceId: refid.documentReferenceDialogue
      };
      return submit;
    }
  }


  xtBaseLoadDataFromApiProcessData(name, data) {

    if (name === this.CUSTOMER_ADD_AUXILIARY) {
      this.xtBaseLoadDataTastComplete(data);
    } else if (name === this.CUSTOMER_ADD_AUXILIARY_SUBMIT) {

    }
    console.log('AddAuxiliaryFieldsComponent>data', data);
  }


  xtBaseLoadDataTastComplete(data: any) {

    this.zzauxCreditCurrencyData = new DropdownDataModel(data.auxiliaryformfeild[0].values);
    // this.zzauxCreditTermsData = new DropdownDataModel(data.auxiliaryformfeild[1].values);
    // this.zzauxCreditTerms = new DropdownDataModel(data.auxiliaryformfeild[2].values);
    // Utils.searchModel.assignValueFromApi(this.auxiliaryModel, data.auxiliaryformfeild);
  }

  creditStatusChange(a) {

  }

  getForm(name: string): FormGroup {
    if ((name === this.CUSTOMER_ADD_AUXILIARY) || (name === this.CUSTOMER_ADD_AUXILIARY_SUBMIT)) {
      return this.baseForm;
    }
  }

}
