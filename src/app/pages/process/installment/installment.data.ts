import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared';

export const columnDefsBillingReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(25)
      },
      {
            headerName: 'ID',
            field: 'id',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Description',
            field: 'descripton',
            minWidth: ProjectUtils.ag_SetWidth(50)
      }
];
