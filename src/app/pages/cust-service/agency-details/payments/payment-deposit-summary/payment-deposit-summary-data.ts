import { ColDef } from 'ag-grid';
import { ProjectUtils, CustomerServicesUrls } from '../../../../../core/shared';

export const columnDefsDepositSummaryReports: Array<ColDef> = [
      {
            headerName: 'Select',
            field: 'orderCode',
            minWidth: ProjectUtils.ag_SetWidth(10),
              cellRenderer: ProjectUtils.selecticonredio('rdbuttonodrlookup')
// cellRenderer: 'AgRadioVerticalComponent'
      },
      {
            headerName: 'Currency',
            field: 'currency',
            minWidth: ProjectUtils.ag_SetWidth(10)

      },
      {
            headerName: 'Deposit Balance(pay curr)',
            // cellRenderer: ProjectUtils.setSelect,
            // editable: false,
            field: 'customer_deposit_pay_amt',
            minWidth: ProjectUtils.ag_SetWidth(30)
      },
      {
            headerName: 'Deposit Balance(base curr)',
            field: 'customer_deposit_base_amt',
            minWidth: ProjectUtils.ag_SetWidth(30)
      }
];
export const columnDefsDepositDetailsReports: Array<ColDef> = [
      {
            headerName: 'Payment Date',
            field: 'creation_date',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Sequence',
            field: 'payment_seq',
            minWidth: ProjectUtils.ag_SetWidth(10)

      },
      {
            headerName: 'Pay Type',
            field: 'payment_type',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Currency',
            field: 'currency',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Payment',
            field: 'pay_currency_amount',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Initial Deposit',
            field: 'customer_deposit_pay_amt',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Deposit Balance',
            field: 'customer_deposit_base_amt',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Payment(base)',
            field: 'customer_deposit_base_amt',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Initial(base)',
            field: 'initial_base_amount',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Deposit Balance(base)',
            field: 'customer_deposit_base_amt',
            minWidth: ProjectUtils.ag_SetWidth(10)
      }

];
export const columnDefsJournalDetailsReports: Array<ColDef> = [
      {
            headerName: 'Customer Id',
            field: 'customerId',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Payment Sequence',
            field: 'paymentSeq',
            minWidth: ProjectUtils.ag_SetWidth(10)

      },
      {
            headerName: 'Posting',
            field: 'postingReferenceDesc',
            minWidth: ProjectUtils.ag_SetWidth(20)
      },
      {
            headerName: 'Amount(base)',
            field: 'initial_base_amount',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Debit Account',
            field: 'debitAccount',
            minWidth: ProjectUtils.ag_SetWidth(10)
      },
      {
            headerName: 'Credit Account',
            field: 'creditAccount',
            minWidth: ProjectUtils.ag_SetWidth(10)
      }

];

