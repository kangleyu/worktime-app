import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ErrorModule } from "../error/error.module";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { EmployeeComponent } from "../employee/employee.component";
import { PaymentComponent } from "../payment/payment.component";
import { ProjectComponent } from "../project/project.component";
import { WorktypeComponent } from "../worktype/worktype.component";
import { WorktimeComponent } from "../worktime/worktime.component";
import { StaticsComponent } from "../statics/statics.component";
import { MainComponent } from '../main/main.component';

import { AuthGuard } from "../guards/index";

const mainRoutes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'project',
        component: ProjectComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'worktime',
        component: WorktimeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'worktype',
        component: WorktypeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'statics',
        component: StaticsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
    ChartsModule,
    SharedModule,
    CoreModule,
    ErrorModule
  ],
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    PaymentComponent,
    ProjectComponent,
    WorktimeComponent,
    WorktypeComponent,
    StaticsComponent,
    MainComponent
  ],
  providers: [
    AuthGuard
  ],
})

export class MainModule { }
