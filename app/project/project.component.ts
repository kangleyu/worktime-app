import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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
  isBusy: boolean;
  noData: boolean;
  total: number;
  totalPages: number;
  pages = [];

  private defaultPageSize: number = 3;

  constructor(
    private projectService: ProjectService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('项目列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.projectService.getProjects(this.searchTerm, 1, this.defaultPageSize).subscribe((projects) => {
        this.toastr.info('Got projects for page ' + index);
        this.projects = projects;
      });
      this.projectService.getTotalProjects().subscribe((count) => {
        this.total = count;
        const tPages = Math.ceil(count/this.defaultPageSize);
        this.totalPages = tPages;
        for(let i = 1; i <= tPages; i++) {
          this.pages.push(i);
        }
      });
    });
  }

  getDataOnPage(index) {
    this.isBusy = true;
    this.projects = [];
    this.projectService.getProjects(this.searchTerm, index, this.defaultPageSize).subscribe((projects) => {
      if (projects.length === 0) {
        this.noData = true;
      } else {
        this.projects = projects;
        this.noData = false;
      }
      this.isBusy = false;
    });
  }

  search() {
    this.projects = [];
    this.isBusy = true;
    this.projectService.getProjects(this.searchTerm, 1, this.defaultPageSize).subscribe((projects) => {
      if (projects.length === 0) {
        this.noData = true;
      } else {
        this.projects = projects;
        this.noData = false;
      }
      this.isBusy = false;
    });
  }
}
