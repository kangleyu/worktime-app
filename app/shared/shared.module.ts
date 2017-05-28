/**
 * Shared module where we defined any shared components
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr 
} from "./index";

declare const toastr: Toastr;
declare const jQuery: any;

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
  ]
})
export class SharedModule {
}
