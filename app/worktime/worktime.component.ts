import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IWorktime, IEmployee, IWorktype } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  WorktimeService,
  EmployeeService,
  WorktypeService,
  ProjectService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-worktime',
  templateUrl: './app/worktime/worktime.component.html'
})
export class WorktimeComponent extends PageBasedComponent implements OnInit {
  worktimes: IWorktime[];
  currentWorktime: IWorktime;
  emps: string[];
  projects: string[];
  worktypes: string[];

  constructor(
    private worktimeService: WorktimeService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private worktypeService: WorktypeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
      super(toastr, jquery);
  }

  ngOnInit() {
    this.titleService.setTitle('工时列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.employeeService.getAll().subscribe((emp) => {
        this.emps = emp.map<string>((e) => e.name).filter((val, idx, arr) => arr.indexOf(val) === idx);
      });
      this.projectService.getAll().subscribe((project) => {
        this.projects = project.map<string>((e) => e.name).filter((val, idx, arr) => arr.indexOf(val) === idx);
      });
      this.worktypeService.getAll().subscribe((worktype) => {
        this.worktypes = worktype.map<string>((e) => e.worktype).filter((val, idx, arr) => arr.indexOf(val) === idx);
      });
      this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
    });
  }

  searchInternal(term: string, index: number, size: number) {
    this.worktimes = [];
    this.isBusy = true;
    this.worktimeService.getItems(term, index, size).subscribe((worktimes) => {
      if (worktimes.length === 0) {
        this.noData = true;
      } else {
        this.worktimes = worktimes;
        this.noData = false;
      }
      this.isBusy = false;
    }, (error) => {
      this.toastr.error("数据访问失败，请稍后再试！");
      this.isBusy = false;
    });
    this.worktimeService.getTotalCount().subscribe((count) => {
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
    this.currentWorktime = {
      id: 0,
      employee: "",
      project: "",
      worktype: "",
      year: 2017,
      month: 1,
      worktime: 0
    };
    this.editMode = "new";
  }

  creating(worktime) {
    this.worktimeService.save(worktime).subscribe((p) => {
      this.toastr.info("新工时保存成功！");
      this.refreshTable();
    }, (err) => {
      this.toastr.error("新建工时失败！");
    });
  }

  exportTable() {
    this.toastr.info('export table');
  }

  removeItem(args) {
    if (args !== undefined) {
      this.worktimeService.remove(args).subscribe((response) => {
        this.toastr.warning("删除记录成功！");
        this.refreshTable();
      }, (error) => {
        this.toastr.error("删除记录失败，请刷新页面检查是否数据已被删除！");
      });
    }
  }

  editItem(args) {
    this.currentWorktime = args;
    this.editMode = "update";
    super.editItem(args);
  }
}
