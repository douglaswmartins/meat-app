import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations";

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        "margin-left": "470px",
        "width": "0px",
        "float": "left"
      })),
      state('visible', style({
        opacity: 1,
        "margin-left": "0px",
        "width": "470px",
        "margin-top": "0px",
        "margin-bottom": "0px"
      })),
      transition('* => *', animate('500ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
                      .debounceTime(500)
                      .distinctUntilChanged()
                      .switchMap(searchTerm => this.restaurantsService
                        .restaurants(searchTerm))
                      .subscribe(restaurants => this.restaurants = restaurants )

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
