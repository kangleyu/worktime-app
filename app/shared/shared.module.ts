/**
 * Shared module where we defined any shared components
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr,
  ProjectService,
  EmployeeService,
  PaymentService,
  WorktimeService,
  WorktypeService,
  PaginatedTableComponent,
  TableToolbarComponent
} from "./index";

declare const toastr: Toastr;
declare const jQuery: any;

@NgModule({
  declarations: [
    PaginatedTableComponent,
    TableToolbarComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    PaginatedTableComponent,
    TableToolbarComponent
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    ProjectService,
    EmployeeService,
    PaymentService,
    WorktimeService,
    WorktypeService
  ]
})
export class SharedModule {
}
