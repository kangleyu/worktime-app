import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { PaymentModule } from "./payment/payment.module";
import { ProjectModule } from "./project/project.module";
import { WorktimeModule } from "./worktime/worktime.module";
import { WorktypeModule } from "./worktype/worktype.module";
import { StaticsModule } from "./statics/statics.module";

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
    ]),
    BrowserModule,
    CoreModule,
    DashboardModule,
    EmployeeModule,
    PaymentModule,
    ProjectModule,
    WorktimeModule,
    WorktypeModule,
    StaticsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
