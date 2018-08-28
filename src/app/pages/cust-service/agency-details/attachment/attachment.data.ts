import { ColDef } from 'ag-grid';
import { BaseComponent } from '../../../../core/base/base.component';
import { ProjectUtils } from '../../../../core/shared';

export const columnDefsAttachmentReports: Array<ColDef> = [
      {
            headerName: 'Action',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.editDeleteButton
      },
      {
            headerName: 'Order',
            field: 'id',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'Item',
            field: 'orderClass',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'Payment',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'Attachment Category',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'File Name',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'Attachment Url',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: 'Note Field',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(15),
      },
      {
            headerName: ' ',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(5)
      }
];
