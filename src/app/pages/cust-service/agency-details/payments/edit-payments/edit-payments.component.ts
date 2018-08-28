import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent, BaseService, GridAPII } from '../../../../../core/base';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownWithDescriptionModel, AlertMessageService } from '../../../../../component';
import { ProcessUrls, CustomerServicesUrls, Utils, SessionObject, ProjectUtils } from '../../../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { EditPaymentModel } from './edit-payments.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-payments',
  templateUrl: './edit-payments.component.html',
  styleUrls: ['./edit-payments.component.css']
})
export class EditPaymentsComponent extends BaseComponent implements OnInit {
  EDIT_PAYMENTS_REPORTS = 'EDIT_PAYMENTS_REPORTS';
  EDIT_PAYMENTS_SAVE_REPORTS = 'EDIT_PAYMENTS_SAVE_REPORTS';

  dropDown: any;
  paymentSeq: any;
  OrderItemData: any;
  gridOptionsReports: GridOptions = {};
  editData: Array<any>;
  editPaymentModel: EditPaymentModel;
  showBasicSetting: DropdownWithDescriptionModel;
  orderWhereBasicSetting: DropdownWithDescriptionModel;
  isTheBasicSetting: DropdownWithDescriptionModel;

  constructor(
    private route: ActivatedRoute,
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);
  }

  ngOnInit() {
    // this.initDropDown();
    this.editData = SessionObject.getEditPaymentData();
    if (this.editData) {
      this.paymentSeq = this.editData[0].paymentSeq;
      this.editPaymentModel.customerId.value = this.editData[0].customerId;
      this.editPaymentModel.payerCustomer.value = this.editData[0].customerId;
      this.editPaymentModel.fullName.value = this.editData[0].fullName;
      this.editPaymentModel.address1.value = this.editData[0].address1;
      this.editPaymentModel.exchangeRate.value = this.editData[0].exchangeRate;
      this.editPaymentModel.baseAmount.value = this.editData[0].baseAmount;
      this.editPaymentModel.paymentAccountSeq.value = this.editData[0].paymentAccountSeq;
      this.editPaymentModel.checkNumber.value = this.editData[0].checkNumber;
      this.editPaymentModel.expDate.value = this.editData[0].expDate;
      this.editPaymentModel.cardVerificationValue.value = this.editData[0].cardVerificationValue;
      this.editPaymentModel.creditCardStartDate.value = this.editData[0].creditCardStartDate;
      this.editPaymentModel.transactionReason.value = this.editData[0].transactionReason;
      this.editPaymentModel.creditCardIssueId.value = this.editData[0].creditCardIssueId;
      this.editPaymentModel.creditCardInfo.value = this.editData[0].creditCardInfo;
      this.editPaymentModel.authDate.value = this.editData[0].authDate;
      this.editPaymentModel.authCode.value = this.editData[0].authCode;
      this.editPaymentModel.refNbr.value = this.editData[0].refNbr;
      this.editPaymentModel.clearDate.value = this.editData[0].clearDate;
      this.editPaymentModel.cancelItmAfterSettleRetry.value = this.editData[0].cancelItmAfterSettleRetry;
      this.editPaymentModel.effortNbr.value = this.editData[0].effortNbr;
      this.editPaymentModel.currency.value = this.editData[0].currency;
      this.editPaymentModel.paymentClearStatusDesc.value = this.editData[0].paymentClearStatusDesc;
      this.editPaymentModel.paymentClearStatus.value = this.editData[0].paymentClearStatus;
      this.editPaymentModel.paymentType.value = this.editData[0].paymentType;
      this.editPaymentModel.paymentSeq.value = this.editData[0].paymentSeq;
    }
  }
  getNonSearchModelParams(name) {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      const obj = {
        paymentSeq: this.paymentSeq
      };
      return obj;
    }
  }

  getSearchModel(name: string) {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      return this.editPaymentModel;
    } else if (name === this.EDIT_PAYMENTS_SAVE_REPORTS) {
      return this.editPaymentModel;
    }
  }
  initSearchModels() {
    this.editPaymentModel = new EditPaymentModel();
  }
  getForm(name: string): FormGroup {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      return this.baseForm;
    }
  }
  getServiceUrl(name): any {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      return CustomerServicesUrls.TK_EDIT_PAYMENTS_URL;
    } else if (name === this.EDIT_PAYMENTS_SAVE_REPORTS) {
      return CustomerServicesUrls.TK_EDIT_PAYMENTS_SAVE_URL;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      return;
    }
  }

  getGridApi(name: string): GridAPII {
    if (name === this.EDIT_PAYMENTS_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }


  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    this.OrderItemData = data;
    // if (data['fetchPaymentDetails']) {
    //   Utils.date.convertArrayKeytoDate(data[this.editPaymentModel.apiDatakey], 'orderDate');
    // }

  }
  doOnGridReadyEditPaymentsReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.EDIT_PAYMENTS_REPORTS);
    this.OnSubmit(this.EDIT_PAYMENTS_REPORTS);
  }


  onEditCancel() {
    this.router.navigate(['pages/customer/agency-details/payments-report']);
  }
  onEditPaymentSave() {
    this.loadDataFromApi(this.EDIT_PAYMENTS_SAVE_REPORTS).subscribe((data) => {
      const status = data.Status;
      if (status === true) {
        this.alert.showAlertScucess(['payment Updated Successfully!!']);
      } else if (status === false) {
        this.alert.showAlertDanger(['Error While Updating Payment!!']);
      }
    });
  }

}
