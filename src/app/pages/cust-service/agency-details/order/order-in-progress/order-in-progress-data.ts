import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared/utility';


export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Remove',
            field: 'orderId',
            //   minWidth: ProjectUtils.ag_SetWidth(15),
            cellRenderer: function name() {
                  return '<i class="fa fa-remove"></i>';
            }
      },

      {
            headerName: 'Line',
            field: 'tagLine',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'Order Class',
            field: 'orderClass',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'Order Code',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },

      {
            headerName: 'Bundle QTY',
            field: 'bundleQty',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Order Qty',
            field: 'orderQty',
            minWidth: ProjectUtils.ag_SetWidth(20),
            // hide: true
      },
      {
            headerName: 'Ship Qty',
            field: 'shipQty',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //  cellRenderer: ProjectUtils.svgCsv
      },
      {
            headerName: 'Backord Qty',
            field: 'backordQty',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Amount Charged',
            field: 'amountcharged',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Currency',
            field: 'currency',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Delivery Method',
            field: 'deliveryMethod',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Billing Type',
            field: 'billingType',
            minWidth: ProjectUtils.ag_SetWidth(20),
            //   cellRenderer: ProjectUtils.svgExcel
      }
];
