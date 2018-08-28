import { BasicSearchModelI, BaseSearchModelI } from '../../../../core/base';

export class PaymentsModel implements BaseSearchModelI {
      data: any;
      apiDatakey = 'allPayment';
      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
      };
      paymentSeq: BasicSearchModelI = {
            value: '',
            apiKey: 'paymentSeq',
      };
      dropbox: BasicSearchModelI = {
            value: '',
            apiKey: 'dropbox',
      };
      filterDropdown: BasicSearchModelI = {
            value: 0,
            apiKey: 'filterDropdown',
      };
}
