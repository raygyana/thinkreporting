import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { RootSharedModule } from '../../../../core/sharedModules';
import { ComponentModule } from '../../../../component';
import { paymentRouting } from './payments.routing';
import { PaymentsComponent } from './payments.component';
import { MakePaymentsComponent } from './make-payments/make-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { PaymentBreakdownComponent } from './payment-breakdown/payment-breakdown.component';
import { PaymentDepositSummaryComponent } from './payment-deposit-summary/payment-deposit-summary.component';
import { PaymentTransferComponent } from './payment-transfer/payment-transfer.component';
import { PaymentThresholdHandlingComponent } from '../order/payment-threshold-handling/payment-threshold-handling.component';
import { AgencyDetailsModule } from '../agency-details.module';
import { OrderModule } from '../order/order.module';
import { OrderReuseModule } from '../order/order-reuse.module';
import { ValidationUiModule } from '../../../../component/validation-ui';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
      declarations: [
            PaymentsComponent,
            MakePaymentsComponent,
            EditPaymentsComponent,
            PaymentBreakdownComponent,
            PaymentDepositSummaryComponent,
            // PaymentThresholdHandlingComponent,
            PaymentTransferComponent,
      ],

      imports: [
            RootSharedModule,
            ComponentModule,
            AgGridModule,
            ValidationUiModule,
            OrderReuseModule,
            MyDatePickerModule,
            paymentRouting
      ],
      providers: []
})



export class PaymentsModule { }
