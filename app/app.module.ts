import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { PaymentModule } from "./payment/payment.module";
import { ProjectModule } from "./project/project.module";
import { WorktimeModule } from "./worktime/worktime.module";
import { WorktypeModule } from "./worktype/worktype.module";
import { StaticsModule } from "./statics/statics.module";
import { ErrorModule } from "./error/error.module";
import { AppComponent } from './app.component';

// import "rxjs/add/observable/of";
// import "rxjs/add/observable/throw";
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/do";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";

@NgModule({
  imports: [
    RouterModule.forRoot([
    ]),
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
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
