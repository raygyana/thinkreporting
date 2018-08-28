import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuplicateCustomerListComponent } from './duplicate-customer-list/duplicate-customer-list.component';
import { AddCustomerAgencyComponent } from './add-customer-agency/add-customer-agency.component';
import { ComponentModule } from '../../component';
import { RootSharedModule } from '../../core/sharedModules';
import { AgGridModule } from 'ag-grid-angular/main';
import { ValidationUiModule } from '../../component/validation-ui';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    RootSharedModule,
    AgGridModule,
    CommonModule,
    ComponentModule,
    ValidationUiModule,
    TextMaskModule
  ],
  declarations: [
    AddCustomerAgencyComponent,
    DuplicateCustomerListComponent
  ],
  exports: [
    AddCustomerAgencyComponent,
    DuplicateCustomerListComponent
  ]
})
export class AddCustomerModuleModule { }
