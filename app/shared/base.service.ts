import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/throttleTime";
import 'rxjs/add/observable/throw';

import { IModel } from "./models/index";

export class BaseService<T extends IModel> {
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
      .timeout(3000)
      .throttleTime(2000)
      .map((response: Response) => {
        return response.json() as T[];
      })
      .catch(this.handleError);
  }

  public getAll(): Observable<T[]> {
    return this.http.get(this.indexUrl)
    .map((response: Response) => {
      return response.json() as T[];
    })
    .catch(this.handleError);
  }

  public getTotalCount(): Observable<number> {
    const requestUrl = this.totalUrl;

    return this.http.get(requestUrl)
      .map((response: Response) => {
        return response.json() as number;
      })
      .catch(this.handleError);
  }

  public save(item: T): Observable<T> {
    return this.http.post(this.indexUrl, item)
    .map((response: Response) => {
      return response.json() as T;
    })
    .catch(this.handleError);
  }

  public update(item: T): Observable<T> {
    item.updatedAt = new Date(Date.now());
    return this.http.patch(this.indexUrl + "/" + item.id, item)
    .map((response: Response) => {
      return response.json() as T;
    })
    .catch(this.handleError);
  }

  public remove(id: string): Observable<string> {
    return this.http.delete(this.indexUrl + "/" + id)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
