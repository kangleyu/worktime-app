import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IPayment } from "./models/index";
import { Constants } from "./index";

@Injectable()
export class PaymentService extends BaseService<IPayment> {
  constructor(http: Http) {
    super(
      http,
      Constants.paymentSearch,
      Constants.paymentIndex,
      Constants.paymentTotal);
  }
}
