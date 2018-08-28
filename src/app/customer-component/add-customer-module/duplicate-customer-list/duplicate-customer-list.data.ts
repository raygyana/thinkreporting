import { ColDef } from 'ag-grid';
import { ProjectUtils, CustomerServicesUrls } from '../../../core/shared';

export const columnDefsDuplicateCustomer: Array<ColDef> = [
      {
            headerName: 'Customer ID',
            field: 'customer_id',
            minWidth: ProjectUtils.ag_SetWidth(15),
            cellRenderer: ProjectUtils.html.anchorTag
      },
      {
            headerName: 'First Name',
            field: 'fname',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Last Name',
            field: 'lname',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Department',
            field: 'department',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Address',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'City',
            field: 'city',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'ZIP',
            field: 'zip',
            minWidth: ProjectUtils.ag_SetWidth(15)
      }
];

