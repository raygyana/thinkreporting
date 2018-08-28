import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared';

export const columnDefsBillingReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Billing',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(45)
      },
      {
            headerName: 'Extract',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(40)
      }
];
export const columnDefsBillingOrderClassReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'ID',
            field: 'oc_id',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Order',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(40)
      },
];
export const columnDefsBillingEffortsReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            checkboxSelection: true,
            headerCheckboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Effort',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Method',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Interval',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Action',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Send To',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Send Bill',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Output',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Attachment',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Message',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Supress Email',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }
];
