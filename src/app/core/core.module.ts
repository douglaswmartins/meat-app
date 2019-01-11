import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule { }
