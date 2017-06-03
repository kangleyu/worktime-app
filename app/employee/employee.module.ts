/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { EmployeeComponent } from './employee.component';

const employeeRoutes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(employeeRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    EmployeeComponent
  ],
  providers: [
  ]
})
export class EmployeeModule { }
