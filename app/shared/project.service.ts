import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IProject } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Handlers } from "./handlers";

@Injectable()
export class ProjectService {
  constructor(private http: Http) {
  }

  public getProjects(searchTerm: string, pageIndex: number, pageSize: number): Observable<IProject[]> {
    const index = pageIndex || 1;
    const size = pageSize || 10;
    let requestUrl = "";

    if (searchTerm !== undefined && searchTerm.length > 0) {
      requestUrl = "http://localhost:8010/api/project/search/" + encodeURIComponent(searchTerm);
    } else {
      requestUrl = "http://localhost:8010/api/project";
    }
    requestUrl += "/page/" + index + "/size/" + size;
    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json() as IProject[];
      })
      .catch(Handlers.handleError);
  }

  public getTotalProjects(): Observable<number> {
    const requestUrl = "http://localhost:8010/api/project/total";

    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json() as number;
      })
      .catch(Handlers.handleError);
  }
}
