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
  ProjectService,
  EmployeeService
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
  currentProject: IProject;
  managers: string[];

  constructor(
    private projectService: ProjectService,
    private employeeService: EmployeeService,
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
      this.employeeService.getAll().subscribe((emp) => {
        this.managers = emp.map<string>((e) => e.name).filter((val, idx, arr) => arr.indexOf(val) === idx);
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

  preCreate() {
    // for creating new project, we should create a new template project and assign it to current project
    // for editing existing project, we should set currentProject with the current one
    this.currentProject = {
      id: 0,
      name: "",
      address: "",
      manager: "",
      state: "1"
    };
  }

  creating(project) {
    this.projectService.save(project).subscribe((p) => {
      console.log(p);
      this.toastr.info("新项目保存成功！");
    });
  }

  exportTable() {
    this.toastr.info('export table');
  }
}
