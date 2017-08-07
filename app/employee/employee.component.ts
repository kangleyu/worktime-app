import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IEmployee } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  EmployeeService
} from '../shared/index';

@Component({
  selector: 'wt-employee',
  templateUrl: './app/employee/employee.component.html'
})
export class EmployeeComponent implements OnInit {
  employee: IEmployee[];

  constructor(
    private employeeService: EmployeeService,
    private titleService: Title,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('员工列表');
    this.employeeService.getEmployee().subscribe((employee) => {
      this.employee = employee;
    });
  }
}
