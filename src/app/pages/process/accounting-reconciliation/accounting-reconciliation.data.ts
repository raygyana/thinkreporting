import { ColDef } from 'ag-grid';

export const columnDefsAccountingReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            // field: 'Category',
            minWidth: 200,
            checkboxSelection: true,
            headerCheckboxSelection: true
      },
      {
            headerName: 'Profit Centre',
            field: 'profitCentre',
            minWidth: 400
      },
      {
            headerName: 'Description',
            field: 'Adescription',
            minWidth: 600
      }
];
