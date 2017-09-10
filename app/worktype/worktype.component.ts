import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IWorktype, IEmployee } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  WorktypeService,
  EmployeeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-worktype',
  templateUrl: './app/worktype/worktype.component.html'
})
export class WorktypeComponent extends PageBasedComponent implements OnInit {
  worktypes: IWorktype[];
  currentWorktype: IWorktype;
  emps: string[];

  constructor(
    private worktypeService: WorktypeService,
    private employeeService: EmployeeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
      super(toastr, jquery);
  }

  ngOnInit() {
    this.titleService.setTitle('工种列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.employeeService.getAll().subscribe((employee) => {
        this.emps = employee.map<string>((e) => e.name).filter((val, idx, arr) => arr.indexOf(val) === idx);
      });
      this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
    });
  }

  searchInternal(term: string, index: number, size: number) {
    this.worktypes = [];
    this.isBusy = true;
    this.worktypeService.getItems(term, index, size).subscribe((worktypes) => {
      if (worktypes.length === 0) {
        this.noData = true;
      } else {
        this.worktypes = worktypes;
        this.noData = false;
      }
      this.isBusy = false;
    }, (error) => {
      this.toastr.error("数据访问失败，请稍后再试！");
      this.isBusy = false;
    });
    this.worktypeService.getTotalCount().subscribe((count) => {
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
    this.currentWorktype = {
      id: 0,
      worktype: "",
      lead: ""
    };
  }

  creating(worktype) {
    this.worktypeService.save(worktype).subscribe((p) => {
      this.toastr.info("新工种保存成功！");
      this.refreshTable();
    }, (err) => {
      this.toastr.error("新建工种失败！");
    });
  }

  exportTable() {
    this.toastr.info('export table');
  }

  removeItem(args) {
    if (args !== undefined) {
      this.worktypeService.remove(args).subscribe((response) => {
        this.toastr.warning("删除记录成功！");
        this.refreshTable();
      }, (error) => {
        this.toastr.error("删除记录失败，请刷新页面检查是否数据已被删除！");
      });
    }
  }
}
