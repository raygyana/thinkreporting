import { ColDef } from 'ag-grid';

export const columnDefsCounterReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            // field: 'Category',
            minWidth: 100,
      },
      {
            headerName: 'Audit Type',
            field: 'audit_report',
            minWidth: 400
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: 630
      }
];
