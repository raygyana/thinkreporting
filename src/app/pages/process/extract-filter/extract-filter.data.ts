import { ColDef } from 'ag-grid';

export const columnDefsBillingDescriptionReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            field: 'checkbox',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: 200
      },
      {
            headerName: 'Id',
            field: 'oc_id',
            minWidth: 200
      },
      {
            headerName: 'Extract',
            field: 'oc',
            minWidth: 350
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: 400
      }
];
