import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared/utility';

export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.selecticonredio('rdbuttonsclookup')
      },

      {
            headerName: 'Source Code',
            field: 'sourceCode',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },

      {
            headerName: 'Order Class',
            field: 'orderClass',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Source Code Type',
            field: 'sourceCodeType',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Generated',
            field: 'generated',
            minWidth: ProjectUtils.ag_SetWidth(10),
            // hide: true
      },
      {
            headerName: 'Offer',
            field: 'offer',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //  cellRenderer: ProjectUtils.svgCsv
      },
      {
            headerName: 'List',
            field: 'list',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //   cellRenderer: ProjectUtils.svgExcel
      }
];

