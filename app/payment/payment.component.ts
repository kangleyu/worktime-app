import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { IPayment } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  PaymentService
} from '../shared/index';

@Component({
  selector: 'wt-payment',
  templateUrl: './app/payment/payment.component.html'
})
export class PaymentComponent implements OnInit {
  payments: IPayment[];

  constructor(
    private paymentService: PaymentService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }
}
