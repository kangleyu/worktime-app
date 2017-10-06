import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Constants } from "./index";
import { Statics } from "./models/index";

class Labels {
  labels: string[];
}

class Data {
  label: string;
  data: [number];
}

@Injectable()
export class DashboardService {
  constructor(private http: Http) {
  }

  getEmployeeData(): Observable<any[]> {
    return this.http.get(Constants.dashboardEmployee)
    .timeout(3000)
    .throttleTime(2000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  getGeneralData(): Observable<any[]> {
    return this.http.get(Constants.dashboardGeneral)
    .timeout(3000)
    .throttleTime(2000)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
