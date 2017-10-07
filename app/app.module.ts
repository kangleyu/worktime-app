import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from './core/core.module';
import { ErrorModule } from "./error/error.module";
import { MainModule } from "./main/main.module";
import { LoginModule } from "./login/login.module";
import { AppComponent } from './app.component';

// const appRoutes: Routes = [
//   {
//     path: '*', redirectTo: 'notFound'
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    CoreModule,
    MainModule,
    LoginModule,
    ErrorModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
