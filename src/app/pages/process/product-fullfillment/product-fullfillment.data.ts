
import { ColDef } from 'ag-grid';

export const columnDefsProductReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            headerCheckboxSelection: true,
            checkboxSelection: true,
            minWidth: 200
      },
      {
            headerName: 'Id',
            field: 'oc_id',
            minWidth: 250
      },
      {
            headerName: 'Order Class',
            field: 'oc',
            minWidth: 300
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: 380
      }
];
