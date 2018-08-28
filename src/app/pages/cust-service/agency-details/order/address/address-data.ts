import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../../../core/shared/utility';

export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'customer_id',
            minWidth: ProjectUtils.ag_SetWidth(10),
            cellRenderer: ProjectUtils.selecticonredio('rdbuttonaddress')
      },

      {
            headerName: 'Customer Id',
            field: 'customer_id',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Customer Address Seq',
            field: 'customer_address_seq',
            minWidth: ProjectUtils.ag_SetWidth(15),
            // hide: true
      },
      {
            headerName: 'Address Type',
            field: 'address_type',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Address',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(40)
      },

      {
            headerName: 'Address1',
            field: 'address1',
            minWidth: ProjectUtils.ag_SetWidth(40)
      },
      {
            headerName: 'State',
            field: 'state',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Zip',
            field: 'zip',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Phone',
            field: 'phone',
            minWidth: ProjectUtils.ag_SetWidth(10),
            //  cellRenderer: ProjectUtils.svgCsv
      },

      {
            headerName: 'City',
            field: 'city',
            minWidth: ProjectUtils.ag_SetWidth(10)
      }
];

