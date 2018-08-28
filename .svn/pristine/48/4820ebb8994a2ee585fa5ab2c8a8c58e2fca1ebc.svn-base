import { Injectable } from '@angular/core';
import { EditOrderModel } from './edit-order.model';
@Injectable()
export class EditOrderServiceService {

  constructor() { }


  assignValueFromApi(searchModel: any, apiDataModel) {
    const keys = Object.keys(searchModel);
    let apiValue = null;
    keys.forEach((key) => {
      if (typeof searchModel[key] === 'object') {
        apiValue = apiDataModel[searchModel[key].fillFromKey];

        if (apiValue === null || apiValue === undefined) {
          searchModel[key].value = '';
        } else {
          searchModel[key].value = apiValue.toString().trim();
        }
      }
    });
  }

  isDate(txtDate, separator) {
    let aoDate,           // needed for creating array and object
      ms,               // date in milliseconds
      month, day, year; // (integer) month, day and year
    // if separator is not defined then set '/'
    if (separator === undefined) {
      separator = '/';
    }
    // split input date to month, day and year
    aoDate = txtDate.split(separator);
    // array length should be exactly 3 (no more no less)
    if (aoDate.length !== 3) {
      return false;
    }
    // define month, day and year from array (expected format is m/d/yyyy)
    // subtraction will cast variables to integer implicitly
    month = aoDate[0] - 1; // because months in JS start from 0
    day = aoDate[1] - 0;
    year = aoDate[2] - 0;
    // test year range
    if (year < 1000 || year > 3000) {
      return false;
    }
    // convert input date to milliseconds
    ms = (new Date(year, month, day)).getTime();
    // initialize Date() object from milliseconds (reuse aoDate variable)
    aoDate = new Date();
    aoDate.setTime(ms);
    // compare input date and parts from Date() object
    // if difference exists then input date is not valid
    if (aoDate.getFullYear() !== year ||
      aoDate.getMonth() !== month ||
      aoDate.getDate() !== day) {
      return false;
    }
    // date is OK, return true
    return true;
  }

  // setModelData(editOrderModel: EditOrderModel, OrderItem: any) {

  //   editOrderModel.address1.value = OrderItem['address1'];
  //   editOrderModel.customerAddressSeq.value = OrderItem['customerAddressSeq'];

  //   editOrderModel.altCustomerAddress.value = OrderItem['altCustomerAddress'];
  //   editOrderModel.altFullNameTo.value = OrderItem['altFullNameTo'];
  //   editOrderModel.altShipCustomerId.value = OrderItem['altShipCustomerId'];
  //   editOrderModel.altShipCustomerAddressSeq.value = OrderItem['altShipCustomerAddressSeq'];
  //   editOrderModel.subscriptionDefId.value = OrderItem['subscriptionDefId'];
  //   editOrderModel.billToCustomerAddress.value = OrderItem['billToCustomerAddress'];
  //   editOrderModel.billToFullName.value = OrderItem['billToFullName'];
  //   editOrderModel.billToCustomerId.value = OrderItem['billToCustomerId'];
  //   editOrderModel.billToCustomerAddressSeq.value = OrderItem['billToCustomerAddressSeq'];

  //   editOrderModel.billDate.value = OrderItem['billDate'];
  //   editOrderModel.bundleQty.value = OrderItem['bundleQty'];
  //   editOrderModel.currency.value = OrderItem['currency'];
  //   editOrderModel.customerId.value = OrderItem['customerId'];
  //   editOrderModel.expireDate.value = OrderItem['expireDate'];
  //   editOrderModel.extendedDays.value = OrderItem['extendedDays'];

  //   editOrderModel.grossLocalAmount.value = parseFloat(OrderItem['grossLocalAmount']).toFixed(2);
  //   editOrderModel.grossBaseAmount.value = parseFloat(OrderItem['grossBaseAmount']).toFixed(2);
  //   editOrderModel.invoiceDate.value = OrderItem['invoiceDate'];
  //   editOrderModel.netBaseAmount.value = parseFloat(OrderItem['netBaseAmount']).toFixed(2);
  //   editOrderModel.netLocalAmount.value = parseFloat(OrderItem['netLocalAmount']).toFixed(2);
  //   editOrderModel.order_status.value = OrderItem['order_status'];
  //   editOrderModel.orderStatus.value = OrderItem['orderStatus'];
  //   editOrderModel.orderCode.value = OrderItem['orderCode'];
  //   editOrderModel.orderCodeDescription.value = OrderItem['orderCodeDescription'];
  //   editOrderModel.orderDate.value = OrderItem['orderDate'];
  //   editOrderModel.orderhdrId.value = OrderItem['orderhdrId'];
  //   editOrderModel.orderItemType.value = OrderItem['orderItemType'];
  //   editOrderModel.orderQty.value = OrderItem['orderQty'];
  //   editOrderModel.payment_status.value = OrderItem['payment_status'];
  //   editOrderModel.paymentStatus.value = OrderItem['paymentStatus'];
  //   editOrderModel.poNumber.value = OrderItem['poNumber'];
  //   editOrderModel.rateClassDescription.value = OrderItem['rateClassDescription'];
  //   editOrderModel.rateClassEffectiveDate.value = OrderItem['rateClassEffectiveDate'];
  //   editOrderModel.rateClassId.value = OrderItem['rateClassId'];

  //   editOrderModel.renewFullNameTo.value = OrderItem['renewFullNameTo'];
  //   editOrderModel.renewToCustomerAddress.value = OrderItem['renewToCustomerAddress'];
  //   editOrderModel.renewToCustomerId.value = OrderItem['renewToCustomerId'];
  //   editOrderModel.renewToCustomerAddressSeq.value = OrderItem['renewToCustomerAddressSeq'];

  //   editOrderModel.sourceCode.value = OrderItem['sourceCode'];
  //   editOrderModel.sourceCodeDescription.value = OrderItem['sourceCodeDescription'];
  //   editOrderModel.startDate.value = OrderItem['startDate'];
  //   editOrderModel.subscriptionDef.value = OrderItem['subscriptionDef'];
  //   editOrderModel.termDescription.value = OrderItem['termDescription'];
  //   editOrderModel.totalTaxBaseAmount.value = parseFloat(OrderItem['totalTaxBaseAmount']).toFixed(2);
  //   editOrderModel.totalTaxLocalAmount.value = parseFloat(OrderItem['totalTaxLocalAmount']).toFixed(2);
  //   editOrderModel.orderCodeID.value = OrderItem['orderCodeID'];
  //   editOrderModel.orderCodeType.value = OrderItem['orderCodeType'];
  //   editOrderModel.trialType.value = OrderItem['trialType'];
  //   editOrderModel.isProforma.value = OrderItem['isProforma'];
  //   editOrderModel.hasBeenRenewed.value = OrderItem['hasBeenRenewed'];
  //   editOrderModel.hasTax.value = OrderItem['hasTax'];
  //   editOrderModel.rateClassEffectiveSeq.value = OrderItem['rateClassEffectiveSeq'];
  //   editOrderModel.rotation.value = OrderItem['rotation'];
  //   editOrderModel.edition.value = OrderItem['edition'];

  //   editOrderModel.media.value = OrderItem['media'];
  //   editOrderModel.subscriptionCategoryId.value = OrderItem['subscriptionCategoryId'];
  //   editOrderModel.subscriptionCategoryDescription.value = OrderItem['subscriptionCategoryDescription'];
  //   editOrderModel.agencyRefNbr.value = OrderItem['agencyRefNbr'];
  //   editOrderModel.packageID.value = OrderItem['packageID'];
  //   editOrderModel.invoiceNo.value = OrderItem['invoiceNo'];
  //   editOrderModel.agencyName.value = OrderItem['agencyName'];
  //   editOrderModel.billingType.value = OrderItem['billingType'];
  //   editOrderModel.agencyCustomerId.value = OrderItem['agencyCustomerId'];
  //   editOrderModel.orderCategory.value = OrderItem['orderCategory'];
  //   editOrderModel.LocalAmount.value = (editOrderModel.netLocalAmount.value - editOrderModel.totalTaxLocalAmount.value).toFixed(2);
  //   editOrderModel.baseAmount.value = (editOrderModel.grossLocalAmount.value - editOrderModel.totalTaxLocalAmount.value).toFixed(2);
  // }

  public getupdateOrderparam(editOrderModel: EditOrderModel): string {

    const param = '&' + encodeURIComponent('billToCustomerId') + '=' + encodeURIComponent
      (editOrderModel.billToCustomerId.value)
      + '&' + encodeURIComponent('billToCustomerAddressSeq') + '=' + encodeURIComponent
        (editOrderModel.billToCustomerAddressSeq.value)
      + '&' + encodeURIComponent('orderhdrId') + '=' + encodeURIComponent
        (editOrderModel.orderhdrId.value)
      + '&' + encodeURIComponent('orderItemType') + '=' + encodeURIComponent
        (editOrderModel.orderItemType.value)
      + '&' + encodeURIComponent('orderQty') + '=' + encodeURIComponent
        (editOrderModel.orderQty.value)
      + '&' + encodeURIComponent('bundleQty') + '=' + encodeURIComponent
        (editOrderModel.bundleQty.value)
      + '&' + encodeURIComponent('grossBaseAmount') + '=' + encodeURIComponent
        (editOrderModel.grossBaseAmount.value)

      + '&' + encodeURIComponent('netBaseAmount') + '=' + encodeURIComponent
        (editOrderModel.netBaseAmount.value)
      + '&' + encodeURIComponent('customerAddressSeq') + '=' + encodeURIComponent
        (editOrderModel.customerAddressSeq.value)
      + '&' + encodeURIComponent('altShipCustomerId') + '=' + encodeURIComponent
        (editOrderModel.altShipCustomerId.value)
      + '&' + encodeURIComponent('altShipCustomerAddressSeq') + '=' + encodeURIComponent
        (editOrderModel.altShipCustomerAddressSeq.value)
      + '&' + encodeURIComponent('renewToCustomerId') + '=' + encodeURIComponent
        (editOrderModel.renewToCustomerId.value)
      + '&' + encodeURIComponent('renewToCustomerAddressSeq') + '=' + encodeURIComponent
        (editOrderModel.renewToCustomerAddressSeq.value)
      + '&' + encodeURIComponent('startDate') + '=' + encodeURIComponent
        (editOrderModel.startDate.value)
      + '&' + encodeURIComponent('expireDate') + '=' + encodeURIComponent
        (editOrderModel.expireDate.value)
      + '&' + encodeURIComponent('subscriptionDefId') + '=' + encodeURIComponent
        (editOrderModel.subscriptionDefId.value)
      + '&' + encodeURIComponent('orderStatus') + '=' + encodeURIComponent
        (editOrderModel.orderStatus.value)
      + '&' + encodeURIComponent('paymentStatus') + '=' + encodeURIComponent
        (editOrderModel.paymentStatus.value)
      + '&' + encodeURIComponent('rotation') + '=' + encodeURIComponent
        (editOrderModel.rotation.value)
      + '&' + encodeURIComponent('agencyCustomerId') + '=' + encodeURIComponent
        (editOrderModel.agencyCustomerId.value)
      + '&' + encodeURIComponent('agencyRefNbr') + '=' + encodeURIComponent
        (editOrderModel.agencyRefNbr.apiKey)
      + '&' + encodeURIComponent('orderCategory') + '=' + encodeURIComponent
        (editOrderModel.orderCategory.value)
      + '&' + encodeURIComponent('invoiceDate') + '=' + encodeURIComponent
        (editOrderModel.invoiceDate.value)
      + '&' + encodeURIComponent('currency') + '=' + encodeURIComponent
        (editOrderModel.currency.value)
      + '&' + encodeURIComponent('rateClassId') + '=' + encodeURIComponent
        (editOrderModel.rateClassId.value)
      + '&' + encodeURIComponent('rateClassEffectiveSeq') + '=' + encodeURIComponent
        (editOrderModel.rateClassEffectiveSeq.value)
      + '&' + encodeURIComponent('totalTaxLocalAmount') + '=' + encodeURIComponent
        (editOrderModel.totalTaxLocalAmount.value)
      + '&' + encodeURIComponent('totalTaxBaseAmount') + '=' + encodeURIComponent
        (editOrderModel.totalTaxBaseAmount.value)
      + '&' + encodeURIComponent('grossLocalAmount') + '=' + encodeURIComponent
        (editOrderModel.grossLocalAmount.value)
      + '&' + encodeURIComponent('netLocalAmount') + '=' + encodeURIComponent
        (editOrderModel.netLocalAmount.value)
      + '&' + encodeURIComponent('manualDiscAmtLocal') + '=' + encodeURIComponent
        (editOrderModel.manualDiscAmtLocal.value)
      + '&' + encodeURIComponent('manualDiscAmtBase') + '=' + encodeURIComponent
        (editOrderModel.manualDiscAmtBase.value)
      + '&' + encodeURIComponent('manualDiscPercentage') + '=' + encodeURIComponent
        (editOrderModel.manualDiscPercentage.value);

    return param;
  }



}
