import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";
import { IPayment } from "./models/index";
import { Constants } from "./index";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class PaymentService extends BaseService<IPayment> {
  constructor(http: Http, authenticationService: AuthenticationService) {
    super(
      http,
      authenticationService,
      Constants.paymentSearch,
      Constants.paymentIndex,
      Constants.paymentTotal);
  }
}
