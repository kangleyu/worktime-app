import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Handlers } from "./handlers";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

export class BaseService<T> {
  constructor(
    public http: Http,
    public searchUrl: string,
    public indexUrl: string,
    public totalUrl: string) { }

  public getItems(searchTerm: string, pageIndex: number, pageSize: number): Observable<T[]> {
    const index = pageIndex || 1;
    const size = pageSize || 10;
    let requestUrl = "";

    if (searchTerm !== undefined && searchTerm.length > 0) {
      requestUrl = this.searchUrl + encodeURIComponent(searchTerm);
    } else {
      requestUrl = this.indexUrl;
    }
    requestUrl += "/page/" + index + "/size/" + size;
    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json() as T[];
      })
      .catch(Handlers.handleError);
  }

  public getAll(): Observable<T[]> {
    return this.http.get(this.indexUrl).map((response: Response) => {
      return response.json() as T[];
    })
    .catch(Handlers.handleError);
  }

  public getTotalCount(): Observable<number> {
    const requestUrl = this.totalUrl;

    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json() as number;
      })
      .catch(Handlers.handleError);
  }

  public save(item: T): Observable<T> {
    return this.http.post(this.indexUrl, item)
    .map((response: Response) => {
      return response.json() as T;
    })
    .catch(Handlers.handleError);
  }
}
