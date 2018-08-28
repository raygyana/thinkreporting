import { ColDef } from 'ag-grid';

export const columnDefsStartStopReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
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
            headerName: 'Order Class',
            field: 'oc',
            minWidth: 350
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: 400
      }
];
