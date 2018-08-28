import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { DropdownDataModel } from '../../../component';
import { BaseService } from '../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, Utils } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';
import { AddDocumentReferenceModel } from './add-document-reference.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoaderService, AlertMessageService } from '../../../component';

@Component({
  selector: 'app-add-document-reference',
  templateUrl: './add-document-reference.component.html',
  styleUrls: ['./add-document-reference.component.css']
})
export class AddDocumentReferenceComponent extends BaseComponent implements OnInit {
  AlertType: any;
  todayDate: any;
  count: any;
  operatorData1 = new Subject<any>();
  ddOptionsOperatorPopData: DropdownDataModel;
  slectedKey: any;
  @Output() changeDoc = new EventEmitter<any>();
  @Input() popUpData: any;
  adddocumentReferenceModel: AddDocumentReferenceModel;
  NAME_ADD_DOCUMENT_REFERENCE = 'ADD_DOCUMENT_REFERENCE';
  NAME_DESCRIPTION_COUNT = 'DESCRIPTION_COUNT';
  @Input() oprKey = new Subject<any>();

  constructor(
    protected baseService: BaseService,
    protected loader: LoaderService,
    protected alert: AlertMessageService,
    protected router: Router
  ) {
    super(baseService, router);
    this.initSearchModels();

  }


  ngOnInit() {
    this.setDate();
    this.oprKey.subscribe((val) => {

      this.slectedKey = val;
      this.adddocumentReferenceModel.operator.value = this.slectedKey;
      console.log('ngOnInit>subscribe>slectedKey1:', this.slectedKey);
      this.ddOptionsOperatorPopData = new DropdownDataModel(this.popUpData.data);
      this.getDescriptionCount();
    });
  }

  initSearchModels() {
    this.adddocumentReferenceModel = new AddDocumentReferenceModel();
    //  const model = ProjectUtils.getDynamicReports();
    if (this.adddocumentReferenceModel.active.value === '') {
      this.adddocumentReferenceModel.active.value = true;
    }
    this.setValueFromSession(this.adddocumentReferenceModel, {});
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ADD_DOCUMENT_REFERENCE) {
      return this.adddocumentReferenceModel;
    }
  }

  getNonSearchModelParams(name: string) {
    if (name === this.NAME_DESCRIPTION_COUNT) {
      const obj = {
        description: this.slectedKey + '-' + this.todayDate
        // totalRecord: 4
      };
      return obj;
    }
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ADD_DOCUMENT_REFERENCE) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_ADD_DATA;
    } else if (name === this.NAME_DESCRIPTION_COUNT) {
      return CustomerServicesUrls.TK_CUSTOMER_REFERENCE_DESCRIPTIONS_COUNT;
    }
  }

  opeaterChange(val) {
    this.setRefKey(val);
  }

  setRefKey(key) {
    this.oprKey.next(this.adddocumentReferenceModel.operator.value);
  }

  setDate() {

    const date = new Date();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    this.todayDate = ('0' + date.getDate()).slice(-2) + '' + monthNames[date.getMonth()] + '' +
      date.getFullYear();
  }

  getDescriptionCount() {
    this.loadDataFromApi(this.NAME_DESCRIPTION_COUNT).subscribe((res) => {
      this.adddocumentReferenceModel.description.value = this.slectedKey + '-' + this.todayDate + '-' + (res.descriptionCount + 1);
    });
  }

  doOnSubmit(e) {
    this.showLoader();
    this.loadDataFromApi(this.NAME_ADD_DOCUMENT_REFERENCE)
      .subscribe((res) => {
        this.alert.showAlertScucess(['Document Reference added Successfully!!!'], 2000);
        this.changeDoc.emit(res);
        this.hideLoader();
      }, err => {
        console.log('error is ', err);
        this.alert.showAlertDanger(['Error while adding....Please try Again !!!'], 2000);
        this.hideLoader();
      });
  }

}
