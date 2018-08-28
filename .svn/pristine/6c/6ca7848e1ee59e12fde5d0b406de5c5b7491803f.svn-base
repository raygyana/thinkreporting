import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../core/shared/utility';

export const columnDefsDocumentReference: Array<ColDef> = [

      {
            headerName: 'Action',
            field: 'action',
            cellRenderer: function (params: any) {
                  return `<div class="dropdown show">
                  <div class="cursor-pntr" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="fa fa-ellipsis-v text-primary"></i>
                  </div>
                  <div class="dropdown-menu hide" aria-labelledby="dropdownMenuButton" x-placement="top-start" style="position: absolute; transform: translate3d(0px, -48px, 0px); top: 0px; left: 0px; will-change: transform;">
                    <a class="dropdown-item">Edit</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Renew</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Add To Order</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Payments</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Cancel Order</a>
                  </div>
                </div>`;
            }

      }

      , {
            headerName: 'Order Id',
            field: 'orderId',

            // cellRenderer: function (params: any) {
            //       //console.log('params', params);
            //       return '<u >' + params.value + '</u>';
            // }
      },
      //  {
      //       headerName: 'Renew',
      //       field: 'orderId',
      //       cellRenderer: function (params: any) { return '<i class="fa fa-refresh"></i>'; }

      //       //  cellRenderer: ProjectUtils.selecticonredio('rdbuttonodrlookup')

      // }, 

      {
            headerName: 'Renewal Order Id',
            field: 'renewalOrderId',


      }, {
            headerName: 'Line',
            field: 'line',

            //  cellRenderer: ProjectUtils.svgZip
      }, {
            headerName: 'Start Date',
            field: 'startDate',


      }, {
            headerName: 'Expire Date',
            field: 'expireDate',


      }, {
            headerName: 'Order Date',
            field: 'date',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }, {
            headerName: 'Order Class',
            field: 'orderClass',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }, {
            headerName: 'Order Code',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(20)
      }, {
            headerName: 'Order Item Type',
            field: 'orderItemType',

            // hide: true
      }, {
            headerName: 'Order Status',
            field: 'orderStatus',

            //  cellRenderer: ProjectUtils.svgCsv
      }, {
            headerName: 'Pay Status',
            field: 'payStatus',

            //   cellRenderer: ProjectUtils.svgExcel
      }, {
            headerName: 'Qty',
            field: 'qty',

            //  cellRenderer: ProjectUtils.svgZip
      }, {
            headerName: 'Subscription Id',
            field: 'subscripId',

            //   cellRenderer: ProjectUtils.svgExcel
      }, {
            headerName: 'Charged',
            field: 'charged',

            //  cellRenderer: ProjectUtils.svgZip
      }, {
            headerName: 'Bundle QTY',
            field: 'bundleQTY',

            //   cellRenderer: ProjectUtils.svgExcel
      }, {
            headerName: 'Agency',
            field: 'agency',

            //  cellRenderer: ProjectUtils.svgZip
      }, {
            headerName: 'liabilty',
            field: 'Liabilty',

            //  cellRenderer: ProjectUtils.svgZip
      }
];
