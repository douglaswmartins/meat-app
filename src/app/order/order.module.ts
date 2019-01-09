import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SharedModule } from 'app/shared/shared.module';

import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ]
})
export class OrderModule { }