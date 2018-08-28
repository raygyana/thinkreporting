import { Component, OnInit, AfterViewInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CustomModalPopUpService } from '../../../component/custom-modal-pop-up/custom-modal-pop-up.service';
import { CustomModalPopUpModel } from './../../../component/custom-modal-pop-up/custom-modal-pop-up.model';
import { BaseComponent } from '../../../core/base/base.component';
import { LoaderService } from '../../../component/loader/loader.service';
import { DropdownWithDescriptionModel } from '../../../component';
import { BaseService } from '../../../core/base/base.service';
import { CustomerServicesUrls, ProjectUtils } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';
const salesByCatJSON = 'assets/json/process.json';
import { EditDocumentReferenceModel } from './edit-document-reference.model';
import { Router } from '@angular/router';
import { utils } from 'protractor';


@Component({
  selector: 'app-edit-document-reference',
  templateUrl: './edit-document-reference.component.html',
  styleUrls: ['./edit-document-reference.component.css']
})
export class EditDocumentReferenceComponent extends BaseComponent implements OnChanges {

  AlertType: any;
  @Input() selectedData: any;
  @Output() changeDoc = new EventEmitter<any>();

  editdocumentReferenceModel: EditDocumentReferenceModel;
  NAME_EDIT_DOCUMENT_REFERENCE = 'EDIT_DOCUMENT_REFERENCE';
  ddOptionsOperator: DropdownWithDescriptionModel;

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected loader: LoaderService
  ) {
    super(baseService, router);
    // this.initControl();
  }

  initSearchModels() {
    this.editdocumentReferenceModel = new EditDocumentReferenceModel();
    //  const model = ProjectUtils.getDynamicReports();
    this.setValueFromSession(this.editdocumentReferenceModel, {});
  }

  getSearchModel(name: string) {
    if (name === this.NAME_EDIT_DOCUMENT_REFERENCE) {
      return this.editdocumentReferenceModel;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_EDIT_DOCUMENT_REFERENCE) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_EDIT_DATA;
    }
  }

  ngOnChanges() {
    console.log('ngOnChanges>docref', this.selectedData);
    if (this.selectedData) {
      this.editdocumentReferenceModel.id.value = this.selectedData.document_reference_id;
      this.editdocumentReferenceModel.description.value = this.selectedData.description;
      this.editdocumentReferenceModel.type.value = ProjectUtils.numberFormatter(this.selectedData.type);
      this.editdocumentReferenceModel.operator.value = this.selectedData.user_code;
      this.editdocumentReferenceModel.active.value = this.selectedData.active;
    }

  }

  doOnSubmit(e) {
    if (this.editdocumentReferenceModel.active.value === 1) {
      this.editdocumentReferenceModel.active.value = 'true';
    }
    this.loadDataFromApi(this.NAME_EDIT_DOCUMENT_REFERENCE)
      .subscribe((res) => {
        this.changeDoc.emit(res);
        this.hideLoader();
      }, err => {
        console.log('error is ', err);
        this.hideLoader();
      });
  }
}
