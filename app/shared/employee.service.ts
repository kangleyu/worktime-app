import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IEmployee } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Handlers } from "./handlers";

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {
  }

  public getEmployee(): Observable<IEmployee[]> {
    return this.http.get("http://localhost:8010/api/employee")
      .map((response: Response) => {
        return response.json() as IEmployee[];
      })
      .catch(Handlers.handleError);
  }
}
