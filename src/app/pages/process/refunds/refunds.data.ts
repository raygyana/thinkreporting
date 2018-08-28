import { ColDef } from 'ag-grid';

export const columnDefsRefundReports: Array<ColDef> = [
      {
            headerName: 'Id',
            minWidth: 100,
            headerCheckboxSelection: true,
            checkboxSelection: true
      },
      {
            headerName: 'Order Class',
            field: 'oc',
            minWidth: 400
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: 700
      }
];
export const columnDefsRefundPaymentTypeReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            minWidth: 200,
            headerCheckboxSelection: true,
            checkboxSelection: true
      },
      {
            headerName: 'Payment',
            field: 'process',
            minWidth: 400
      },
      {
            headerName: 'Description',
            field: 'status',
            minWidth: 600
      },
];
export const columnDefsRefundCurrenciesReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            minWidth: 100,
            headerCheckboxSelection: true,
            checkboxSelection: true
      },
      {
            headerName: 'Code',
            field: 'process',
            minWidth: 300
      },
      {
            headerName: 'Description',
            field: 'processType',
            minWidth: 400
      },
      {
            headerName: 'Symb',
            field: 'status',
            minWidth: 400
      },
];
