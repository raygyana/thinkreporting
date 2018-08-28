import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../../core/base/base.component';
import { BaseService } from '../../../../core/base/base.service';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { columnDefsAttachmentReports } from './attachment.data';
import { CustomModalPopUpModel, CustomModalPopUpService } from '../../../../component';
import { CustomerServicesUrls, Utils, SessionObject } from '../../../../core/shared';
import { AttachmentModel } from './attachment.model';
import { AttachmentService } from './attachment.service';
import { GridAPII } from '../../../../core/base/base.component';
import { DropdownDataModel } from '../../../../component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.css'],
  providers: [AttachmentService]
})
export class AttachmentComponent extends BaseComponent implements OnInit {
  NAME_ATTACHMENT = 'NAME_ATTACHMENT';
  NAME_EDIT_ATTACHMENT = 'EDIT_ATTACHMENT';
  attachmentModel: AttachmentModel;
  isDisabled: boolean;
  ddOptionsattachmentListData: DropdownDataModel;
  addnewpopupSetting = new CustomModalPopUpModel('Add Attachment');
  gridOptionsReports: GridOptions = {
    suppressRowClickSelection: true,
    rowSelection: 'multiple'
  };



  constructor(protected baseService: BaseService,
    protected router: Router,
    private attachmentService: AttachmentService,
    protected customModalPopService: CustomModalPopUpService,
  ) {
    super(baseService, router);
    // this.gridOptionsReports = {};
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
  }


  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    // this.selectedData = row;
    // if (headerName === 'Select' && event.event.target.className === 'custom-control-label') {
    //   this.rowdata = row;
    //   let refObj: any = SessionObject.getRefID();
    //   refObj.documentReferenceDialogue = row.document_reference_id;
    //   SessionObject.setRefID(refObj);
    //   this.baseService.sendMessage(
    //     {
    //       ref: row.document_reference_id
    //     }
    //   );
    //   this.navigateTo('pages/customer/cs');

    // } else if (headerName === 'Edit' && event.event.target.className === 'fa fa-edit') {
    //   this.customModalPopService.show(this.EditpopupSetting);
    // }
  }

  initSearchModels() {
    this.attachmentModel = new AttachmentModel();
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ATTACHMENT) {
      return this.attachmentModel;
    }
    return this.attachmentModel;
  }


  // initDropDown() {
  //   this.basicSetting = new DropdownWithDescriptionModel();
  //   this.basicSetting.ListDisplayKeys = [{
  //     headerName: 'Code',
  //     displayKey: 'process'
  //   }];
  //   // this.basicSetting.descriptionKey = 'processType';
  //   this.basicSetting.displayKey = 'process';
  //   this.basicSetting.serviceUrl = ProcessUrls.TK_PROCESS_LISTING_URL;
  //   this.basicSetting.valueTypeOrKey = 'process';
  // }

  // ag-grid set-up
  // set columns

  setColumnDef(name: string): Array<ColDef> {
    if (name === this.NAME_ATTACHMENT) {
      return columnDefsAttachmentReports;
    } else {
      return columnDefsAttachmentReports;
    }
  }

  getServiceUrl(name): any {
    if (name === this.NAME_ATTACHMENT) {
      return CustomerServicesUrls.TK_ATTACHMENT_LIST_DATA;
    }

  }

  getGridApi(name: string): GridAPII {
    if (name === this.NAME_ATTACHMENT) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAttachReports(api) {

    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_ATTACHMENT);
    this.OnSubmit(this.NAME_ATTACHMENT);

  }

  xtBaseLoadDataFromApiProcessData(name, data) {
    this.xtBaseLoadDataTastComplete(data);
  }

  operaterChange(event: any) {

    this.attachmentModel.attachmentFilter.value = event;
    if (this.attachmentModel.attachmentFilter.value === '0') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  xtBaseLoadDataTastComplete(data: any) {

    this.ddOptionsattachmentListData = new DropdownDataModel(data.attachmentFilterList);
    Utils.searchModel.assignValueFromApi(this.attachmentModel, data.attachmentFilter);

  }

  getNonSearchModelParams(name: string) {
    if (name === this.NAME_ATTACHMENT) {
      const custId = SessionObject.getCustomerID();
      const uCode = SessionObject.getUserDetails().userCode;
      const obj = {
        userCode: uCode,
        customerId: custId.customerId
      };
      return obj;
    }

  }

  openAttachment(evt) {

    this.customModalPopService.show(this.addnewpopupSetting);
    // this.OnSubmit(this.NAME_EDIT_ATTACHMENT);
  }

}
