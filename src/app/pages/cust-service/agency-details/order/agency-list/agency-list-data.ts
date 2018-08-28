import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared/utility';

export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'agencyCode',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.selecticonredio('rdbuttonagency')
      },

      {
            headerName: 'acceptOrd',
            field: 'acceptOrd',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'agencyCode',
            field: 'agencyCode',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'agencyPayTax',
            field: 'agencyPayTax',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'bundleDiscount',
            field: 'bundleDiscount',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'company',
            field: 'company',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'customerId',
            field: 'customerId',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'isBillTo',
            field: 'isBillTo',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //  cellRenderer: ProjectUtils.svgCsv
      },
      {
            headerName: 'isRenewTo',
            field: 'isRenewTo',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      }
      ,
      {
            headerName: 'newOrderCommission',
            field: 'newOrderCommission',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      },
      {
            headerName: 'paymentThershold',
            field: 'paymentThershold',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      },
      {
            headerName: 'remits',
            field: 'remits',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      },
      {
            headerName: 'renewalCommission',
            field: 'renewalCommission',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      },
      {
            headerName: 'taxPayedOnGross',
            field: 'taxPayedOnGross',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      }
];

