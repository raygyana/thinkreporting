import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared/utility';

export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.selecticonredio('rdbuttonsubsdef')
      },

      {
            headerName: 'Subscr, Def',
            field: 'subscriptionDef',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },

      {
            headerName: 'Order Cd',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Media',
            field: 'media',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Edition',
            field: 'edition',
            minWidth: ProjectUtils.ag_SetWidth(10),
            // hide: true
      },
      {
            headerName: 'Category',
            field: 'subscriptionCategoryDescription',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //  cellRenderer: ProjectUtils.svgCsv
      },
      {
            headerName: 'Pub Rotation',
            field: 'pubRotationId',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //   cellRenderer: ProjectUtils.svgExcel
      }
];

