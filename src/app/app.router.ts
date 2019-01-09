import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu',component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'order', component: OrderComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRouterModule { }
