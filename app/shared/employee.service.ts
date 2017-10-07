import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IEmployee } from "./models/index";
import { BaseService } from "./base.service";
import { Constants } from "./index";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class EmployeeService extends BaseService<IEmployee> {
  constructor(http: Http, authenticationService: AuthenticationService) {
    super(
      http,
      authenticationService,
      Constants.employeeSearch,
      Constants.employeeIndex,
      Constants.employeeTotal);
  }
}
