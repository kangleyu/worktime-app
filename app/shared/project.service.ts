import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IProject } from "./models/index";
import { BaseService } from "./base.service";
import { Constants } from "./index";

@Injectable()
export class ProjectService extends BaseService<IProject> {
  constructor(http: Http) {
    super(
      http,
      Constants.projectSearch,
      Constants.projectIndex,
      Constants.projectTotal);
  }
}
