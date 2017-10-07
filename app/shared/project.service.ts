import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IProject } from "./models/index";
import { BaseService } from "./base.service";
import { Constants } from "./index";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class ProjectService extends BaseService<IProject> {
  constructor(http: Http, authenticationService: AuthenticationService) {
    super(
      http,
      authenticationService,
      Constants.projectSearch,
      Constants.projectIndex,
      Constants.projectTotal);
  }
}
