import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AddOrderComponent } from './add-order/add-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderComponent } from './order.component';
import { PackageEditComponent } from './package-edit/package-edit.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';

export const routes: Routes = [
      {
            path: '',
            redirectTo: 'order'
      },
      {
            path: 'order',
            component: OrderComponent
      }, {
            path: 'edit-order',
            component: EditOrderComponent
      }, {
            path: 'add-order',
            component: AddOrderComponent
      }, {
            path: 'package-edit',
            component: PackageEditComponent
      }, {
            path: 'cancel-order',
            component: CancelOrderComponent
      }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
