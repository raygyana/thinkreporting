import { BasicSearchModelI, BasicSearchKey } from '../../../core/base';

export class AddCustomerModel {

      apiDatakey = 'duplicateCustomer';
      documentReferenceId: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'documentReferenceId',
            apiKey: 'documentReferenceId',
            placeholder: 'documentReferenceId'
      };
      userCode: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'userCode',
            apiKey: 'userCode',
            placeholder: 'userCode'
      };

      state: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'State',
            apiKey: 'State',
            placeholder: 'State'
      };


      listRental: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'listRental',
            apiKey: 'listRental',
            placeholder: 'listRental'
      };
      customerCategory: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'customerCategory',
            apiKey: 'customerCategory',
            placeholder: 'customerCategory'
      };
      sales: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Sales',
            apiKey: 'Sales',
            placeholder: 'Sales'
      };
      addressStatus: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'addressStatus',
            apiKey: 'addressStatus',
            placeholder: 'addressStatus'
      };
      creditStatus: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'creditStatus',
            apiKey: 'creditStatus',
            placeholder: 'creditStatus'
      };

      paymentThershold: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'paymentThershold',
            apiKey: 'paymentThershold',
            placeholder: 'paymentThershold'
      };


      salutation: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'salutation',
            apiKey: 'salutation',
            placeholder: 'Salutation'
      };

      fName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'fName',
            apiKey: 'fName',
            placeholder: 'First Name'
      };
      lName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: ' lName',
            apiKey: 'lName',
            placeholder: 'Last Name',
            // name: 'from'
      };
      initial: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'initial',
            apiKey: 'initial',
            placeholder: 'Select Batch Template',
            // name: 'from'
      };
      suffix: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'suffix',
            apiKey: 'suffix',
            placeholder: '',
            //  name: 'to'
      };
      title: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'title',
            apiKey: 'title',
            placeholder: '',
            //  name: 'to'
      };

      company: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: ' company',
            apiKey: 'company',
            placeholder: '',
            //  name: 'to'
      };

      department: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'department',
            apiKey: 'department',
            placeholder: '',
            //  name: 'to'
      };
      address1: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'address1',
            apiKey: 'address1',
            placeholder: '',
            //  name: 'to'
      };

      address2: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'address2',
            apiKey: 'address2',
            placeholder: '',
            //  name: 'to'
      };
      address3: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'address3',
            apiKey: 'address3',
            placeholder: '',
            //  name: 'to'
      };
      city: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'city',
            apiKey: 'city',
            placeholder: '',
            //  name: 'to'
      };
      zip: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'zip',
            apiKey: 'zip',
            placeholder: '',
            //  name: 'to'
      };
      country: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'country',
            apiKey: 'country',
            placeholder: '',
            //  name: 'to'
      };
      county: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'county',
            apiKey: 'county',
            placeholder: '',
            //  name: 'to'
      };
      phone1: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'phone1',
            apiKey: 'phone1',
            placeholder: '',
            //  name: 'to'
      };
      phone2: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'phone2',
            apiKey: 'phone2',
            placeholder: '',
            //  name: 'to'
      };

      fax: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'fax',
            apiKey: 'fax',
            placeholder: '',
            //  name: 'to'
      };
      email: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'email',
            apiKey: 'email',
            placeholder: '',
            //  name: 'to'
      };
      addressType: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'addressType',
            apiKey: 'addressType',
            placeholder: '',
            //  name: 'to'
      };

      taxID: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'taxID',
            apiKey: 'taxID',
            placeholder: '',
            //  name: 'to'
      };
      specialTaxId: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'specialTaxId',
            apiKey: 'specialTaxId',
            placeholder: '',
            //  name: 'to'
      };

      institutionalIdentifier: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'institutionalIdentifier',
            apiKey: 'institutionalIdentifier',
            placeholder: '',
            //  name: 'to'
      };
      parentInstitutionalIdentifier: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'parentInstitutionalIdentifier',
            apiKey: 'parentInstitutionalIdentifier',
            placeholder: '',
            //  name: 'to'
      };
      isAgency: BasicSearchModelI = {
            value: false,
            defaultValue: null,
            label: 'isAgency',
            apiKey: 'isAgency',
            placeholder: '',
            //  name: 'to'
      };

      customerAddressSeq: BasicSearchKey = new BasicSearchKey('customerAddressSeq');
}


export class AddAgecyModel {

      agencyCode: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'agencyCode',
            apiKey: 'agencyCode'
      };
      agencyName: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'agencyName',
            apiKey: 'agencyName'
      };
      paymentThershold: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'paymentThershold',
            apiKey: 'paymentThershold'
      };
      bundleDiscount: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'bundleDiscount',
            apiKey: 'bundleDiscount'
      };
      isRenewTo: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'isRenewTo',
            apiKey: 'isRenewTo'
      };
      isBillTo: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'isBillTo',
            apiKey: 'isBillTo'
      };

      agencyPayTax: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'agencyPayTax',
            apiKey: 'agencyPayTax'
      };
      taxPayedOnGross: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'taxPayedOnGross',
            apiKey: 'taxPayedOnGross'
      };
      newOrderCommission: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'newOrderCommission',
            apiKey: 'newOrderCommission'
      };
      remits: BasicSearchModelI = {
            value: '',
            label: '',
            apiKey: 'remits',
            placeholder: '',
            //  name: 'to'
      };
      renewalCommission: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'renewalCommission',
            apiKey: 'renewalCommission',
            placeholder: 'Select Batch Template',
            // name: 'from'
      };
}
