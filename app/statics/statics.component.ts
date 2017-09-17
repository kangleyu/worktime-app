import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageBasedComponent } from "../pageBased.component";
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN
} from '../shared/index';

@Component({
  selector: 'wt-statics',
  templateUrl: './app/statics/statics.component.html',
  styleUrls: ['./app/statics/statics.component.css']
})
export class StaticsComponent extends PageBasedComponent {
  cachedTerm: any;

  constructor(
    private titleService: Title,
    @Inject(TOASTR_TOKEN) toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
    super(toastr, jquery);
  }

  ngOnInit() {
    this.titleService.setTitle('统计信息');
  }

  searchInternal(term: string, index: number, size: number) {
    this.toastr.info(term);
  }

  refreshTable() {
    this.searchInternal(this.cachedTerm.join(','), this.currentPage, this.defaultPageSize);
  }

  aggregateWorktimes(aggTerm) {
    this.cachedTerm = aggTerm;
    this.searchInternal(aggTerm.join(','), 1, this.defaultPageSize);
  }

  aggregatePayments(aggTerm) {
    this.cachedTerm = aggTerm;
    this.searchInternal(aggTerm.join(','), 1, this.defaultPageSize);
  }
}
