/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { WorktimeComponent } from './worktime.component';

const worktimeRoutes: Routes = [
  {
    path: 'worktime',
    component: WorktimeComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(worktimeRoutes),
    RouterModule
  ],
  declarations: [
    WorktimeComponent
  ],
  providers: [
  ]
})
export class WorktimeModule { }
