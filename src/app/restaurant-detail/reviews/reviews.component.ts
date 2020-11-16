import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RestaurantsService} from '../../restaurants/restaurants.service'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: any

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    this.reviews = await this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
