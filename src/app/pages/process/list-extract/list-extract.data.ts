import { ColDef } from 'ag-grid';

export const columnDefsExtractListReports: Array<ColDef> = [
      {
            headerName: 'Id',
            //  minWidth: 100,
            cellRenderer: function (params: any) {
                  return '<input type="checkbox" />';

            }
      },
      {
            headerName: 'Order Class',
            field: 'process',
            //  minWidth: 200
      },
      {
            headerName: 'Description',
            field: 'status',
            //  minWidth: 200
      }
];
export const columnDefsRentalCategoryReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            minWidth: 100,
            cellRenderer: function (params: any) {
                  return '<input type="checkbox" />';

            }
      },
      {
            headerName: 'List Rental Category',
            field: 'process',
            minWidth: 200
      },
      {
            headerName: 'Description',
            field: 'status',
            minWidth: 400
      },
];
