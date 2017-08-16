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
  EmployeeService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-employee',
  templateUrl: './app/employee/employee.component.html'
})
export class EmployeeComponent extends PageBasedComponent implements OnInit {
  employee: IEmployee[];

  constructor(
    private employeeService: EmployeeService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('员工列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.employeeService.getItems(this.searchTerm, 1, this.defaultPageSize).subscribe((employee) => {
        this.employee = employee;
      });
      this.employeeService.getTotalCount().subscribe((count) => {
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
    });
  }
}
