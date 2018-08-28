import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FrontPanelComponent } from './front-panel.component';
import { AuthGuard } from '../../core/guard';

export const routes: Routes = [
      {
            path: 'pages',
            component: FrontPanelComponent,
            children: [
                  {
                        path: '',
                        loadChildren: '../process/process.module#ProcessModule',
                  },

                  {
                        path: 'customer',
                        loadChildren: '../cust-service/cust-desktop.module#CustDestTopModule'
                  }
            ],
            canActivate: [AuthGuard],
            canActivateChild: [AuthGuard]
      }
];



export const routing: ModuleWithProviders = RouterModule.forChild(routes);
