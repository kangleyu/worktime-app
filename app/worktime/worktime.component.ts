import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private titleService: Title,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('工时列表');
    this.worktimeService.getWorktimes().subscribe((worktimes) => {
      this.worktimes = worktimes;
    });
  }
}
