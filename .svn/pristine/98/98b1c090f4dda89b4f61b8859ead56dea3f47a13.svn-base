import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent, BaseService, ModelPopUpBase } from '../../../../../core/base';
import { CustomerServicesUrls, SessionObject, Utils } from '../../../../../core/shared';
import { Router } from '@angular/router';
import { AddNotesModel } from './add-note.model';
import { DropdownDataModel, AlertMessageService } from '../../../../../component';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent extends ModelPopUpBase {

  ADD_NOTES_REPORTS = 'ADD_NOTES_REPORTS';
  ADD_NOTES_SAVE_REPORTS = 'ADD_NOTES_SAVE_REPORTS';
  ddOptionsNotesData: DropdownDataModel;
  addNotesModel: AddNotesModel;

  @Input() addNoteData: any;
  @Output() UpdateData = new EventEmitter<string>();
  show: any;
  Status: any;

  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router) {
    super(baseService, router);

  }


  reInit(data) {
    this.initSearchModels();
    const addData = data;
    if (!Utils.isEmpty(addData)) {
      this.addNotesModel.noteFilter.value = addData[Object.keys(addData)[0]];
      this.addNotesModel.userCode.value = addData[Object.keys(addData)[1]];
      this.getEditdataFromApi(this.ADD_NOTES_REPORTS);
      if (this.addNotesModel.noteFilter.value === 'Customer') {
        this.show = false;
      } else {
        this.show = true;
      }
    }

  }

  initSearchModels() {
    this.addNotesModel = new AddNotesModel();
  }
  getSearchModel(name: string) {
    if (name === this.ADD_NOTES_REPORTS) {
      this.addNotesModel.noteFilter.apiKey = 'noteFilter';
      return this.addNotesModel;
    } else if (name === this.ADD_NOTES_SAVE_REPORTS) {
      this.addNotesModel.noteFilter.apiKey = 'noteType';
      return this.addNotesModel;
    }
  }
  getServiceUrl(name): any {
    if (name === this.ADD_NOTES_REPORTS) {
      return CustomerServicesUrls.TK_NOTES_ADD_GET_DATA_URL;
    } else if (name === this.ADD_NOTES_SAVE_REPORTS) {
      return CustomerServicesUrls.TK_NOTES_ADD_SAVE_URL;
    }
  }
  getNonSearchModelParams(name: string) {
    const sessionObject = SessionObject.getCustomerID();
    const obj = {
      customerId: sessionObject.customerId
    };
    return obj;
  }
  getEditdataFromApi(name: any) {
    this.loadDataFromApi(this.ADD_NOTES_REPORTS)
      .subscribe((data) => {
        const recordList = data.noteAdd['recordList'];
        console.log('dataisssssssssss', recordList);
        this.ddOptionsNotesData = new DropdownDataModel(recordList);
      });
  }
  doOnSubmit() {
    this.loadDataFromApi(this.ADD_NOTES_SAVE_REPORTS)
      .subscribe((data) => {
        this.Status = data.Status;
        if (this.Status === 'OK') {
          this.alert.showAlertScucess(['Addeded Successfully']);
          this.UpdateData.emit();
        } else if (this.Status === 'Error') {
          this.alert.showAlertDanger(['Error while Adding note Please Try Again']);
        }
      });
  }
}
