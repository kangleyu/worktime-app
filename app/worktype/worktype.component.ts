import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IWorktype } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  WorktypeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-worktype',
  templateUrl: './app/worktype/worktype.component.html'
})
export class WorktypeComponent extends PageBasedComponent implements OnInit {
  worktypes: IWorktype[];

  constructor(
    private worktypeService: WorktypeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('工种列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.worktypeService.getItems(this.searchTerm, 1, this.defaultPageSize).subscribe((worktypes) => {
        this.worktypes = worktypes;
      });
      this.worktypeService.getTotalCount().subscribe((count) => {
        this.total = count;
        const tPages = Math.ceil(count/this.defaultPageSize);
        this.totalPages = tPages;
        for(let i = 1; i <= tPages; i++) {
          this.pages.push(i);
        }
      });
    });
  }

  searchInternal(term: string, index: number, size: number) {
    this.worktypes = [];
    this.isBusy = true;
    this.worktypeService.getItems(term, index, size).subscribe((worktypes) => {
      if (worktypes.length === 0) {
        this.noData = true;
      } else {
        this.worktypes = worktypes;
        this.noData = false;
      }
      this.isBusy = false;
    });
  }
}
