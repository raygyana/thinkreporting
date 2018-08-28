import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { BaseComponent } from '../../../core/base/base.component';
import { DropdownDataModel } from '../../../component';
import { BaseService } from '../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, Utils } from '../../../core/shared';
import { GridApi, ColumnApi, ColDef } from 'ag-grid';
import { AddAttachmentModel } from './add-attachment.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../component/loader/loader.service';

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.css']
})
export class AddAttachmentComponent extends BaseComponent implements OnInit {

  AlertType: any;
  todayDate: any;
  count: any;
  operatorData1 = new Subject<any>();
  ddOptionsOperatorPopData: DropdownDataModel;
  slectedKey: any;
  @Output() changeDoc = new EventEmitter<any>();
  @Input() popUpData: any;
  addAttachmentModel: AddAttachmentModel;
  NAME_ADD_DOCUMENT_REFERENCE = 'ADD_DOCUMENT_REFERENCE';
  NAME_DESCRIPTION_COUNT = 'DESCRIPTION_COUNT';
  @Input() oprKey = new Subject<any>();


  constructor(
    protected baseService: BaseService,
    protected loader: LoaderService,
    protected router: Router
  ) {
    super(baseService, router);
    this.initSearchModels();

  }


  ngOnInit() {
    this.setDate();
    this.oprKey.subscribe((val) => {
      this.slectedKey = val;
      this.addAttachmentModel.operator.value = this.slectedKey;
      console.log('ngOnInit>subscribe>slectedKey1:', this.slectedKey);
      this.ddOptionsOperatorPopData = new DropdownDataModel(this.popUpData.data);
      this.getDescriptionCount();
    });
  }

  initSearchModels() {
    this.addAttachmentModel = new AddAttachmentModel();
    //  const model = ProjectUtils.getDynamicReports();
    if (this.addAttachmentModel.active.value === '') {
      this.addAttachmentModel.active.value = true;
    }
    this.setValueFromSession(this.addAttachmentModel, {});
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ADD_DOCUMENT_REFERENCE) {
      return this.addAttachmentModel;
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

  Upload(event: any) {
    const fileUpload = document.getElementById('attachmentfile');
    if (typeof (fileUpload) !== 'undefined') {
      const size = parseInt(event.target.files[0].size, 10).toFixed(2);
      alert(size + ' KB.');

    } else {
      alert('This browser does not support HTML5.');
    }
  }

  setRefKey(key) {
    this.oprKey.next(this.addAttachmentModel.operator.value);
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
      this.addAttachmentModel.description.value = this.slectedKey + '-' + this.todayDate + '-' + (res.descriptionCount + 1);
    });
  }

  doOnSubmit(e) {
    this.showLoader();
    this.loadDataFromApi(this.NAME_ADD_DOCUMENT_REFERENCE)
      .subscribe((res) => {
        this.changeDoc.emit(res);
        this.hideLoader();
      }, err => {
        console.log('error is ', err);
        this.hideLoader();
      });
  }

}

