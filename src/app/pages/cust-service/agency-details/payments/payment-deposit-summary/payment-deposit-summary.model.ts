import { BasicSearchModelI } from '../../../../../core/base';

export class DepositPaymentsModel {

      apiDatakey = 'depositSummaryList';
      apikey = '';
      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
      };
      depositBalance: BasicSearchModelI = {
            value: '',
            apiKey: 'depositBalance',
      };
      currency: BasicSearchModelI = {
            value: '',
            apiKey: 'currency',
      };
      payAmount: BasicSearchModelI = {
            value: '',
            apiKey: 'payAmount',
      };
}



