import { BasicSearchModelI } from '../../../../../core/base';

export class PaymentsTransferModel {

      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
      };
      paymentSeq: BasicSearchModelI = {
            value: '',
            apiKey: 'paymentSeq',
      };
      recverCustomerId: BasicSearchModelI = {
            value: '',
            apiKey: 'recverCustomerId',
      };
}
