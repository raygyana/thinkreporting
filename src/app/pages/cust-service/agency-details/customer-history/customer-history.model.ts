import { BasicSearchModelI, BaseSearchModelI } from '../../../../core/base';

export class CustomerHistoryModel implements BaseSearchModelI {

      apiDatakey = 'customerHistoryList';

      customerId: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'customerId',
            apiKey: 'customerId',
            placeholder: '',
            //  name: 'to'
      };
      historyFilter: BasicSearchModelI = {
            value: 100,
            defaultValue: null,
            label: 'historyFilter',
            apiKey: 'historyFilter',
            placeholder: '',
            //  name: 'to'
      };
}
