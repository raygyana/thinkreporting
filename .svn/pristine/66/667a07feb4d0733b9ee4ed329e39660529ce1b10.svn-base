import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CustomerComponent } from './customer/customer/customer.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { NotesComponent } from './notes/notes.component';
import { AgencyDetailDashboardComponent } from './agency-detail-dashboard/agency-detail-dashboard.component';

export const routes: Routes = [
      {
            path: '',
            component: AgencyDetailDashboardComponent,
            children: [
                  {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'customer-report'
                  },
                  {
                        path: 'customer-report',
                        component: CustomerComponent
                  },
                  {
                        path: 'order',
                        loadChildren: './order/order.module#OrderModule'
                        // component: OrderComponent
                  },
                  {
                        path: 'payments-report',
                        loadChildren: './payments/payments.module#PaymentsModule'
                        // component: PaymentsComponent
                  },
                  {
                        path: 'attachment-report',
                        component: AttachmentComponent
                  },
                  {
                        path: 'customer-history-report',
                        component: CustomerHistoryComponent
                  },
                  {
                        path: 'notes-report',
                        component: NotesComponent
                  }
            ]
      }


];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
