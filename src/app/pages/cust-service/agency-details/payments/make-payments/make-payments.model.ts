import { BasicSearchModelI, BaseSearchModelI } from '../../../../../core/base';

export class MakePaymentsModel implements BaseSearchModelI {
      apiGridHeaderKay = 'tableHeaders';
      apiDatakey = 'OrderFilterDataList';

      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
      };
      currency: BasicSearchModelI = {
            value: 'GBP',
            apiKey: 'currency',
      };
      balancedue: BasicSearchModelI = {
            value: '',
            apiKey: 'balancedue',
      };
      payer: BasicSearchModelI = {
            value: '',
            apiKey: 'payer',
      };
      recipient: BasicSearchModelI = {
            value: '',
            apiKey: 'recipient',
      };
}

export class MakePaymentsSetDataModel extends MakePaymentsModel {
      apiDatakey = 'OrderFilterDataList';
      apiGridHeaderKay = 'tableHeaders';
      paymentType: BasicSearchModelI = {
            value: '',
            apiKey: 'paymentType',
      };
      exchangeRate: BasicSearchModelI = {
            value: 1,
            apiKey: 'exchangeRate',
      };
      baseAmount: BasicSearchModelI = {
            value: '',
            apiKey: 'baseAmount',
      };
      payAmount: BasicSearchModelI = {
            value: '',
            apiKey: 'payAmount',
      };
      balancedue: BasicSearchModelI = {
            value: '',
            apiKey: 'balancedue',
      };
      payer: BasicSearchModelI = {
            value: '',
            apiKey: 'payer',
      };
      recipient: BasicSearchModelI = {
            value: '',
            apiKey: 'recipient',
      };
      paymentClearStatus: BasicSearchModelI = {
            value: '',
            apiKey: 'paymentClearStatus',
      };
      paymentCurrency: BasicSearchModelI = {
            value: '',
            apiKey: 'paymentCurrency',
      };
      orderCurrency: BasicSearchModelI = {
            value: '',
            apiKey: 'orderCurrency',
      };
      payerCustomer: BasicSearchModelI = {
            value: '',
            apiKey: 'payerCustomer',
      };
      OverPayamount: BasicSearchModelI = {
            value: '',
            apiKey: 'OverPayamount',
      };
      overPaymentAccount: BasicSearchModelI = {
            value: '',
            apiKey: 'overPaymentAccount',
      };
      // paymentSeq: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'paymentSeq',
      // };
      // paymentAccountSeq: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'paymentAccountSeq',
      // };
      creditCardInfo: BasicSearchModelI = {
            value: '',
            apiKey: 'creditCardInfo',
      };
      creditCardStartDate: BasicSearchModelI = {
            value: '',
            apiKey: 'creditCardStartDate',
      };
      checkNumber: BasicSearchModelI = {
            value: '',
            apiKey: 'checkNumber',
      };
      expDate: BasicSearchModelI = {
            value: '',
            apiKey: 'expDate',
      };
      // cardVerificationValue: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'cardVerificationValue',
      // };
      creditCardIssueId: BasicSearchModelI = {
            value: '',
            apiKey: 'creditCardIssueId',
      };
      authDate: BasicSearchModelI = {
            value: '',
            apiKey: 'authDate',
      };
      authCode: BasicSearchModelI = {
            value: '',
            apiKey: 'authCode',
      };
      refNbr: BasicSearchModelI = {
            value: '',
            apiKey: 'refNbr',
      };
      clearDate: BasicSearchModelI = {
            value: '',
            apiKey: 'clearDate',
      };
      nSettleRetriesLeft: BasicSearchModelI = {
            value: '',
            apiKey: 'nSettleRetriesLeft',
      };
      nextSettleRetryDate: BasicSearchModelI = {
            value: '',
            apiKey: 'nextSettleRetryDate',
      };
      // effortNbr: BasicSearchModelI = {
      //       value: '',
      //       apiKey: 'effortNbr',
      // };
}
