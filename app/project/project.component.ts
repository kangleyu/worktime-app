import { 
  Component, 
  Inject,
  OnInit
} from '@angular/core';
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

  constructor(private projectService: ProjectService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    })
  }
}
