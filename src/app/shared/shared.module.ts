import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { InputComponent } from './input/input.component';

import { ShoppingCartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationsService } from './messages/notifications.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule, 
    FormsModule, 
    SnackbarComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationsService]
    }
  }
}
