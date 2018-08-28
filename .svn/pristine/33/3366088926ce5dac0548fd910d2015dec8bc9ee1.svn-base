import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  CustomModalPopUpService, CustomModalPopUpModel,
  LoaderService, DropdownDataModel
} from '../../../component';
import { BaseComponent, BaseService, GridAPII } from '../../../core/base';
import { CustomerServicesUrls, SessionObject, Utils, ProjectUtils } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef, GridOptions } from 'ag-grid';
import { DocumentReferenceModel } from './document-reference.model';
import { columnDefsDocumentReference } from './document-reference-data';
import { DocumentReferenceListService } from './document-reference-list.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-document-reference-list',
  templateUrl: './document-reference-list.component.html',
  styleUrls: ['./document-reference-list.component.css'],
  providers: [DocumentReferenceListService]
})
export class DocumentReferenceListComponent extends BaseComponent implements OnInit {
  NAME_DOCUMENT_REFERENCE = 'DOCUMENT_REFERENCE';
  NAME_DOCUMENT_REFERENCE_COMPLETE = 'DOCUMENT_REFERENCE_COMPLETE';
  NAME_DOCUMENT_REFERENCE_SHOW_ALL = 'DOCUMENT_REFERENCE__SHOW_ALL';

  documentReferenceModel: DocumentReferenceModel;
  addnewpopupSetting = new CustomModalPopUpModel('New Document Reference');
  EditpopupSetting = new CustomModalPopUpModel('Edit Document Reference');

  AlertType: any;
  oprKey = new Subject<any>();
  sendData: any;
  selectedData: any;
  ddOptionsOperatorData: DropdownDataModel;
  ddOptionsAssignedtoData: DropdownDataModel;
  ddOptionsBatchTemplateData: DropdownDataModel;

  rowdata = { Description: '', Doc_Ref_Id: '', Type: '' };

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected loader: LoaderService,
    protected customModalPopService: CustomModalPopUpService
  ) {
    super(baseService, router);
    this.gridOptions.onCellClicked = this.agCellClicked;
  }

  getSearchModel(name: string) {
    if (name === this.NAME_DOCUMENT_REFERENCE) {
      return this.documentReferenceModel;
    }
    return this.documentReferenceModel;
  }

  agCellClicked = (event) => {

    const headerName: string = event.colDef.headerName;
    const row = event['data'];
    this.selectedData = row;
    if (headerName === 'Select' && event.event.target.className === 'custom-control-label') {
      this.rowdata = row;
      let refObj: any = SessionObject.getRefID();
      refObj.documentReferenceDialogue = row.document_reference_id;
      SessionObject.setRefID(refObj);
      this.baseService.sendMessage(
        {
          ref: row.document_reference_id
        }
      );
      // if(element.select === 'true'){
      this.navigateTo('pages/customer/cs');
      // }
    } else if (headerName === 'Edit' && event.event.target.className === 'fa fa-edit') {
      this.customModalPopService.show(this.EditpopupSetting);
    }
  }

  operaterChange(val) {
    this.setRefKey(val);
  }

  initSearchModels() {
    this.documentReferenceModel = new DocumentReferenceModel();
  }

  AddnewDocRef() {
    this.customModalPopService.show(this.addnewpopupSetting);
    this.setRefKey(this.documentReferenceModel.operator.value);
  }

  setRefKey(key) {
    this.oprKey.next(key);
  }

  documentAddHidePop(evt) {

    this.customModalPopService.hide(this.addnewpopupSetting);
    this.OnSubmit(this.NAME_DOCUMENT_REFERENCE_COMPLETE);
  }

  documentEditHidePop(evt) {
    this.customModalPopService.hide(this.EditpopupSetting);
    this.OnSubmit(this.NAME_DOCUMENT_REFERENCE_COMPLETE);
  }

  setColumnDef(name: string): Array<ColDef> {
    console.log('DocumentReferenceListComponent>setColumnDef');
    if (name === this.NAME_DOCUMENT_REFERENCE) {
      return columnDefsDocumentReference;
    } else {
      return columnDefsDocumentReference;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_DOCUMENT_REFERENCE) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_SEARCH_DATA;
    } else if (name === this.NAME_DOCUMENT_REFERENCE_COMPLETE) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DATA;
    } else if (name === this.NAME_DOCUMENT_REFERENCE_SHOW_ALL) {
      return CustomerServicesUrls.TK_SHOW_ALL_DOC_REF;
    }
  }

  getGridApi(name: string): GridAPII {
    if ((name === this.NAME_DOCUMENT_REFERENCE) || (name === this.NAME_DOCUMENT_REFERENCE_COMPLETE) ||
      (name === this.NAME_DOCUMENT_REFERENCE_SHOW_ALL)) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyDocRef(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.NAME_DOCUMENT_REFERENCE);
    this.OnSubmit(this.NAME_DOCUMENT_REFERENCE_COMPLETE);
  }

  doOnSubmit(e) {
    this.OnSubmit(this.NAME_DOCUMENT_REFERENCE);
  }

  ShowAllDocRef() {
    this.OnSubmit(this.NAME_DOCUMENT_REFERENCE_SHOW_ALL);
  }

  xtBaseLoadDataFromApiProcessData(name, data) {
    const refId = SessionObject.getRefID();
    data[this.documentReferenceModel.apiDatakey].forEach(element => {
      if (element.document_reference_id === refId.documentReferenceDialogue) {
        element.select = true;
      } else {
        element.select = false;
      }
    });
    if (name === this.NAME_DOCUMENT_REFERENCE_COMPLETE) {
      this.xtBaseLoadDataTastComplete(data);
    }
  }

  xtBaseLoadDataTastComplete(data: any) {

    this.ddOptionsOperatorData = new DropdownDataModel(data.documentReferenceAttributeModel.operatorList);
    this.ddOptionsAssignedtoData = new DropdownDataModel(data.documentReferenceAttributeModel.assignedToList);
    this.ddOptionsBatchTemplateData = new DropdownDataModel(data.documentReferenceAttributeModel.batchTemplateList);

    this.sendData = this.ddOptionsOperatorData;
    Utils.searchModel.assignValueFromApi(this.documentReferenceModel, data.documentReferenceAttributeModel);
    this.documentReferenceModel.operator.value = SessionObject.getUserDetails().userCode;
  }

  getNonSearchModelParams(name: string) {
    const obj = {
        fromRecord: 1,
      totalRecord: 100
    };
    return obj;
  }

  getForm(name: string): FormGroup {
    if ((name === this.NAME_DOCUMENT_REFERENCE) || (name === this.NAME_DOCUMENT_REFERENCE_COMPLETE)) {
      return this.baseForm;
    }
  }

}

