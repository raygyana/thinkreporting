import { BasicSearchModelI, BasicSearchKey } from '../../../../../core/base';

export class EditNotesModel {

      customerId: BasicSearchModelI = {
            value: '',
            apiKey: 'customerId',
      };
      noteType: BasicSearchModelI = {
            value: '',
            apiKey: 'noteType',
      };
      userCode: BasicSearchModelI = {
            value: '',
            apiKey: 'userCode',
      };
      note: BasicSearchModelI = {
            value: '',
            apiKey: 'note',
      };
}
