import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared/utility';


const mySelection = ProjectUtils.selecticon1('document_reference_id');

export const columnDefsDocumentReference: Array<ColDef> = [
      {
            headerName: 'Select',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: mySelection
      },
      {
            headerName: 'Edit',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.editicon
      },
      {
            headerName: 'Doc. Ref. Id',
            field: 'document_reference_id',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Description',
            field: 'description',
            minWidth: ProjectUtils.ag_SetWidth(20)
            // hide: true
      },
      {
            headerName: 'Type',
            field: 'type',
            // valueFormatter: ProjectUtils.numberFormatter
            minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgCsv
      },
      {
            headerName: 'Batch Id',
            field: 'pending_xaction_header_id',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Created By',
            field: 'creator_user_code',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgZip
      },
      {
            headerName: 'Creation Date',
            field: 'creation_date',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Batch Template',
            field: 'batch_template',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgZip
      },
      {
            headerName: 'Assigned To',
            field: 'assigned_to_user_code',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //   cellRenderer: ProjectUtils.svgExcel
      },
      {
            headerName: 'Exp. Amt Pmt',
            field: 'xamt_pay',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgZip
      },
      {
            headerName: 'Act. AmtPay',
            field: 'amt_pay',
            minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgZip
      },
      {
            headerName: 'Active',
            field: 'active',
            hide: true,
            // minWidth: ProjectUtils.ag_SetWidth(15),
            //  cellRenderer: ProjectUtils.svgZip
      }

];

// csv,xls,xml,html,txt

// Category
// :
// "ADDITIONAL"
// Description
// :
// "The number of titles in your latest Journal Usage Report"
// Filename
// :
// "Journal_ValueAdded_1"
// Report Format
// :
// "csv,xls,zip"
// Report Type
// :
// "Journal Value Added Report 1"
// status
// :
// "LIVE"
