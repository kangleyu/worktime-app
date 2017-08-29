import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";

export class Handlers {
  static handleError(error: Response) {
    return Observable.throw("Error");
  }
}
