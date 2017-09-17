import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Constants } from "./index";
import { Statics } from "./models/index";

@Injectable()
export class StaticsService {

  constructor(private http: Http) {
  }

  getWorktimeStatics(params: string, pageIndex: number, pageSize: number): Observable<Statics[]> {
    const index = pageIndex || 1;
    const size = pageSize || 10;
    let requestUrl = Constants.staticsWorktime;

    requestUrl += "?page=" + index + "&size=" + size + "&params=" + params;
    return this.http.get(requestUrl)
      .timeout(3000)
      .throttleTime(2000)
      .map((response: Response) => {
        return response.json() as Statics[];
      })
      .catch(this.handleError);
  }

  getWorktimeStaticsTotal(params: string): Observable<number> {
    let requestUrl = Constants.staticsWorktime;

    requestUrl += "/total?params=" + params;
    return this.http.get(requestUrl)
      .timeout(3000)
      .throttleTime(2000)
      .map((response: Response) => {
        return response.json()[0].count as number;
      })
      .catch(this.handleError);
  }

  getPaymentStatics(params: string, pageIndex: number, pageSize: number): Observable<Statics[]> {
    const index = pageIndex || 1;
    const size = pageSize || 10;
    let requestUrl = Constants.staticsPayment;

    requestUrl += "?page=" + index + "&size=" + size + "&params=" + params;
    return this.http.get(requestUrl)
      .timeout(3000)
      .throttleTime(2000)
      .map((response: Response) => {
        return response.json() as Statics[];
      })
      .catch(this.handleError);
  }

  getPaymentStaticsTotal(params: string): Observable<number> {
    let requestUrl = Constants.staticsPayment;

    requestUrl += "/total?params=" + params;
    return this.http.get(requestUrl)
      .timeout(3000)
      .throttleTime(2000)
      .map((response: Response) => {
        return response.json()[0].count as number;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
