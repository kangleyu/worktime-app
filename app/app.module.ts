import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { ErrorModule } from "./error/error.module";
import { MainModule } from "./main/main.module";
import { LoginModule } from "./login/login.module";
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
    ]),
    CoreModule,
    ErrorModule,
    LoginModule,
    MainModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
