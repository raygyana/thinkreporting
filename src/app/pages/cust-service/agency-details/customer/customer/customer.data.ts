import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared';

export const columnDefsCustomerEdit: Array<ColDef> = [
      {
            headerName: 'History',
            field: 'addrSeq',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.historyicon
      },
      {
            headerName: 'Type',
            field: 'addressType',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address1',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address2',
            field: 'address2',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address3',
            field: 'address3',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'City',
            field: 'city',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Zip',
            field: 'zip',
            minWidth: ProjectUtils.ag_SetWidth(7),
      }
];

export const columnDefsTempAddCustomerEdit: Array<ColDef> = [
      {
            headerName: 'Delete',
            field: 'addrSeq',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.deleteButton
      },
      {
            headerName: 'Type',
            field: 'addressType',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Temp/Future',
            field: 'changeType',
            cellRenderer: ProjectUtils.changeAddType,
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Effective',
            field: 'effectiveDate',
            minWidth: ProjectUtils.ag_SetWidth(12)
            // cellRenderer: ProjectUtils.removeTimeStamp
      },
      {
            headerName: 'Reverse',
            field: 'reverseDate',
            minWidth: ProjectUtils.ag_SetWidth(12)
            // cellRenderer: ProjectUtils.removeTimeStamp
      },
      {
            headerName: 'Address',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address1',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address2',
            field: 'address2',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Address3',
            field: 'address3',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'City',
            field: 'city',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(7),
      },
      {
            headerName: 'Zip',
            field: 'zip',
            minWidth: ProjectUtils.ag_SetWidth(7),
      }
];
