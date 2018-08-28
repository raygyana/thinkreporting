import { BasicSearchModelI, BasicSearchKey } from '../../../../../core/base';

export class PaymentThresholdHandlingModel {
      orderClass: BasicSearchKey = new BasicSearchKey('orderClass');
      customerNbr: BasicSearchKey = new BasicSearchKey('customerNbr');
      term: BasicSearchKey = new BasicSearchKey('term');
      orderNbr: BasicSearchKey = new BasicSearchKey('orderNbr');
      startDate: BasicSearchKey = new BasicSearchKey('startDate');
      lineItem: BasicSearchKey = new BasicSearchKey('lineItem');

      sourceCode: BasicSearchKey = new BasicSearchKey('sourceCode');
      orderDate: BasicSearchKey = new BasicSearchKey('orderDate');
      orderAmount: BasicSearchKey = new BasicSearchKey('orderAmount');
      orderAmtCurrency: BasicSearchKey = new BasicSearchKey('orderAmtCurrency');
      totalAmount: BasicSearchKey = new BasicSearchKey('totalAmount');
      totalAmtCurrency: BasicSearchKey = new BasicSearchKey('totalAmtCurrency');
      underPaymentOption: BasicSearchKey = new BasicSearchKey('underPaymentOption');
      overPaymentOption: BasicSearchKey = new BasicSearchKey('overPaymentOption');
      expirationDateProrated: BasicSearchKey = new BasicSearchKey('expirationDateProrated');
      expirationDateOriginal: BasicSearchKey = new BasicSearchKey('expirationDateOriginal');
      numberofDaysOriginal: BasicSearchKey = new BasicSearchKey('numberofDaysOriginal');
      numberofDaysProrated: BasicSearchKey = new BasicSearchKey('numberofDaysProrated');
      subscriptionProrated: BasicSearchKey = new BasicSearchKey('subscriptionProrated');
      subscriptionOriginal: BasicSearchKey = new BasicSearchKey('subscriptionOriginal');
      deliveryOriginal: BasicSearchKey = new BasicSearchKey('deliveryOriginal');
      deliveryProrated: BasicSearchKey = new BasicSearchKey('deliveryProrated');
      taxOriginal: BasicSearchKey = new BasicSearchKey('taxOriginal');
      taxProrated: BasicSearchKey = new BasicSearchKey('taxProrated');



}
