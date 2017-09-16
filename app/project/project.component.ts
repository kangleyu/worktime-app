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
  JQ_TOKEN,
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
    @Inject(TOASTR_TOKEN) toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
      super(toastr, jquery);
  }

  ngOnInit() {
    this.titleService.setTitle('项目列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.employeeService.getAll().subscribe((emp) => {
        this.managers = emp.map<string>((e) => e.name).filter((val, idx, arr) => arr.indexOf(val) === idx);
      });
      this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
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
    }, (error) => {
      this.toastr.error("数据访问失败，请稍后再试！");
      this.isBusy = false;
    });
    this.projectService.getTotalCount().subscribe((count) => {
      this.total = count;
      const tPages = Math.ceil(count/this.defaultPageSize);
      this.totalPages = tPages;
      for(let i = 1; i <= tPages; i++) {
        this.pages.push(i);
      }
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
    this.editMode = "new";
  }

  creating(project) {
    switch (this.editMode) {
      case "new":
      {
        this.projectService.save(project).subscribe((p) => {
          this.toastr.info("新项目保存成功！");
          this.refreshTable();
        }, (err) => {
          this.toastr.error("新建项目失败！");
        });
        break;
      }
      case "update":
      {
        this.projectService.update(project).subscribe((p) => {
          this.toastr.info("更新成功！");
          this.refreshTable();
        }, (err) => {
          this.toastr.error("更新失败！");
        });
        break;
      }
    }
  }

  removeItem(args) {
    if (args !== undefined) {
      this.projectService.remove(args).subscribe((response) => {
        this.toastr.warning("删除记录成功！");
        this.refreshTable();
      }, (error) => {
        this.toastr.error("删除记录失败，请刷新页面检查是否数据已被删除！");
      });
    }
  }

  editItem(args) {
    this.currentProject = args;
    this.editMode = "update";
    super.editItem(args);
  }
}
