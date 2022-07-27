import {Component, Input, OnInit} from '@angular/core';
import {Router, Event, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() typeComponent!: string

  currentRout = '/'

  constructor(public route: Router) {
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart)
      this.currentRout = event.url
    })
  }

}
