import { BasicSearchKey, BaseSearchModelI } from '../../../core/base';

export class DocumentReferenceModel implements BaseSearchModelI {
      apiDatakey = 'documentReferenceList';
      operator = new BasicSearchKey('Operator', 'operator');
      assignedTo = new BasicSearchKey('assignedTo');
      batchTemplate = new BasicSearchKey('batchTemplate');
      description = new BasicSearchKey('description');
      active = new BasicSearchKey('active', '', false);
      closed = new BasicSearchKey('closed', '', false);
      customerService = new BasicSearchKey('customerService', '', false);
      batch = new BasicSearchKey('batch', '', false);
      import = new BasicSearchKey('import', 'import', false);
      internet = new BasicSearchKey('internet', 'internet', false);
}
