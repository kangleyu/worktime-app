import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IPayment, IEmployee, IProject, IWorktime } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  PaymentService,
  EmployeeService,
  ProjectService,
  WorktypeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-payment',
  templateUrl: './app/payment/payment.component.html'
})
export class PaymentComponent extends PageBasedComponent implements OnInit {
  payments: IPayment[];
  currentPayment: IPayment;
  emps: string[];
  projects: string[];
  worktypes: string[];

  constructor(
    private paymentService: PaymentService,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private worktypeService: WorktypeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('工资暂支列表');
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
    this.payments = [];
    this.isBusy = true;
    this.paymentService.getItems(term, index, size).subscribe((payments) => {
      if (payments.length === 0) {
        this.noData = true;
      } else {
        this.payments = payments;
        this.noData = false;
      }
      this.isBusy = false;
    }, (error) => {
      this.toastr.error("数据访问失败，请稍后再试！");
      this.isBusy = false;
    });
    this.paymentService.getTotalCount().subscribe((count) => {
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
    this.currentPayment = {
      id: 0,
      employee: "",
      project: "",
      worktype: "",
      year: 2017,
      month: 1,
      isUpperHalf: true,
      paid: 0
    };
  }

  creating(payment) {
    this.paymentService.save(payment).subscribe((p) => {
      this.toastr.info("新费用保存成功！");
      this.refreshTable();
    }, (err) => {
      this.toastr.error("新建费用失败！");
    });
  }

  exportTable() {
    this.toastr.info('export table');
  }
}
