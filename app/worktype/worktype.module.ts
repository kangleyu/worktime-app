/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WorktypeComponent } from './worktype.component';
import { AuthGuard } from "../guards/index";

const worktypeRoutes: Routes = [
  {
    path: 'worktype',
    component: WorktypeComponent,
    canActivate: [AuthGuard]
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
    AuthGuard
  ]
})
export class WorktypeModule { }
