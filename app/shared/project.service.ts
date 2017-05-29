import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IProject } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService {
  constructor(private http: Http) {
  }

  public getProjects(): Observable<IProject[]> {
    return this.http.get("http://localhost:8010/api/project")
      .map((response: Response) => {
        return response.json() as IProject[];
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}