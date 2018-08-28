
import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared';

export const columnDefsRenewalDescReports: Array<ColDef> = [
      {
            headerName: 'CheckBox',
            headerCheckboxSelection: true,
            checkboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(30),
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      },
      {
            headerName: 'Id',
            field: 'oc_id',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Order Class',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(30)
      }
];
export const columnDefsRenewalDefinitionReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            headerCheckboxSelection: true,
            checkboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10),
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      },
      {
            headerName: 'Renewal',
            field: 'renewal',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Type',
            field: 'type',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Extract',
            field: 'extraxt',
            minWidth: ProjectUtils.ag_SetWidth(40)
      }
];

export const columnDefsRenewalOrderClassReports: Array<ColDef> = [
      {
            headerName: 'Ind',
            headerCheckboxSelection: true,
            checkboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10),
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      },
      {
            headerName: 'Id',
            field: 'oc_id',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Order Class',
            field: 'oc',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(40)
      }
];

export const columnDefsRenewalEffortsReports: Array<ColDef> = [
      // {
      //       headerName: 'Ind',
      //       headerCheckboxSelection: true,
      //       checkboxSelection: true,
      //       minWidth: ProjectUtils.ag_SetWidth(10),
      //       filter: 'agTextColumnFilter',
      //       filterParams: { apply: true, newRowsAction: 'keep' }
      // },


      {
            headerName: 'Effort',
            field: 'effort',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },


      {
            headerName: 'mMethod',
            field: 'method',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'No Iss./Days',
            field: 'no_of_days',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Effort Type',
            field: 'effort_type',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Send To',
            field: 'send_to',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Pricing',
            field: 'pricing',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Output',
            field: 'output',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Attachment',
            field: 'attachment',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },

      {
            headerName: 'Massage',
            field: 'massage',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Suppress Email',
            headerCheckboxSelection: true,
            checkboxSelection: true,
            minWidth: ProjectUtils.ag_SetWidth(10),
            filter: 'agTextColumnFilter',
            filterParams: { apply: true, newRowsAction: 'keep' }
      }
];


