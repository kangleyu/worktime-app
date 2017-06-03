/**
 * Dashboard module where we define dashboard feature related stuffs
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PaymentComponent } from './payment.component';

const paymentRoutes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  exports: [
    RouterModule,
    SharedModule
  ],
  imports:[
    RouterModule.forChild(paymentRoutes),
    RouterModule,
    SharedModule
  ],
  declarations: [
    PaymentComponent
  ],
  providers: [
  ]
})
export class PaymentModule { }
