/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employee.component';
import { AuthGuard } from "../guards/index";

const employeeRoutes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
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
    AuthGuard
  ]
})
export class EmployeeModule { }
