import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    private titleService: Title,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.titleService.setTitle('生活费用列表');
    this.paymentService.getPayments().subscribe((payments) => {
      this.payments = payments;
    });
  }
}
