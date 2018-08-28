import { ColDef } from 'ag-grid';
import { BaseComponent, BaseService } from '../../../../core/base';
import { ProjectUtils, CustomerServicesUrls } from '../../../../core/shared';

export const columnDefsPaymentsReports: Array<ColDef> = [
      {
            headerName: 'Payment',
            field: 'paymentSeq',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Cancelled',
            cellRenderer: ProjectUtils.setSelect,
            editable: false,
            field: 'val',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Date',
            field: 'creationDate',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'User Code',
            field: 'userCode',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Pay Type',
            field: 'paymentType',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Trasaction',
            field: 'transactionTypeDesc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Reason',
            field: 'transactionReason',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Currency',
            field: 'currency',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Amount Paid',
            field: 'payAmount',
            cellRenderer: ProjectUtils.decimaltwoplace,
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Clear Status',
            field: 'paymentClearStatusDesc',
            minWidth: ProjectUtils.ag_SetWidth(20),
      },
      {
            headerName: 'Check',
            field: 'checkNumber',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }
];

