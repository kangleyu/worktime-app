import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IWorktype } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  WorktypeService
} from '../shared/index';

@Component({
  selector: 'wt-worktype',
  templateUrl: './app/worktype/worktype.component.html'
})
export class WorktypeComponent {
  worktypes: IWorktype[];

  constructor(
    private worktypeService: WorktypeService,
    private titleService: Title,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('工种列表');
    this.worktypeService.getWorktypes().subscribe((worktypes) => {
      this.worktypes = worktypes;
    });
  }
}
