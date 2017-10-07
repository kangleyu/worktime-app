/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from "../guards/index";

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(dashboardRoutes),
    RouterModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class DashboardModule { }
