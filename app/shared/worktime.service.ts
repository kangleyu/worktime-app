import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IWorktime } from "./models/index";
import { Constants } from "./index";

@Injectable()
export class WorktimeService extends BaseService<IWorktime> {
  constructor(http: Http) {
    super(
      http,
      Constants.worktimeSearch,
      Constants.worktimeIndex,
      Constants.worktimeTotal);
  }
}
