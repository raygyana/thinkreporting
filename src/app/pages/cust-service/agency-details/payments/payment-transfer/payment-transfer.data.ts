import { ColDef } from 'ag-grid';
import { BaseComponent, BaseService } from '../../../../../core/base';
import { ProjectUtils } from '../../../../../core/shared';

export const columnDefsPaymentsTransferReports: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.selecticonredio('rdbuttonodrlookup')
      },
      {
            headerName: 'Last Name',
            field: 'lname',
            minWidth: ProjectUtils.ag_SetWidth(20),
      },
      {
            headerName: 'First Name',
            field: 'fname',
            minWidth: ProjectUtils.ag_SetWidth(10),
      },
      {
            headerName: 'Address',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'City',
            field: 'city',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Zip/Postal',
            field: 'zip',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Phone',
            field: 'phone',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Customer',
            field: 'customer_id',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Type',
            field: 'address_type',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Status',
            field: 'address_status',
            minWidth: ProjectUtils.ag_SetWidth(10)
      }
];

