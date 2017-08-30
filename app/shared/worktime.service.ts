import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktime } from "./models/index";

@Injectable()
export class WorktimeService extends BaseService<IWorktime> {
  constructor(http: Http) {
    super(
      http,
      "http://localhost:8010/api/worktime/search/",
      "http://localhost:8010/api/worktime",
      "http://localhost:8010/api/worktime/total");
  }
}
