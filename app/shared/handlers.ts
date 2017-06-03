import { Observable } from "rxjs/Observable";

export class Handlers {
  static handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
