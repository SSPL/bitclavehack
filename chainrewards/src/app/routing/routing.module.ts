import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';
import { BaseAuthGuard } from '../services/base-auth.guard';
import { CabinetComponent } from '../privatePages/cabinet/cabinet.component';
import { DashboardComponent } from '../privatePages/dashboard/dashboard.component';
import { LandingComponent } from '../publicPages/landing/landing.component';
import { SettingsComponent } from '../privatePages/settings/settings.component';
import { ServicesComponent } from '../privatePages/services/services.component';
import { PermissionsComponent } from '../privatePages/permissions/permissions.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  {
    path: 'cabinet',
    component: CabinetComponent,
    children: [
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'permissions',
        component: PermissionsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }

    ],
    canActivate: [BaseAuthGuard]
  },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
