import { ColDef } from 'ag-grid';
import { BaseComponent } from '../../../core/base/base.component';
import { ProjectUtils } from '../../../core/shared';

export const columnDefsAutoRenewalReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            minWidth: ProjectUtils.ag_SetWidth(2),
            checkboxSelection: true,
            headerCheckboxSelection: true,
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      },
      {
            headerName: 'Id',
            field: 'id',
            minWidth: ProjectUtils.ag_SetWidth(25),
      },
      {
            headerName: 'Order Class',
            field: 'orderClass',
            minWidth: ProjectUtils.ag_SetWidth(30),
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(33),
      }
];
