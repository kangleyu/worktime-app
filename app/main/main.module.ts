import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { EmployeeModule } from '../employee/employee.module';
import { PaymentModule } from "../payment/payment.module";
import { ProjectModule } from "../project/project.module";
import { WorktimeModule } from "../worktime/worktime.module";
import { WorktypeModule } from "../worktype/worktype.module";
import { StaticsModule } from "../statics/statics.module";
import { ErrorModule } from "../error/error.module";
import { MainComponent } from '../main/main.component';

const mainRoutes: Routes = [
  {
    path: '/',
    component: MainComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
    CoreModule,
    DashboardModule,
    EmployeeModule,
    PaymentModule,
    ProjectModule,
    WorktimeModule,
    WorktypeModule,
    StaticsModule,
    ErrorModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [],
})

export class MainModule { }
