import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { IProject } from "./models/index";
import { BaseService } from "./base.service";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService extends BaseService<IProject> {
  constructor(http: Http) {
    super(
      http,
      "http://localhost:8010/api/project/search/",
      "http://localhost:8010/api/project",
      "http://localhost:8010/api/project/total");
  }
}
