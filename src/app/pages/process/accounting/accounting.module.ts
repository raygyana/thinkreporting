import { NgModule } from '@angular/core';

import { AccountingReconciliationComponent } from './accounting-reconciliation/accounting-reconciliation.component';

import { AccountingReconciliationOutputComponent } from './accounting-reconciliation-output/accounting-reconciliation-output.component';
import { routing } from './accouting.routing';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../../component';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { RootSharedModule } from '../../../core/sharedModules';
import { ProcessComponentModule } from '../../../component/project-comp/process/process.module';
@NgModule({
      declarations: [
            AccountingReconciliationComponent,
            AccountingReconciliationOutputComponent
      ],
      providers: [

      ],
      imports: [
            routing,
            RootSharedModule,
            ComponentModule,
            ProcessComponentModule,
            AgGridModule,
            FormsModule
      ]
})

export class AccountingModule { }
