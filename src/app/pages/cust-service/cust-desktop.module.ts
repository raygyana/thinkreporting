import { NgModule } from '@angular/core';
import { routing } from './cust-desktop.routing';



import { RootSharedModule } from '../../core/sharedModules';
import { ComponentModule } from '../../component/component.module';


import { AgencyComponent } from './agency/agency.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { CustDesktopComponent } from './desktop/cust-desktop/cust-desktop.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { DocumentReferenceListComponent } from './document-reference-list/document-reference-list.component';
import { AddDocumentReferenceComponent } from './add-document-reference/add-document-reference.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { EditDocumentReferenceComponent } from './edit-document-reference/edit-document-reference.component';
import { CustomerGuard } from './cust-destop.gard.service';
import { DocucmentRefGuard } from './doucment-reference.gard.service';
import { AddCustomerModuleModule } from '../../customer-component/add-customer-module/add-customer-module.module';
import { AddAgencyComponent } from './agency/add-agency/add-agency.component';
import { ValidationUiModule } from '../../component/validation-ui';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
      declarations: [
            CustDesktopComponent,
            CustomerSearchComponent,
            AgencyComponent,
            AddCustomerComponent,
            DocumentReferenceListComponent,
            AddDocumentReferenceComponent,
            EditDocumentReferenceComponent,
            AddAgencyComponent

      ],
      providers: [
            CustomerGuard,
            DocucmentRefGuard
      ],
      imports: [
            routing,
            AgGridModule,
            ComponentModule,
            RootSharedModule,
            AddCustomerModuleModule,
            ValidationUiModule,
            TextMaskModule

      ]
})

export class CustDestTopModule { }
