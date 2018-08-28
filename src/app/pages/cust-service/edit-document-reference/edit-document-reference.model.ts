import { BasicSearchModelI } from '../../../core/base';

export class EditDocumentReferenceModel {

      operator: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'operator',
            apiKey: 'operator',
            placeholder: 'Select Operator',
            //   name: 'report'
      };
      description: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Description',
            apiKey: 'description',
            placeholder: '',
            //  name: 'to'
      };
      type: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Type',
            apiKey: 'type',
            placeholder: '',
            //  name: 'to'
      };

      active: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'Active',
            apiKey: 'active',
            placeholder: '',
            //  name: 'to'
      };
      id: BasicSearchModelI = {
            value: '',
            defaultValue: null,
            label: 'id',
            apiKey: 'referenceId',
            placeholder: '',
            //  name: 'to'
      };
}
