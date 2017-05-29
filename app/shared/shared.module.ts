/**
 * Shared module where we defined any shared components
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { 
  TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr,
  ProjectService
} from "./index";

declare const toastr: Toastr;
declare const jQuery: any;

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    ProjectService
  ]
})
export class SharedModule {
}
