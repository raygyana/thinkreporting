import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent, BaseService, GridAPII } from '../../../../../core/base';
import {
  CustomModalPopUpService, LoaderService, CustomModalPopUpModel, AlertMessageService
} from '../../../../../component';
import { CustomerServicesUrls, SessionObject, Utils } from '../../../../../core/shared';
import { EditNotesModel } from './edit-note.model';
import { NotesServices } from '../notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent extends BaseComponent implements OnChanges {

  @Input() editNote: any;
  @Output() Change = new EventEmitter<string>();

  EDIT_NOTES_REPORTS = 'EDIT_NOTES_REPORTS';
  editNotePopupSettings: CustomModalPopUpModel = new CustomModalPopUpModel('EditNote');

  editNotesModel: EditNotesModel;
  record: any;
  resultdata: any;
  dropdownValue: any;
  Status: any;


  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private notesSrv: NotesServices
  ) {
    super(baseService, router);
  }

  ngOnChanges() {
    if (!Utils.isEmpty(this.editNote)) {
      console.log('dataEditttttttt', this.editNote);
      this.resultdata = this.editNote[0];
      this.dropdownValue = this.editNote[1];
      console.log('resultData', this.resultdata);
      const sessionObject = SessionObject.getCustomerID();
      this.editNotesModel.customerId.value = sessionObject.customerId;
      if (this.dropdownValue === 'All') {
        this.editNotesModel.noteType.value = this.resultdata[0].note_type_Description;
        this.editNotesModel.note.value = this.resultdata[0].note_field;
        this.editNotesModel.userCode.value = this.resultdata[0].user_code;
      } else {
        this.editNotesModel.noteType.value = this.dropdownValue;
        this.editNotesModel.note.value = this.resultdata[0].note_field;
        this.editNotesModel.userCode.value = this.resultdata[0].user_code;
      }
    }
  }
  initSearchModels() {
    this.editNotesModel = new EditNotesModel();
    console.log('EditNotesModel', this.editNotesModel);
  }

  getSearchModel(name: string) {
    if (name === this.EDIT_NOTES_REPORTS) {
      return this.editNotesModel;
    }
  }

  getServiceUrl(name): any {
    if (name === this.EDIT_NOTES_REPORTS) {
      return CustomerServicesUrls.TK_NOTES_EDIT_SAVE_URL;
    }
  }
  getNonSearchModelParams() {
    return this.notesSrv.getNonSearchModelParams(this.editNotesModel, this.dropdownValue, this.resultdata);
  }

  doOnEditSave() {
    this.loadDataFromApi(this.EDIT_NOTES_REPORTS)
      .subscribe((data) => {
        this.Status = data.Status;
        if (this.Status === 'OK') {
          this.alert.show(['Updated Successfully']);
          this.Change.emit();
        } else if (this.Status === 'Error') {
          this.alert.showAlertDanger(['Error Occurs While Updating Note Please Try Again']);
        }
      });
  }
}
