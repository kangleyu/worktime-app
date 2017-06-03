import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IWorktime } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Handlers } from "./handlers";

@Injectable()
export class WorktimeService {
  constructor(private http: Http) {
  }

  public getWorktimes(): Observable<IWorktime[]> {
    return this.http.get("http://localhost:8010/api/worktime")
      .map((response: Response) => {
        return response.json() as IWorktime[];
      })
      .catch(Handlers.handleError);
  }
}
