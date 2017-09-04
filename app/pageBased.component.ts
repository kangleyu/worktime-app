import {
  Inject
} from '@angular/core';
import {
  Toastr,
  TOASTR_TOKEN
} from './shared/index';

export class PageBasedComponent {
  public searchTerm: string;
  public isBusy: boolean;
  public noData: boolean;
  public total: number;
  public totalPages: number;
  public currentPage: number;
  public pages = [];

  public defaultPageSize: number = 12;

  constructor(@Inject(TOASTR_TOKEN) toastr: Toastr) {
    this.currentPage = 1;
  }

  public getDataOnPage(index) {
    this.currentPage = index;
    this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
  }

  public search() {
    this.currentPage = 1;
    this.pages = [];
    this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
  }

  searchInternal(term: string, index: number, size: number) { }

  gotoPage(page) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.searchInternal(this.searchTerm, page, this.defaultPageSize);
    }
  }

  preCreate() {
  }

  creating(project) {
  }

  refreshTable() {
      this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
  }

  exportTable() {
  }
}
