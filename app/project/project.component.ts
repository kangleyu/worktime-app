import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IProject } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  ProjectService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-project',
  templateUrl: './app/project/project.component.html',
  styleUrls: ['./app/project/project.component.css']
})
export class ProjectComponent extends PageBasedComponent implements OnInit {
  @ViewChild('myModal')
  myModal: ElementRef;

  projects: IProject[];

  constructor(
    private projectService: ProjectService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('项目列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.projectService.getItems(this.searchTerm, 1, this.defaultPageSize).subscribe((projects) => {
        this.projects = projects;
      });
      this.projectService.getTotalCount().subscribe((count) => {
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
    this.projects = [];
    this.isBusy = true;
    this.projectService.getItems(term, index, size).subscribe((projects) => {
      if (projects.length === 0) {
        this.noData = true;
      } else {
        this.projects = projects;
        this.noData = false;
      }
      this.isBusy = false;
    });
  }

  createNewItem() {
  }

  exportTable() {
    this.toastr.info('export table');
  }
}
