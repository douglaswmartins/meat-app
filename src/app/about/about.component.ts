import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('aboutAppeared', [
      state('ready', style({
        opacity: 1
      })),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('200ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  aboutState = 'ready'

  constructor() { }

  ngOnInit() {
  }

}
