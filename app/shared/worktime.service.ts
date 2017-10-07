import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktime } from "./models/index";
import { Constants } from "./index";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class WorktimeService extends BaseService<IWorktime> {
  constructor(http: Http, authenticationService: AuthenticationService) {
    super(
      http,
      authenticationService,
      Constants.worktimeSearch,
      Constants.worktimeIndex,
      Constants.worktimeTotal);
  }
}
