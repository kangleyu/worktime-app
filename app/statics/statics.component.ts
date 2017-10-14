import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageBasedComponent } from "../shared/pageBased.component";
import { Statics } from "../shared/models/index";
import { ParseFieldsPipe } from "../shared/index";
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  StaticsService,
  ExcelService
} from '../shared/index';

import * as SaveAs from 'file-saver';

@Component({
  selector: 'wt-statics',
  templateUrl: './app/statics/statics.component.html',
  styleUrls: ['./app/statics/statics.component.css']
})
export class StaticsComponent {
  // common fields
  defaultPageSize: number = 12;

  // worktime statics fields
  cachedWorktimeTerm: any;
  worktimeStatics: Statics[];
  worktimeFields: any;
  worktimeIsBusy; boolean;
  worktimeNoData: boolean;
  worktimeTotal: number;
  worktimeTotalPages: number;
  worktimeCurrentPage: number = 1;
  worktimePages = [];

  // payment statics fields
  cachedPaymentTerm: any;
  paymentStatics: Statics[];
  paymentFields: any;
  paymentIsBusy: boolean;
  paymentNoData: boolean;
  paymentTotal: number;
  paymentTotalPages: number;
  paymentCurrentPage: number = 1;
  paymentPages = [];

  constructor(
    private staticsService: StaticsService,
    private excelService: ExcelService,
    private titleService: Title,
    private parseFields: ParseFieldsPipe,
    @Inject(TOASTR_TOKEN) public toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
  }

  resetForWorktimes() {
    this.worktimeStatics = [];
    this.cachedWorktimeTerm = "";
    this.worktimeCurrentPage = 1;
    this.worktimeTotal = 0;
    this.worktimeTotalPages = 0;
    this.worktimePages = [];
    this.worktimeFields = [];
    this.worktimeIsBusy = true;
    this.worktimeNoData = true;
  }

  resetForPayments() {
    this.paymentStatics = [];
    this.cachedPaymentTerm = "";
    this.paymentCurrentPage = 1;
    this.paymentTotal = 0;
    this.paymentTotalPages = 0;
    this.paymentPages = [];
    this.paymentFields = [];
    this.paymentIsBusy = true;
    this.paymentNoData = true;
  }

  reset() {
    this.resetForWorktimes();
    this.resetForWorktimes();
  }

  ngOnInit() {
    this.titleService.setTitle('统计信息');
    this.reset();
  }

  updateWorktimeStatics(term: string, index: number, size: number) {
    this.worktimeStatics = [];
    this.worktimeIsBusy = true;
    this.staticsService.getWorktimeStatics(term, index, size).subscribe((res) => {
      if (res.length === 0) {
        this.worktimeNoData = true;
      } else {
        this.worktimeStatics = res;
        this.worktimeNoData = false;
      }
      this.worktimeIsBusy = false;
    }, (error) => {
      this.toastr.error("获取统计数据失败，可能服务器暂时无法访问，请稍候再试！");
      this.worktimeIsBusy = false;
    });
    this.staticsService.getWorktimeStaticsTotal(term).subscribe((count) => {
      this.worktimeTotal = count;
      const tPages = Math.ceil(count/this.defaultPageSize);
      this.worktimeTotalPages = tPages;
      for(let i = 1; i <= tPages; i++) {
        this.worktimePages.push(i);
      }
    });
  }

  updatePaymentStatics(term: string, index: number, size: number) {
    this.paymentStatics = [];
    this.paymentIsBusy = true;
    this.staticsService.getPaymentStatics(term, index, size).subscribe((res) => {
      if (res.length === 0) {
        this.paymentNoData = true;
      } else {
        this.paymentStatics = res;
        this.paymentNoData = false;
      }
      this.paymentIsBusy = false;
    }, (error) => {
      this.toastr.error("获取统计数据失败，可能服务器暂时无法访问，请稍候再试！");
      this.paymentIsBusy = false;
    });
    this.staticsService.getPaymentStaticsTotal(term).subscribe((count) => {
      this.paymentTotal = count;
      const tPages = Math.ceil(count/this.defaultPageSize);
      this.paymentTotalPages = tPages;
      for(let i = 1; i <= tPages; i++) {
        this.paymentPages.push(i);
      }
    });
  }

  refreshWorktimesStatics() {
    this.updateWorktimeStatics(this.cachedWorktimeTerm.join(';'), 1, this.defaultPageSize);
  }

  refreshPaymentsStatics() {
    this.updatePaymentStatics(this.cachedWorktimeTerm.join(';'), 1, this.defaultPageSize);
  }

  exportWorktimesStatics() {
    this.excelService.exportTableToExcel(this.jquery('#worktimeStatics'), "download.csv");
  }

  exportPaymentsStatics() {
    this.excelService.exportTableToExcel(this.jquery('#paymentStatics'), "download.csv");
  }

  transfer(terms: [string]) {
    let ret = '';
    terms.forEach((value) => {
      switch(value) {
        case "project":
          ret += "project:项目|";
          break;
        case "employee":
          ret += "employee:员工|";
          break;
        case "worktype":
          ret += "worktype:工种|";
          break;
        case "year":
          ret += "year:年份|";
          break;
        case "month":
          ret += "month:月份|";
          break;
      }
    });
    return ret;
  }

  aggregateWorktimes(aggTerm) {
    this.worktimeFields = this.parseFields.transform(this.transfer(aggTerm) + "totalWorktime:工时统计");
    this.cachedWorktimeTerm = aggTerm;
    if (aggTerm !== undefined && aggTerm.length > 0) {
      this.updateWorktimeStatics(aggTerm.join(';'), 1, this.defaultPageSize);
    } else {
      this.resetForWorktimes();
    }
  }

  aggregatePayments(aggTerm) {
    this.paymentFields = this.parseFields.transform(this.transfer(aggTerm) + "totalPaid:工资统计");
    this.cachedPaymentTerm = aggTerm;
    if (aggTerm !== undefined && aggTerm.length > 0) {
      this.updatePaymentStatics(aggTerm.join(';'), 1, this.defaultPageSize);
    } else {
      this.resetForPayments();
    }
  }

  gotoWorktimePage(page) {
    if (page > 0 && page <= this.worktimeTotalPages) {
      this.worktimeCurrentPage = page;
      this.updateWorktimeStatics(this.cachedWorktimeTerm.join(';'), page, this.defaultPageSize);
    }
  }

  gotoPaymentPage(page) {
    if (page > 0 && page <= this.paymentTotalPages) {
      this.paymentCurrentPage = page;
      this.updatePaymentStatics(this.cachedPaymentTerm.join(';'), page, this.defaultPageSize);
    }
  }
}
