/**
 * Shared module where we defined any shared components
 */
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr,
  AuthenticationService,
  ProjectService,
  EmployeeService,
  PaymentService,
  WorktimeService,
  WorktypeService,
  StaticsService,
  DashboardService,
  ExcelService,
  PaginatedTableComponent,
  TableToolbarComponent,
  ModalWindowComponent,
  ProjectEditorComponent,
  EmployeeEditorComponent,
  PaymentEditorComponent,
  WorktypeEditorComponent,
  WorkimetEditorComponent,
  AggPanelComponent,
  StatusPipe,
  VerifiedStatusPipe,
  MonthPipe,
  ParseFieldsPipe,
  CellFormatterPipe,
  GreaterThanZeroValidator
} from "./index";

declare const toastr: Toastr;
declare const jQuery: any;

@NgModule({
  declarations: [
    MonthPipe,
    StatusPipe,
    VerifiedStatusPipe,
    ParseFieldsPipe,
    CellFormatterPipe,
    GreaterThanZeroValidator,
    PaginatedTableComponent,
    TableToolbarComponent,
    ModalWindowComponent,
    ProjectEditorComponent,
    EmployeeEditorComponent,
    PaymentEditorComponent,
    WorktypeEditorComponent,
    WorkimetEditorComponent,
    AggPanelComponent
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
    ParseFieldsPipe,
    GreaterThanZeroValidator,
    PaginatedTableComponent,
    TableToolbarComponent,
    ModalWindowComponent,
    ProjectEditorComponent,
    EmployeeEditorComponent,
    PaymentEditorComponent,
    WorktypeEditorComponent,
    WorkimetEditorComponent,
    AggPanelComponent
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    AuthenticationService,
    ProjectService,
    EmployeeService,
    PaymentService,
    WorktimeService,
    WorktypeService,
    StaticsService,
    DashboardService,
    ExcelService,
    DatePipe,
    StatusPipe,
    VerifiedStatusPipe,
    MonthPipe,
    ParseFieldsPipe
  ]
})
export class SharedModule {
}
