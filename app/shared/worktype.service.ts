import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IWorktype } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Handlers } from "./handlers";

@Injectable()
export class WorktypeService {
  constructor(private http: Http) {
  }

  public getWorktypes(): Observable<IWorktype[]> {
    return this.http.get("http://localhost:8010/api/worktype")
      .map((response: Response) => {
        return response.json() as IWorktype[];
      })
      .catch(Handlers.handleError);
  }
}
