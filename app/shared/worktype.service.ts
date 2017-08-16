import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktype } from "./models/index";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class WorktypeService extends BaseService<IWorktype> {
  constructor(http: Http) {
    super(
      http,
      "http://localhost:8010/api/worktype/search/",
      "http://localhost:8010/api/worktype",
      "http://localhost:8010/api/worktype/total");
  }
}
