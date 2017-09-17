import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktype } from "./models/index";
import { Constants } from "./index";

@Injectable()
export class WorktypeService extends BaseService<IWorktype> {
  constructor(http: Http) {
    super(
      http,
      Constants.worktypeSearch,
      Constants.worktypeIndex,
      Constants.worktypeTotal);
  }
}
