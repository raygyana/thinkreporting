import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CustDesktopComponent } from './desktop/cust-desktop/cust-desktop.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerGuard } from './cust-destop.gard.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DocucmentRefGuard } from './doucment-reference.gard.service';
import { AgencyComponent } from './agency/agency.component';
import { AddAgencyComponent } from './agency/add-agency/add-agency.component';
export const routes: Routes = [
      {
            path: '',
            component: CustDesktopComponent,

            canActivate: [DocucmentRefGuard]
      },
      {
            path: 'cs',
            component: CustomerSearchComponent,
            canActivate: [CustomerGuard]
      },
      {
            path: 'add',
            component: AddCustomerComponent,
            canActivate: [CustomerGuard]
      },
      {
            path: 'agency',
            component: AgencyComponent,
            canActivate: [CustomerGuard]
      },
      {
            path: 'add-agency',
            component: AddAgencyComponent
      },
      {
            path: 'agency-details',
            canActivate: [CustomerGuard],
            loadChildren: './agency-details/agency-details.module#AgencyDetailsModule'
      },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);

