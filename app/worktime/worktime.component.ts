import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IWorktime } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  WorktimeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-worktime',
  templateUrl: './app/worktime/worktime.component.html'
})
export class WorktimeComponent extends PageBasedComponent implements OnInit {
  worktimes: IWorktime[];

  constructor(
    private worktimeService: WorktimeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('工时列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.worktimeService.getItems(this.searchTerm, 1, this.defaultPageSize).subscribe((worktimes) => {
        this.worktimes = worktimes;
      });
      this.worktimeService.getTotalCount().subscribe((count) => {
        this.total = count;
        const tPages = Math.ceil(count/this.defaultPageSize);
        this.totalPages = tPages;
        for(let i = 1; i <= tPages; i++) {
          this.pages.push(i);
        }
      });
    });
  }
}
