import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import {Restaurant} from "./restaurant/restaurant.model"
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'
import { Reviews } from './../restaurant-detail/reviews/reviews.model';

import { MEAT_API } from '../app.api'

@Injectable()
export class RestaurantsService {

    constructor(private httpClient: HttpClient){}

    restaurants(search?: string): Promise<Restaurant[]> {
      return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`, search && {params: {q: search }}).toPromise()
    }

    restaurantById(id: string): Promise<Restaurant> {
      return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}`).toPromise()
    }

    reviewsOfRestaurant(id: string): Promise<Reviews[]> {
      return this.httpClient.get<Reviews[]>(`${MEAT_API}/restaurants/${id}/reviews`).toPromise()
    }

    menuOfRestaurant(id: string): Promise<MenuItem[]> {
      return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`).toPromise()
    }

}
