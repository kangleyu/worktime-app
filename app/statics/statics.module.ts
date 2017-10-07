/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { StaticsComponent } from './statics.component';
import { AuthGuard } from "../guards/index";

const staticsRoutes: Routes = [
  {
    path: 'statics',
    component: StaticsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(staticsRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    StaticsComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class StaticsModule { }
