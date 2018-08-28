import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent, BaseService, GridAPII } from '../../../../core/base';
import { GridApi, ColumnApi, ColDef, GridOptions, ColDefUtil } from 'ag-grid';
import { Subject } from 'rxjs';
import {
  CustomModalPopUpService, CustomModalPopUpModel, DropdownWithDescriptionModel, DropdownDataModel, AlertMessageService
} from '../../../../component';
import { CustomerServicesUrls, SessionObject, Utils, ProjectUtils } from '../../../../core/shared';
import { NotesModel } from './notes.model';
import { NotesServices } from './notes.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent extends BaseComponent implements OnInit {

  CUSTOMER_NOTES_REPORTS = 'CUSTOMER_NOTES_REPORTS';
  CUSTOMER_NOTES_DROPDOWN = 'CUSTOMER_NOTES_DROPDOWN';
  DELETE_CUSTOMER_NOTE = 'DELETE_CUSTOMER_NOTE';

  addNotePopupSettings: CustomModalPopUpModel = new CustomModalPopUpModel('AddNote');
  editNotePopupSettings: CustomModalPopUpModel = new CustomModalPopUpModel('EditNote');
  ddoptionsnotes: DropdownWithDescriptionModel;
  reInitAddNote: Subject<any> = new Subject();

  usercode: any;
  notesModel: NotesModel;
  ddOptionsNotesData: any;
  gridOptionsReports: GridOptions = {};
  selectedData: any;
  Status: any;
  dropDownData: any;
  arr: Array<any> = [];
  array: Array<any> = [];
  UserDetails: any;
  disabled: boolean;
  selectNodes: any;
  customerId: any;

  constructor(
    protected alert: AlertMessageService,
    protected baseService: BaseService,
    protected router: Router,
    protected customModalPopService: CustomModalPopUpService,
    private notesSrv: NotesServices
  ) {
    super(baseService, router);
    this.gridOptionsReports.onCellClicked = this.agCellClicked;
  }

  ngOnInit() {
    this.UserDetails = SessionObject.getUserDetails();
    this.customerId = SessionObject.getCustomerID();
    this.notesModel.customerId.value = this.customerId.customerId;
    this.getDropdownData(this.CUSTOMER_NOTES_DROPDOWN);
  }
  getForm(name: string): FormGroup {
    if (name === this.CUSTOMER_NOTES_REPORTS) {
      return this.baseForm;
    }
  }
  initSearchModels() {
    this.notesModel = new NotesModel();
  }
  getSearchModel(name: string) {
    if (name === this.CUSTOMER_NOTES_REPORTS || (this.CUSTOMER_NOTES_DROPDOWN === name)) {
      return this.notesModel;
    } else if (name === this.DELETE_CUSTOMER_NOTE) {
      this.notesModel.apiGridHeaderKay = '';
      return this.notesModel;
    }
  }
  setColumnDef(name: string): Array<ColDef> {
    if (name === this.CUSTOMER_NOTES_REPORTS) {
      return [];
    } else {
      return [];
    }
  }
  getServiceUrl(name): any {
    if (name === this.CUSTOMER_NOTES_REPORTS) {
      return CustomerServicesUrls.TK_CUSTOMER_NOTE_URL;
    } else if (name === this.CUSTOMER_NOTES_DROPDOWN) {
      return CustomerServicesUrls.TK_CUSTOMER_NOTE_DROPDOWN_URL;
    } else if (name === this.DELETE_CUSTOMER_NOTE) {
      return CustomerServicesUrls.TK_NOTES_DELETE_NOTE_URL;
    }
  }
  getDropdownData(name) {
    this.loadDataFromApi(name)
      .subscribe((data) => {
        this.notesModel.noteFilter.value = Object.keys(data.noteFilterList)[0];
        if (this.notesModel.noteFilter.value === '0') {
          this.dropDownData = 'All';
        }
        this.ddOptionsNotesData = new DropdownDataModel(data.noteFilterList);
        if (this.notesModel.noteFilter.value === '0') {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
        this.OnSubmit(this.CUSTOMER_NOTES_REPORTS);
      });
  }
  agCellClicked = (event) => {

    console.log(event);
    const headerName = event.colDef.headerName;
    if (headerName === 'Select') {
      if (event.event.target.className === 'fa fa-edit') {
        this.selectNodes = this.gridApi.getSelectedRows();
        this.array = [];
        this.array.push(this.selectNodes, this.dropDownData);
        this.customModalPopService.show(this.editNotePopupSettings);
      } else if (event.event.target.className === 'fa fa-trash') {
        this.selectNodes = this.gridApi.getSelectedRows();
        if (this.dropDownData === 'All') {
          this.notesModel.noteType.value = this.selectNodes[0].note_type_Description;
        } else {
          this.notesModel.noteType.value = this.dropDownData;
          this.notesModel.noteField.value = this.selectNodes[0].note_field;
          this.notesModel.userCode.value = this.selectNodes[0].user_code;
          this.notesModel.customerId.value = this.customerId.customerId;
        }
        this.loadDataFromApi(this.DELETE_CUSTOMER_NOTE)
          .subscribe((data) => {
            this.Status = data.Status;
            if (this.Status === 'OK') {
              this.alert.show([' Deleted Successfully']);
              this.OnSubmit(this.CUSTOMER_NOTES_REPORTS);
            } else if (this.Status === 'Error Occurs While deleting Note') {
              this.alert.show(['Error Occurs While Updating Note Please try for another time']);
            }
          });
      }
    }
  }

  getNonSearchModelParams(name) {
    if (name === this.DELETE_CUSTOMER_NOTE) {
      return this.notesSrv.getNonSearchModelParams(this.notesModel, this.dropDownData, this.selectNodes);
    }
  }

  addAdditionalHeaderToDynamicHeaders(name: string) {
    const columns = ProjectUtils.AddEditDelect([], 'Select');
    return columns;
  }

  onDropDownChange(val) {
    if (val.type !== 'change') {

this.notesModel.noteFilter.value = val;
    if (this.notesModel.noteFilter.value === '0') {
      this.notesModel.noteType.value = 'All';
      this.dropDownData = 'All';
    } else if (this.notesModel.noteFilter.value === '1') {
      this.notesModel.noteType.value = 'Customer';
      this.dropDownData = 'Customer';
    } else if (this.notesModel.noteFilter.value === '2') {
      this.notesModel.noteType.value = 'Subscriptions';
      this.dropDownData = 'Subscriptions';
    } else if (this.notesModel.noteFilter.value === '3') {
      this.notesModel.noteType.value = 'Order Items';
      this.dropDownData = 'Order Items';
    } else if (this.notesModel.noteFilter.value === '4') {
      this.notesModel.noteType.value = 'Payments';
      this.dropDownData = 'Payments';
    } else if (this.notesModel.noteFilter.value === '5') {
      this.notesModel.noteType.value = 'Suspension';
      this.dropDownData = 'Suspension';
    }
    if (this.notesModel.noteFilter.value === '0') {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    this.OnSubmit(this.CUSTOMER_NOTES_REPORTS);
  }
    }

  xtBaseLoadDataFromApiProcessData(name: string, data: Array<any>) {
    if (name === this.CUSTOMER_NOTES_REPORTS) {
      Utils.date.convertArrayKeytoDate(data[this.notesModel.apiDatakey], 'creation_date');
    }

  }
  getGridApi(name: string): GridAPII {
    if (name === this.CUSTOMER_NOTES_REPORTS) {
      return {
        gridApi: this.gridApi,
        columnApi: this.columnApi
      };
    }
  }

  doOnGridReadyAutoRenewalReports(api) {
    this.gridApi = api.api;
    this.columnApi = api.columnApi;
    this.doOnGridReady(this.CUSTOMER_NOTES_REPORTS);
  }

  sendAddData() {
    this.customModalPopService.show(this.addNotePopupSettings);
    const NoteType = this.notesModel.noteType.value;
    const userCode = this.UserDetails.userCode;
    this.arr = [];
    this.arr.push(NoteType, userCode);
    this.selectedData = this.arr;
    this.reInitAddNote.next(this.selectedData);
  }
  UpdateDataOnEdit() {
    this.OnSubmit(this.CUSTOMER_NOTES_REPORTS);
  }
}
