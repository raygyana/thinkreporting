import { ColDef } from 'ag-grid';

export const columnDefsBacsReports: Array<ColDef> = [
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
            minWidth: 380
      }
];
export const columnDefsBacsSelectedCurrencyReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: 200
      },
      {
            headerName: 'process',
            field: 'Category',
            minWidth: 300
      },
      {
            headerName: 'Description',
            field: 'status',
            minWidth: 300
      },
      {
            headerName: 'Symb',
            field: 'processType',
            minWidth: 350
      }
];
