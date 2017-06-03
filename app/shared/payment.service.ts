import { EventEmitter, Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IPayment } from "./models/index";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Handlers } from "./handlers";

@Injectable()
export class PaymentService {
  constructor(private http: Http) {
  }

  public getPayments(): Observable<IPayment[]> {
    return this.http.get("http://localhost:8010/api/payment")
      .map((response: Response) => {
        return response.json() as IPayment[];
      })
      .catch(Handlers.handleError);
  }
}
