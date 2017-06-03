/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { WorktypeComponent } from './worktype.component';

const worktypeRoutes: Routes = [
  {
    path: 'worktype',
    component: WorktypeComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(worktypeRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    WorktypeComponent
  ],
  providers: [
  ]
})
export class WorktypeModule { }
