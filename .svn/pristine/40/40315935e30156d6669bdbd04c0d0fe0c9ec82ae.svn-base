import { ColDef } from 'ag-grid';

import { ProjectUtils } from '../../../core/shared';

export const columnDefsLabelReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            field: 'checkbox',
            minWidth: ProjectUtils.ag_SetWidth(2),
            headerCheckboxSelection: true,
            checkboxSelection: true,
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      },
      {
            headerName: 'Id',
            field: 'oc_id',
            minWidth: ProjectUtils.ag_SetWidth(25),
      },
      {
            headerName: 'Order Class',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(30),
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(33),
      }
];
