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
  public pages = [];

  public defaultPageSize: number = 3;

  constructor(@Inject(TOASTR_TOKEN) toastr: Toastr) { }

  public getDataOnPage(index) {
    this.searchInternal(this.searchTerm, index, this.defaultPageSize);
  }

  public search() {
    this.pages = [];
    this.searchInternal(this.searchTerm, 1, this.defaultPageSize);
  }

  searchInternal(term: string, index: number, size: number) { }
}
