
import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared';

export const columnDefsProductReports: Array<ColDef> = [
      // {
      //       headerName: '',
      //       checkboxSelection: true,
      //       headerCheckboxSelection: true,
      //       minWidth: ProjectUtils.ag_SetWidth(2),
      // },
      {
            headerName: 'Options',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: function (params: any) {
                  console.log('columnDefsProductReports>params', params);
                  return '<u id="OpenPopup" >Open</u>&nbsp;&nbsp; <u>Delete</u>&nbsp;&nbsp; <u>Submit Job</u>';
            }
      },
      {
            headerName: 'Description',
            field: 'process',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Process Type',
            field: 'processType',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },

      {
            headerName: 'Status',
            field: 'status',
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' },
            minWidth: ProjectUtils.ag_SetWidth(30),

      }
];
