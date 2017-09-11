import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IEmployee } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  JQ_TOKEN,
  EmployeeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-employee',
  templateUrl: './app/employee/employee.component.html'
})
export class EmployeeComponent extends PageBasedComponent implements OnInit {
  employee: IEmployee[];
  currentEmployee: IEmployee;

  constructor(
    private employeeService: EmployeeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) toastr: Toastr,
    @Inject(JQ_TOKEN) public jquery: any) {
      super(toastr, jquery);
  }

  ngOnInit() {
    this.titleService.setTitle('员工列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.searchInternal(this.searchTerm, this.currentPage, this.defaultPageSize);
    });
  }

  searchInternal(term: string, index: number, size: number) {
    this.employee = [];
    this.isBusy = true;
    this.employeeService.getItems(term, index, size).subscribe((employee) => {
      if (employee.length === 0) {
        this.noData = true;
      } else {
        this.employee = employee;
        this.noData = false;
      }
      this.isBusy = false;
    }, (error) => {
      this.toastr.error("数据访问失败，请稍后再试！");
      this.isBusy = false;
    });
    this.employeeService.getTotalCount().subscribe((count) => {
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
    this.currentEmployee = {
      id: 0,
      name: "",
      email: "",
      phone: "",
      age: 0,
      gender: "男",
      idCard: "",
    };
    this.editMode = "new";
  }

  creating(employee) {
    switch (this.editMode) {
      case "new":
      {
        this.employeeService.save(employee).subscribe((e) => {
          this.toastr.info("新员工保存成功！");
          this.refreshTable();
        }, (err) => {
          this.toastr.error("新建员工失败！");
        });
      }
      case "update":
      {
        this.toastr.info("UPDATING ITEM");
      }
    }
  }

  removeItem(args) {
    if (args !== undefined) {
      this.employeeService.remove(args).subscribe((response) => {
        this.toastr.warning("删除记录成功！");
        this.refreshTable();
      }, (error) => {
        this.toastr.error("删除记录失败，请刷新页面检查是否数据已被删除！");
      });
    }
  }

  editItem(args) {
    this.currentEmployee = args;
    this.editMode = "update";
    super.editItem(args);
  }
}
