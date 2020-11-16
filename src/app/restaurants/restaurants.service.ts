import {Injectable} from '@angular/core'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurant} from "./restaurant/restaurant.model"
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class RestaurantsService {

    constructor(private httpClient: HttpClient){}

    restaurants(search?: string): Promise<Restaurant[]> {      
      return this.httpClient.get(`${MEAT_API}/restaurants`, search && {params: {q: search }})
        .catch(ErrorHandler.handleError).toPromise()
    }

    restaurantById(id: string): Promise<Restaurant>{
      return this.httpClient.get(`${MEAT_API}/restaurants/${id}`)
        .catch(ErrorHandler.handleError).toPromise()
    }

    reviewsOfRestaurant(id: string): Promise<any>{
      return this.httpClient.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .catch(ErrorHandler.handleError).toPromise()
    }

    menuOfRestaurant(id: string): Promise<MenuItem[]>{
      return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
        .catch(ErrorHandler.handleError).toPromise()
    }

}
