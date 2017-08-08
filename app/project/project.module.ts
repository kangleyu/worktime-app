/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from './project.component';

const projectRoutes: Routes = [
  {
    path: 'project/:pageIndex',
    component: ProjectComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(projectRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [
  ]
})
export class ProjectModule { }
