import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IPayment } from "./models/index";

@Injectable()
export class PaymentService extends BaseService<IPayment> {
  constructor(http: Http) {
    super(
      http,
      "http://localhost:8010/api/payment/search/",
      "http://localhost:8010/api/payment",
      "http://localhost:8010/api/payment/total");
  }
}
