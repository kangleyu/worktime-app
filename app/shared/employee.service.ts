import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IEmployee } from "./models/index";
import { BaseService } from "./base.service";
import { Constants } from "./index";

@Injectable()
export class EmployeeService extends BaseService<IEmployee> {
  constructor(http: Http) {
    super(
      http,
      Constants.employeeSearch,
      Constants.employeeIndex,
      Constants.employeeTotal);
  }
}
