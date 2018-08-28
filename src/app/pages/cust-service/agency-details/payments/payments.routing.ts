import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PaymentsComponent } from './payments.component';
import { MakePaymentsComponent } from './make-payments/make-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';


export const routes: Routes = [
      {
            path: '',
            redirectTo: 'payments-report'
      },
      {
            path: '',
            component: PaymentsComponent
      }, {
            path: 'make-payment',
            component: MakePaymentsComponent
      }, {
            path: 'edit-payment',
            component: EditPaymentsComponent
      }
];


export const paymentRouting: ModuleWithProviders = RouterModule.forChild(routes);
