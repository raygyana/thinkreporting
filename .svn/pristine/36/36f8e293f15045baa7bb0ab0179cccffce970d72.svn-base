import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BaseService } from '../../../../../core/base/base.service';
import { ProcessUrls, CustomerServicesUrls, ProjectUtils } from '../../../../../core/shared';

import { Subject } from 'rxjs';

@Injectable()
export class DataService {

      // private menuFlag = new Subject<any>();

      private resultData = [];
      // setdata(orderCodeId, orderCodeType, customerId, sourceCodeId, subscriptionId) {


      //       const paramsBody = '&' + encodeURIComponent('orderCodeId') + '=' + encodeURIComponent(orderCodeId.toString())
      //             + '&' + encodeURIComponent('orderCodeType') + '=' + encodeURIComponent(orderCodeType.toString())
      //             + '&' + encodeURIComponent('customerId') + '=' + encodeURIComponent(customerId.toString())
      //             + '&' + encodeURIComponent('sourceCodeId') + '=' + encodeURIComponent(sourceCodeId.toString())
      //             + '&' + encodeURIComponent('subscriptionId') + '=' + encodeURIComponent(subscriptionId.toString());

      //       console.log('paramsBody', paramsBody);
      //       const url = CustomerServicesUrls.TK_ORDER_IN_PROGRESS;
      //       return this.getDataFromAPI(url, paramsBody);





      // }

      setData(data: any) {
            this.resultData = data;
      }

      getdata() {
            return this.resultData;
      }
}

