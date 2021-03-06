import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CustomerAddressModel, CustomerTempAddressModel } from './customer-address-popup.model';
import { Router } from '@angular/router';
import { BaseService, BaseComponent, ModelPopUpBase } from '../../../../../core/base';
import { SessionObject, CustomerServicesUrls, SearchModelUtil, ProjectUtils, Utils } from '../../../../../core/shared/index';
import { DropdownDataModel, AlertMessageService } from '../../../../../component';
import { ModalPopUp } from '../../../../../component/core-comp';
import { IMyDpOptions } from 'mydatepicker';
import { CustomerGuard } from '../../../cust-destop.gard.service';

@Component({
  selector: 'app-customer-address-popup',
  templateUrl: './customer-address-popup.component.html',
  styleUrls: ['./customer-address-popup.component.css']
})
export class CustomerAddressPopupComponent extends BaseComponent implements OnChanges {
  NAME_ADDRESS_EDIT = 'NAME_ADDRESS_EDIT';
  NAME_ADDRESS_EDIT_SUBMIT = 'NAME_ADDRESS_EDIT_SUBMIT';
  NAME_ADDRESS_ADD = 'NAME_ADDRESS_ADD';
  NAME_ADDRESS_ADD_SUBMIT = 'NAME_ADDRESS_ADD_SUBMIT';

  dropDownValue: any;
  taxIDFiels: boolean;
  SpecialTaxIDArray: Array<any>;
  SpecailTaxId: any;
  type: string;
  fromDateobj: any;
  toDateobj: any;
  DateCheck: boolean;
  updateFlag = false;
  conditionalButton = false;
  DateErrorMessage: string;
  EffectiveReverseDate: Array<any>;
  TempEffectiveReverseDate: any = {};
  FutureEffectiveReverseDate: any = {};

  ddOptionsStateData: DropdownDataModel;
  ddOptionsSpecialTaxID: DropdownDataModel;
  ddOptionsCustomerCategory: DropdownDataModel;
  ddOptionsAddressStatus: DropdownDataModel;
  ddOptionsAddressType: DropdownDataModel;
  @Output() public autoupdate = new EventEmitter();
  @Output() public closePopUp = new EventEmitter();
  @Input() popUpType: any;
  @Input() editAddressData: any;
  addressModel: CustomerAddressModel;
  customerTempAddressModel: CustomerTempAddressModel;
  searchModelUtil = new SearchModelUtil();

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };

  mask: any[] = ['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/];

  constructor(
    protected baseService: BaseService,
    protected router: Router,
    protected alert: AlertMessageService,
    protected customerGuard: CustomerGuard
  ) {
    super(baseService, router);
    this.addressModel = new CustomerAddressModel();
    this.customerTempAddressModel = new CustomerTempAddressModel();
  }

  ngOnChanges() {
    this.EffectiveReverseDate = this.customerGuard.effectivearraydata;
    console.log('this.popUpType', this.popUpType);
    this.conditionalButton = false;
    if (this.popUpType.action === 'edit') {
      this.addressModel = new CustomerAddressModel();
      this.customerTempAddressModel = new CustomerTempAddressModel();
      this.bindEditAddData(this.editAddressData);
    }
    if (this.popUpType.action === 'add') {
      this.fromDateobj = undefined;
      this.toDateobj = undefined;
      this.addressModel = new CustomerAddressModel();
      this.customerTempAddressModel = new CustomerTempAddressModel();
      const customer = SessionObject.getCustomerID();
      this.addressModel.customerId.value = customer.customerId;
      this.customerTempAddressModel.changeAddress.value = 1;
      this.customerTempAddressModel.futureOrTemp.value = '0';
      this.setDropDown(this.dropDownValue);
    }
  }

  bindEditAddData(data) {
    this.fromDateobj = undefined;
    this.toDateobj = undefined;
    this.taxIDFiels = false;
    this.setDropDown(this.dropDownValue);
    this.addressModel.address1.value = data.address1;
    this.addressModel.address2.value = data.address2;
    this.addressModel.address3.value = data.address3;
    this.addressModel.addressStatus.value = data.addressStatus;
    this.addressModel.addressType.value = data.addressType;
    this.addressModel.city.value = data.city;
    this.addressModel.company.value = data.company;
    this.addressModel.country.value = data.state;
    this.addressModel.county.value = data.county;
    this.addressModel.customerAddressSeq.value = data.customerAddressSeq;
    this.addressModel.customerCategory.value = data.customerCategory;
    this.addressModel.department.value = data.department;
    this.addressModel.email.value = data.email;
    this.addressModel.fax.value = data.fax;
    this.addressModel.fName.value = data.fname;
    this.addressModel.initial.value = data.initial;
    this.addressModel.institutionalIdentifier.value = data.institutionalIdentifier;
    this.addressModel.lName.value = data.lname;
    this.addressModel.phone1.value = data.phone;
    this.addressModel.phone2.value = data.eighthundred;
    this.addressModel.salutation.value = data.salutation;
    this.addressModel.state.value = data.state;
    this.addressModel.suffix.value = data.suffix;
    this.addressModel.title.value = data.title;
    this.addressModel.zip.value = data.zip;
    this.addressModel.specialTaxId.value = data.specialTaxId;
    if (this.popUpType.type === 'temp') {
      this.fillDateIntoModel(data);
    }
    if (data.specialTaxId !== 0) {
      this.taxIDFiels = true;
    }
    this.addressModel.taxID.value = data.taxIdNumber;
    this.SpecialTaxIDArray.forEach(element => {
      if (element.display === data.taxIdNumber) {
        this.SpecailTaxId = element.key;
      }
    });
  }

  fillDateIntoModel(dateDate: any) {
    const from = (dateDate.effectiveDate).split('-');
    const FromDateSplit = from[2].split(' ');
    const fromDate: any = { date: { year: Number(from[0]), month: Number(from[1]), day: Number(FromDateSplit[0]) } };
    this.customerTempAddressModel.from.value = fromDate;
    if (dateDate.reverseDate !== null) {
      const to = (dateDate.reverseDate).split('-');
      const toDateSplit = to[2].split(' ');
      const toDate: any = { date: { year: Number(to[0]), month: Number(to[1]), day: Number(toDateSplit[0]) } };
      this.customerTempAddressModel.to.value = toDate;
    }
    this.customerTempAddressModel.changeAddress.value = dateDate.replaceCustomerAddressSeq;
    this.customerTempAddressModel.futureOrTemp.value = dateDate.changeType;
  }

  DateCondtionforUpdate(): any {
    this.DateCheck = false;
    this.DateErrorMessage = '';
    const todateval = this.customerTempAddressModel.to.value;
    if (this.popUpType.type === 'temp') {
      if (todateval !== null && todateval !== '') {
        this.CommonDateCondition();
      } else {
        let FormDate: any;
        if (this.customerTempAddressModel.from.value.hasOwnProperty('date')) {
          FormDate = this.ManualDateFormat(this.customerTempAddressModel.from.value);
          this.customerTempAddressModel.from.value = FormDate['formatted'];
        } else {
          FormDate = this.DateJsonFormat(this.customerTempAddressModel.from.value);
          this.customerTempAddressModel.from.value = FormDate['formatted'];
        }
        if (todateval !== null && todateval !== '') {
          const toDate = this.ManualDateFormat(this.customerTempAddressModel.to.value);
          this.customerTempAddressModel.to.value = toDate;
        }
      }
      this.type = 'temp';
    } else {
      this.type = 'permanent';
    }
  }

  CheckJsonInModel(): any {
    let fromDateJson: any;
    let toDateJson: any;
    const toDateVal = this.customerTempAddressModel.to.value;
    if (this.customerTempAddressModel.from.value.date === undefined) {
      fromDateJson = this.DateJsonFormat(this.customerTempAddressModel.from.value);
    } else {
      fromDateJson = this.ManualDateFormat(this.customerTempAddressModel.from.value);
    }
    if (toDateVal !== null) {
      if (toDateVal.date === undefined) {
        toDateJson = this.DateJsonFormat(toDateVal);
      } else {
        toDateJson = this.ManualDateFormat(toDateVal);
      }
    }
    return [fromDateJson, toDateJson];
  }

  ManualDateFormat(dateformat: any): any {
    const formattingvalues = dateformat['date'];
    const DateJsonFormat = {
      date: dateformat['date'],
      formatted: Number(formattingvalues['day']) +
        '/' + Number(formattingvalues['month']) +
        '/' + Number(formattingvalues['year'])
    };
    return DateJsonFormat;
  }

  DateJsonFormat(dateObj: any): any {
    const splitDate = (dateObj).split('/');
    const FinalDateJson: any = {
      date: {
        year: Number(splitDate[2]),
        month: Number(splitDate[1]),
        day: Number(splitDate[0])
      },
      formatted: dateObj
    };
    return FinalDateJson;
  }

  CommonDateCondition(): any {
    const returnValue = this.CheckJsonInModel();
    const fromDateJson = returnValue[0];
    const toDateJson = returnValue[1];
    const FromDate = fromDateJson['date'];
    const FromDateFormat = fromDateJson['formatted'];
    const ToDate = toDateJson['date'];
    const ToDateFormat = toDateJson['formatted'];
    this.customerTempAddressModel.from.value = FromDateFormat;
    this.customerTempAddressModel.to.value = ToDateFormat;
    if (FromDateFormat === ToDateFormat) {
      this.DateCheck = true;
      this.DateErrorMessage = 'FROM and TO Date should not be equal !!';
      return this.DateCheck;
    }
    if (FromDate['year'] > ToDate['year']) {
      this.DateCheck = true;
      this.DateErrorMessage = 'TO Date must be greater than FROM Date !!';
      return this.DateCheck;
    }
    if (FromDate['year'] === ToDate['year']) {
      if (FromDate['month'] > ToDate['month']) {
        this.DateCheck = true;
        this.DateErrorMessage = 'TO Date must be greater than FROM Date !!';
        return this.DateCheck;
      }
    }
    if (FromDate['year'] === ToDate['year']) {
      if (FromDate['month'] === ToDate['month']) {
        if (FromDate['day'] > ToDate['day']) {
          this.DateCheck = true;
          this.DateErrorMessage = 'TO Date must be greater than FROM Date !!';
          return this.DateCheck;
        }
      }
    }
    this.dateCompairFunction(FromDateFormat, ToDateFormat);
  }

  getServiceUrl(name): string {
    if (name === this.NAME_ADDRESS_EDIT) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_Edit_DATA;
    } else if (name === this.NAME_ADDRESS_EDIT_SUBMIT) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_Edit_SUBMIT_DATA;
    } else if (name === this.NAME_ADDRESS_ADD) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_ADD_DATA;
    } else if (name === this.NAME_ADDRESS_ADD_SUBMIT) {
      return CustomerServicesUrls.TK_CUSTOMER_ADDRESS_ADD_SUBMIT_DATA;
    }
  }

  getSearchModel(name: string) {
    if (name === this.NAME_ADDRESS_ADD_SUBMIT || name === this.NAME_ADDRESS_EDIT_SUBMIT) {
      if (this.popUpType.type === 'temp') {
        return ProjectUtils.object.asignObjTofirstOne(this.addressModel, this.customerTempAddressModel);
      } else {
        return this.addressModel;
      }
    }
  }

  getNonSearchModelParams(name: string) {
    const customer = SessionObject.getCustomerID();
    if (name === this.NAME_ADDRESS_ADD) {
      const obj = {
        customerId: customer.customerId || customer,
        type: 'temp'
      };
      return obj;
    } else if (name === this.NAME_ADDRESS_EDIT_SUBMIT) {
      const submit = {
        customerId: customer.customerId || customer,
        type: this.type
      };
      return submit;
    }
  }

  xtBaseOnInit() {
    this.FirstLoadAddAddressComponent();
  }

  stateChange(stateCode) {
    this.fetchCountryList(stateCode);
  }

  fetchCountryList(statecode) {
    if (!statecode) { return; }
    const param = '&statecode=' + statecode;
    this.baseService.getDataFromAPI(CustomerServicesUrls.TK_CUSTOMER_GET_COUNTRY_DATA, param).subscribe((data) => {
      console.log('DocumentReferenceListComponent>datafrom api::', data);
      this.addressModel.country.value = data.country[0];
      if (data.country.length > 1) {
        this.addressModel.phone1.value = data.country[1];
        this.addressModel.phone2.value = data.country[1];
      }
    });
  }

  onSubmit() {
    this.OnSubmit(this.NAME_ADDRESS_EDIT_SUBMIT, false);
  }

  addNewAddress() {
    this.updateFlag = false;
    this.conditionalButton = false;
    this.DateCheck = false;
    this.DateErrorMessage = '';
    if (this.isFormValid(this.NAME_ADDRESS_ADD_SUBMIT)) {
      this.showLoader();
      const userCode = SessionObject.getUserDetails();
      const docRef = SessionObject.getRefID();
      const todaysDate = new Date().toDateString();
      this.addressModel.userCode.value = userCode.userCode;
      this.addressModel.documentReferenceId.value = docRef.documentReferenceDialogue;
      if (this.popUpType.type === 'temp') {
        if (this.customerTempAddressModel.futureOrTemp.value === '1') {
          if (this.customerTempAddressModel.to.value === '' || this.customerTempAddressModel.to.value === null) {
            this.DateCheck = true;
            this.DateErrorMessage = 'To date is mandatory in Temporary Address !!';
          } else {
            if (typeof this.customerTempAddressModel.from.value !== 'string') {
              this.customerTempAddressModel.from.value = this.ManualDateFormat(this.customerTempAddressModel.from.value)['formatted'];
            }
            if (this.toDateobj !== undefined) {
              this.CommonDateCondition();
            }
          }
        } else {
          if (typeof this.customerTempAddressModel.from.value !== 'string') {
            this.customerTempAddressModel.from.value = this.ManualDateFormat(this.customerTempAddressModel.from.value)['formatted'];
          }
          if (this.toDateobj !== undefined) {
            this.CommonDateCondition();
          } else {
            const checkTodayDate = new Date(this.dateRearrange(this.customerTempAddressModel.from.value)).toDateString();
            if (todaysDate === checkTodayDate) {
              this.conditionalButton = true;
            }
            this.dateCompairFunction(this.customerTempAddressModel.from.value, '');
          }
        }
      }
      if (this.customerTempAddressModel.changeAddress.value === null) {
        this.customerTempAddressModel.changeAddress.value = '';
      }
      if (this.conditionalButton === false) {
        if (this.DateCheck === false) {
          this.AddTempOrPermanentAddress();
        } else {
          this.alert.showAlertDanger([this.DateErrorMessage], 5000);
          this.hideLoader();
        }
      }
      this.hideLoader();
    }
  }

  AddTempOrPermanentAddress() {
    if (this.conditionalButton) {
      this.dateCompairFunction(this.customerTempAddressModel.from.value, '');
    }
    this.conditionalButton = false;
    if (this.DateCheck === false) {
      this.loadDataFromApi(this.NAME_ADDRESS_ADD_SUBMIT)
        .subscribe((data) => {
          if (data.Status === 'OK') {
            this.alert.showAlertScucess(['Address Added Successfully!!!'], 3000);
            this.addressModel = new CustomerAddressModel();
            this.FirstLoadAddAddressComponent();
            this.closePopUp.emit(data);
          }
          if (data.Status === 'Error') {
            this.alert.showAlertDanger(['Failed To Add! Please Try After Sometime !!'], 5000);
          }
          this.hideLoader();
        },
          (err) => {
            this.hideLoader();
          });
    } else {
      this.alert.showAlertDanger([this.DateErrorMessage], 5000);
      this.hideLoader();
    }
  }

  UpdateAddress() {
    this.updateFlag = true;
    this.conditionalButton = false;
    this.DateCheck = false;
    this.DateErrorMessage = '';
    if (this.isFormValid(this.NAME_ADDRESS_EDIT_SUBMIT)) {
      if (this.customerTempAddressModel.futureOrTemp.value === '1') {
        if (this.customerTempAddressModel.to.value === '' || this.customerTempAddressModel.to.value === null) {
          this.DateCheck = true;
          this.DateErrorMessage = 'To date is mandatory in Temporary Address !!';
        } else {
          this.DateCondtionforUpdate();
        }
      } else {
        this.DateCondtionforUpdate();
      }
      if (this.DateCheck === false) {
        this.UpdatePermanentAddress();
      } else {
        this.alert.showAlertDanger([this.DateErrorMessage], 5000);
        this.hideLoader();
      }
    }
  }

  UpdatePermanentAddress() {
    if (this.conditionalButton) {
      this.popUpType.type = 'permanent';
      this.type = 'permanent';
    }
    this.conditionalButton = false;
    const userCode = SessionObject.getUserDetails();
    const docRef = SessionObject.getRefID();
    this.addressModel.userCode.value = userCode.userCode;
    this.addressModel.documentReferenceId.value = docRef.documentReferenceDialogue;
    this.addressModel.specialTaxId.value = this.SpecailTaxId;
    this.loadDataFromApi(this.NAME_ADDRESS_EDIT_SUBMIT)
      .subscribe((data) => {
        if (data.Status === 'OK') {
          this.alert.showAlertScucess(['Address Added Successfully!!!'], 3000);
          this.addressModel = new CustomerAddressModel();
          this.FirstLoadAddAddressComponent();
          this.closePopUp.emit(data);
        }
        if (data.Status === 'Error') {
          this.alert.showAlertDanger(['Failed To Add! Please Try After Sometime !!'], 5000);
        }
        this.hideLoader();
      },
        (err) => {
          this.hideLoader();
        });
  }

  setDropDown(model) {
    this.searchModelUtil.assignValueFromApi(this.addressModel, model);
    this.ddOptionsStateData = new DropdownDataModel(model.stateList, model.state);
    this.ddOptionsSpecialTaxID = new DropdownDataModel(model.taxFilterList, model.taxID);
    this.SpecialTaxIDArray = model.taxFilterList;
    this.ddOptionsAddressType = new DropdownDataModel(model.addressTypeList, model.addressType);
    this.ddOptionsAddressStatus = new DropdownDataModel(model.addressStatusList, model.addressStatus);
  }

  FirstLoadAddAddressComponent() {
    this.loadDataFromApi(this.NAME_ADDRESS_ADD)
      .subscribe((firstLoadData) => {
        this.dropDownValue = firstLoadData.customerAddAttributeModel;
        this.customerGuard.effectivearraydata = firstLoadData.EffectiveReverseDate;
        // this.EffectiveReverseDate = firstLoadData.EffectiveReverseDate;
        this.dateRangeSplit();
      });
  }

  SpecialTaxIDEvent(e: any) {
    this.addressModel.taxID.value = e['display'];
    this.addressModel.specialTaxId.value = e['key'];
    this.taxIDFiels = true;
  }

  removeTextBoxValue() {
    this.addressModel.taxID.value = '';
    this.taxIDFiels = false;
  }

  RadioButtonChnage(evt) {
    this.customerTempAddressModel.futureOrTemp.value = evt.target.value;
  }

  fromdate(evt) {
    this.fromDateobj = evt;
  }

  todate(toevt) {
    this.toDateobj = toevt;
    if (toevt.epoc === 0) {
      this.toDateobj = undefined;
      this.customerTempAddressModel.to.value = '';
    }
  }

  dateRangeSplit() {
    let FutureEffectiveDate = [];
    let FutureReverseDate = [];
    if (this.EffectiveReverseDate.length !== 0) {
      this.EffectiveReverseDate.forEach(element => {
        const splittedarray = element.split('-');
        FutureEffectiveDate.push(splittedarray[0]);
        FutureReverseDate.push(splittedarray[1]);
      });
      this.FutureEffectiveReverseDate = {
        EffectiveDate: FutureEffectiveDate,
        ReverseDate: FutureReverseDate
      };
    }
  }

  dateCompairFunction(from: any, to: any) {
    const FDate = this.dateRearrange(from);
    const FromDate = new Date(FDate);
    let LDate: any = '';
    if (to !== '') {
      LDate = this.dateRearrange(to);
    }
    let toDate: any = '';
    if (LDate !== '') {
      toDate = new Date(LDate);
    }
    if (this.FutureEffectiveReverseDate.hasOwnProperty('EffectiveDate')) {
      const EffectivDateArray = this.FutureEffectiveReverseDate.EffectiveDate;
      this.checkDateRange(EffectivDateArray, FromDate, toDate);
      if (toDate) {
        const ReverseDateArray = this.FutureEffectiveReverseDate.ReverseDate;
        this.checkDateRange(ReverseDateArray, FromDate, toDate);
      }
    }
  }

  private checkDateRange(DateArray: any, FromDate: Date, toDate: Date) {
    DateArray.forEach(ele => {
      const compDate = this.dateRearrange(ele);
      const CompairDate = new Date(compDate);
      if (!toDate) {
        if (this.updateFlag) {
          if (CompairDate > FromDate) {
            this.DateCheck = true;
            this.DateErrorMessage = 'Date should not be equal and less than existing address dates!!!';
            console.log('Change the Date');
          }
        } else {
          if (CompairDate >= FromDate) {
            this.DateCheck = true;
            this.DateErrorMessage = 'Date should not be equal and less than existing address dates!!!';
            console.log('Change the Date');
          }
        }
      }
      if (toDate) {
        if (this.updateFlag) {
          if (CompairDate > FromDate && CompairDate < toDate) {
            this.DateCheck = true;
            this.DateErrorMessage = 'Date should not be equal and fall between the existing address dates!!!';
            console.log('Change the Date');
          }
        } else {
          if (ele === 'null') {
            this.DateCheck = true;
            this.DateErrorMessage = 'Date should not be equal and fall between the existing address dates!!!';
          } else {
            if (CompairDate >= FromDate && CompairDate <= toDate) {
              this.DateCheck = true;
              this.DateErrorMessage = 'Date should not be equal and fall between the existing address dates!!!';
              console.log('Change the Date');
            }
          }
        }
      }
    });
  }

  dateRearrange(date: any) {
    if (date !== null || date !== '') {
      const splittedDate = date.split('/');
      return splittedDate[1] + '/' + splittedDate[0] + '/' + splittedDate[2];
    }
  }
}
