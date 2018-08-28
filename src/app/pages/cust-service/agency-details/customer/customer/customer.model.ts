import { BasicSearchModelI, BasicSearchKey } from '../../../../../core/base';

export class CustomerModel {
      apiDatakey = 'customerAddAttributeModel';
      lName: BasicSearchModelI = {
            value: '',
            apiKey: 'lName',
            fillFromKey: 'lName'
      };
      fName: BasicSearchModelI = {
            value: '',
            apiKey: 'fName',
            fillFromKey: 'fName'
      };
      oldCustomerId: BasicSearchModelI = {
            value: '',
            apiKey: 'oldCustomerId',
            fillFromKey: 'oldCustomerId'
      };
      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
            fillFromKey: 'customerId'
      };
      address1: BasicSearchModelI = {
            value: '',
            apiKey: 'address1',
            fillFromKey: 'address1'
      };
      address2: BasicSearchModelI = {
            value: '',
            apiKey: 'address2',
            fillFromKey: 'address2'
      };
      addressStatus: BasicSearchModelI = {
            value: '',
            apiKey: 'addressStatus',
            fillFromKey: 'addressStatus'
      };
      // addressType: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'addressType',
      //       fillFromKey: 'addressType'
      // };
      creationDate: BasicSearchModelI = {
            value: '',
            apiKey: 'creationDate',
            fillFromKey: 'creationDate'
      };
      email: BasicSearchModelI = {
            value: '',
            apiKey: 'email',
            fillFromKey: 'email'
      };
      customerCategory: BasicSearchModelI = {
            value: '',
            apiKey: 'customerCategory',
            fillFromKey: 'customerCategory'
      };
      creditStatus: BasicSearchModelI = {
            value: '',
            apiKey: 'creditStatus',
            fillFromKey: 'creditStatus'
      };
      // creditStatusList: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'creditStatusList',
      //       fillFromKey: 'creditStatusList'
      // };
      defaultAddress: BasicSearchModelI = {
            value: '',
            apiKey: 'defaultAddress',
            fillFromKey: 'defaultAddress'
      };
      // defaultAddressList: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'defaultAddressList',
      //       fillFromKey: 'defaultAddressList'
      // };
      zip: BasicSearchModelI = {
            value: '',
            apiKey: 'zip',
            fillFromKey: 'zip'
      };
      listRental: BasicSearchModelI = {
            value: '',
            apiKey: 'listRental',
            fillFromKey: 'listRental'
      };
      // listRentalList: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'listRentalList',
      //       fillFromKey: 'listRentalList'
      // };

      institutionalIdentifier: BasicSearchModelI = {
            value: '',
            apiKey: 'institutionalIdentifier',
            fillFromKey: 'institutionalIdentifier'
      };
      parentInstitutionalIdentifier: BasicSearchModelI = {
            value: '',
            apiKey: 'parentInstitutionalIdentifier',
            fillFromKey: 'parentInstitutionalIdentifier'
      };
      billTo: BasicSearchModelI = {
            value: '',
            apiKey: 'billTo',
            fillFromKey: 'billTo'
      };
      renewTo: BasicSearchModelI = {
            value: '',
            apiKey: 'renewTo',
            fillFromKey: 'renewTo'
      };
      salutation: BasicSearchModelI = {
            value: '',
            apiKey: 'salutation',
            fillFromKey: 'salutation'
      };
      initial: BasicSearchModelI = {
            value: '',
            apiKey: 'initial',
            fillFromKey: 'initial'
      };
      suffix: BasicSearchModelI = {
            value: '',
            apiKey: 'suffix',
            fillFromKey: 'suffix'
      };
      company: BasicSearchModelI = {
            value: '',
            apiKey: 'company',
            fillFromKey: 'company'
      };
      saleRep: BasicSearchModelI = {
            value: '',
            apiKey: 'saleRep',
            fillFromKey: 'saleRep'
      };
      title: BasicSearchModelI = {
            value: '',
            apiKey: 'title',
            fillFromKey: 'title'
      };
      city: BasicSearchModelI = {
            value: '',
            apiKey: 'city',
            fillFromKey: 'city'
      };
      state: BasicSearchModelI = {
            value: '',
            apiKey: 'state',
            fillFromKey: 'state'
      };
      defaultAddressBillTo: BasicSearchModelI = {
            value: '',
            apiKey: 'defaultAddressBillTo',
            fillFromKey: 'defaultAddressBillTo'
      };

      defaultAddressRenewTo: BasicSearchModelI = {
            value: '',
            apiKey: 'defaultAddressRenewTo',
            fillFromKey: 'defaultAddressRenewTo'
      };
      sales: BasicSearchModelI = {
            value: '',
            apiKey: 'sales',
            fillFromKey: 'sales'
      };
      // salesRepresentativeList: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'salesRepresentativeList',
      //       fillFromKey: 'salesRepresentativeList'
      // };
}

export class CustomerApiKeyModel {
      apiDatakey = 'addressDetail';
}

export class CustomerAddressModel {
      fName: BasicSearchKey = new BasicSearchKey('fName');
      address1: BasicSearchKey = new BasicSearchKey('address1');
      city: BasicSearchKey = new BasicSearchKey('city');
      state: BasicSearchKey = new BasicSearchKey('state');
      zip: BasicSearchKey = new BasicSearchKey('zip');
}

export class CustomerEditModel {
      billTo: BasicSearchKey = new BasicSearchKey('billTo');
      company: BasicSearchKey = new BasicSearchKey('company');
      creationDate: BasicSearchKey = new BasicSearchKey('creationDate');
      creditStatus: BasicSearchKey = new BasicSearchKey('creditStatus');
      customerCategory: BasicSearchKey = new BasicSearchKey('customerCategory');
      customerId: BasicSearchKey = new BasicSearchKey('customerId');
      documentReferenceId: BasicSearchKey = new BasicSearchKey('documentReferenceId');
      defaultAddress: BasicSearchKey = new BasicSearchKey('defaultAddress');
      email: BasicSearchKey = new BasicSearchKey('email');
      fName: BasicSearchKey = new BasicSearchKey('fName');
      initial: BasicSearchKey = new BasicSearchKey('initial');
      institutionalIdentifier: BasicSearchKey = new BasicSearchKey('institutionalIdentifier');
      lName: BasicSearchKey = new BasicSearchKey('lName');
      listRental: BasicSearchKey = new BasicSearchKey('listRental');
      oldCustomerId: BasicSearchKey = new BasicSearchKey('oldCustomerId');
      parentInstitutionalIdentifier: BasicSearchKey = new BasicSearchKey('parentInstitutionalIdentifier');
      renewTo: BasicSearchKey = new BasicSearchKey('renewTo');
      sales: BasicSearchKey = new BasicSearchKey('sales');
      salutation: BasicSearchKey = new BasicSearchKey('salutation');
      suffix: BasicSearchKey = new BasicSearchKey('suffix');
      title: BasicSearchKey = new BasicSearchKey('title');
      userCode: BasicSearchKey = new BasicSearchKey('userCode');
}
