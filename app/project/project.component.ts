import { Component, Inject } from '@angular/core';
import { Toastr, TOASTR_TOKEN } from '../shared/index';

@Component({
  selector: 'wt-project',
  templateUrl: './app/project/project.component.html'
})
export class ProjectComponent {

  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  showAlert() {
    this.toastr.success("Project component alert!");
  }
}
