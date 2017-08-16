import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { IPayment } from '../shared/models/index';
import {
  Toastr,
  TOASTR_TOKEN,
  PaymentService
} from '../shared/index';
import { PageBasedComponent } from "../pageBased.component";

@Component({
  selector: 'wt-payment',
  templateUrl: './app/payment/payment.component.html'
})
export class PaymentComponent extends PageBasedComponent implements OnInit {
  payments: IPayment[];

  constructor(
    private paymentService: PaymentService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
      super(toastr);
  }

  ngOnInit() {
    this.titleService.setTitle('生活费用列表');
    this.activatedRoute.params.subscribe((params) => {
      const index = params['pageIndex'];
      this.paymentService.getItems(this.searchTerm, 1, this.defaultPageSize).subscribe((payments) => {
        this.payments = payments;
      });
      this.paymentService.getTotalCount().subscribe((count) => {
        this.total = count;
        const tPages = Math.ceil(count/this.defaultPageSize);
        this.totalPages = tPages;
        for(let i = 1; i <= tPages; i++) {
          this.pages.push(i);
        }
      });
    });
  }
}
