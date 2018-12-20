import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(
    private restaurantsService: RestaurantsService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    return this.shoppingCartService.addItem(item);
  }

}
