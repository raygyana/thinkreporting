import { ColDef } from 'ag-grid';
import { ProjectUtils } from '../../../core/shared';

const myCheckBoxdisabledAcceptOrd = ProjectUtils.grid.agCheckBox('acceptOrd', 'disabled');
const myCheckBoxdisabledIsBillTo = ProjectUtils.grid.agCheckBox('isBillTo', 'disabled');
const myCheckBoxdisabledBundleDiscount = ProjectUtils.grid.agCheckBox('bundleDiscount', 'disabled');
const myCheckBoxdisabledAgencyPayTax = ProjectUtils.grid.agCheckBox('agencyPayTax', 'disabled');
const myCheckBoxdisabledRemits = ProjectUtils.grid.agCheckBox('remits', 'disabled');
const myCheckBoxdisabledTaxPayedOnGross = ProjectUtils.grid.agCheckBox('taxPayedOnGross', 'disabled');
const myCheckBoxdisabledIsRenewTo = ProjectUtils.grid.agCheckBox('isRenewTo', 'disabled');

export const columnDefsAgencyReports: Array<ColDef> = [

      {
            headerName: 'Edit',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.editicon
      },
      {
            headerName: 'Agency',
            field: 'agencyCode',
            minWidth: ProjectUtils.ag_SetWidth(5),
            cellRenderer: ProjectUtils.html.anchorTag
      },
      {
            headerName: 'Company',
            field: 'company',
            minWidth: ProjectUtils.ag_SetWidth(15)
      },
      {
            headerName: 'Customer #',
            field: 'customerId',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Renewal Commission',
            field: 'renewalCommission',
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Accept Order',
            field: 'acceptOrd',
            cellRenderer: myCheckBoxdisabledAcceptOrd,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Discounts',
            field: 'bundleDiscount',
            cellRenderer: myCheckBoxdisabledBundleDiscount,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Agency Bill To',
            field: 'isBillTo',
            cellRenderer: myCheckBoxdisabledIsBillTo,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'New Commission',
            field: 'newOrderCommission',
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Payment Threshold',
            field: 'paymentThershold',
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Agancy Pays Tax',
            field: 'agencyPayTax',
            cellRenderer: myCheckBoxdisabledAgencyPayTax,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Remit',
            field: 'remits',
            cellRenderer: myCheckBoxdisabledRemits,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Tax Based On Gross',
            field: 'taxPayedOnGross',
            cellRenderer: myCheckBoxdisabledTaxPayedOnGross,
            minWidth: ProjectUtils.ag_SetWidth(5)
      },
      {
            headerName: 'Agancy Renew To',
            field: 'isRenewTo',
            cellRenderer: myCheckBoxdisabledIsRenewTo,
            minWidth: ProjectUtils.ag_SetWidth(5)
      }
];
