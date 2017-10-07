import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktype } from "./models/index";
import { Constants } from "./index";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class WorktypeService extends BaseService<IWorktype> {
  constructor(http: Http, authenticationService: AuthenticationService) {
    super(
      http,
      authenticationService,
      Constants.worktypeSearch,
      Constants.worktypeIndex,
      Constants.worktypeTotal);
  }
}
