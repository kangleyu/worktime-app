import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IEmployee } from "./models/index";
import { BaseService } from "./base.service";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class EmployeeService extends BaseService<IEmployee> {
  constructor(http: Http) {
    super(
      http,
      "http://localhost:8010/api/employee/search/",
      "http://localhost:8010/api/employee",
      "http://localhost:8010/api/employee/total");
  }
}
