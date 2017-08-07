import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProject } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  ProjectService
} from '../shared/index';

@Component({
  selector: 'wt-project',
  templateUrl: './app/project/project.component.html',
  styleUrls: ['./app/project/project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: IProject[];
  searchTerm: string;

  constructor(
    private projectService: ProjectService,
    private titleService: Title,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('项目列表');
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  showBusy() {
    this.toastr.info('Busy');
  }

  search() {
    this.toastr.info(this.searchTerm);
  }
}
