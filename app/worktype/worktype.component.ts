import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
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
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.worktypeService.getWorktypes().subscribe((worktypes) => {
      this.worktypes = worktypes;
    });
  }
}
