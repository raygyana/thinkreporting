import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { RootSharedModule } from '../../../../core/sharedModules';
import { ComponentModule } from '../../../../component';
import { routing } from './order.routing';

import { AddOrderComponent } from './add-order/add-order.component';
import { AddressComponent } from './address/address.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { ChangeAmountComponent } from './change-amount/change-amount.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderCodeLookupComponent } from './order-code-lookup/order-code-lookup.component';
import { OrderComponent } from './order.component';

import { SourceCodeLookupComponent } from './source-code-lookup/source-code-lookup.component';
import { OrderInProgressComponent } from './order-in-progress/order-in-progress.component';
import { EditOrderServiceService } from './edit-order/edit-order-service.service';
import { SubscriptionDefListComponent } from './subscription-def-list/subscription-def-list.component';
import { AgencyDetailsModule } from '../agency-details.module';
import { OrderReuseModule } from './order-reuse.module';
import { DataService } from './order-in-progress/order-data-service';
import { PackageEditComponent } from './package-edit/package-edit.component';
import { RenewalOptionComponent } from './renewal-option/renewal-option.component';
import { BillingOptionComponent } from './billing-option/billing-option.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';

@NgModule({
      declarations: [
            AddOrderComponent,
            OrderComponent,
            EditOrderComponent,
            AddressComponent,
            AgencyListComponent,
            ChangeAmountComponent,
            CustomerSearchComponent,
            DiscountsComponent,
            OrderCodeLookupComponent,
            SourceCodeLookupComponent,
            OrderInProgressComponent,
            SubscriptionDefListComponent,
            PackageEditComponent,
            RenewalOptionComponent,
            BillingOptionComponent,
            CancelOrderComponent

      ],

      imports: [
            RootSharedModule,
            ComponentModule,
            AgGridModule,
            routing,
            OrderReuseModule
            // AgencyDetailsModule
      ],
      exports: [
      ],
      providers: [EditOrderServiceService, DataService]
})



export class OrderModule { }
