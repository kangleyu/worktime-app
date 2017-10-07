/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './notFound.component';

const errorRoutes: Routes = [
  {
    path: 'notfound',
    component: NotFoundComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(errorRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [
  ]
})
export class ErrorModule { }
