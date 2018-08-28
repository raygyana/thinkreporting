import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { CustomerComponent } from './customer/customer/customer.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { NotesComponent } from './notes/notes.component';
import { AgencyDetailDashboardComponent } from './agency-detail-dashboard/agency-detail-dashboard.component';
import { ComponentModule } from '../../../component/component.module';
import { routing } from './agency-details.routing';
import { AgecyDetailsMenuComponent } from './agecy-details-menu/agecy-details-menu.component';
import { CustomerAddressPopupComponent } from './customer/customer-address-popup/customer-address-popup.component';
import { AddAuxiliaryFieldsComponent } from './customer/add-auxiliary-fields/add-auxiliary-fields.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';
import { NotesServices } from './notes/notes.service';
import { CustomerAddHistoryComponent } from './customer/customer-add-history/customer-add-history.component';
import { AddAttachmentComponent } from '../add-attachment/add-attachment.component';
import { ValidationUiModule } from '../../../component/validation-ui';
import { MyDatePickerModule } from 'mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ComponentModule,
    ValidationUiModule,
    MyDatePickerModule,
    TextMaskModule
  ],
  declarations: [
    CustomerComponent,
    AttachmentComponent,
    CustomerHistoryComponent,
    NotesComponent,
    AgencyDetailDashboardComponent,
    AddAttachmentComponent,
    AgecyDetailsMenuComponent,
    CustomerAddressPopupComponent,
    AddAuxiliaryFieldsComponent,
    AddNoteComponent,
    EditNoteComponent,
    CustomerAddHistoryComponent

  ],
  exports: [
    CustomerComponent,
    AttachmentComponent,
    CustomerHistoryComponent,
    NotesComponent,
    AgencyDetailDashboardComponent
  ],
  providers: [
    NotesServices
  ]
})
export class AgencyDetailsModule { }
