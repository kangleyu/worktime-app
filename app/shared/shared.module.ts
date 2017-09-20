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
  ProjectService,
  EmployeeService,
  PaymentService,
  WorktimeService,
  WorktypeService,
  StaticsService,
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
  CellFormatterPipe
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
    ProjectService,
    EmployeeService,
    PaymentService,
    WorktimeService,
    WorktypeService,
    StaticsService,
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
