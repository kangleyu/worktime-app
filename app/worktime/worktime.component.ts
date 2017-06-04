import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { IWorktime } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  WorktimeService
} from '../shared/index';

@Component({
  selector: 'wt-worktime',
  templateUrl: './app/worktime/worktime.component.html'
})
export class WorktimeComponent {
  worktimes: IWorktime[];

  constructor(
    private worktimeService: WorktimeService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.worktimeService.getWorktimes().subscribe((worktimes) => {
      this.worktimes = worktimes;
    });
  }
}
