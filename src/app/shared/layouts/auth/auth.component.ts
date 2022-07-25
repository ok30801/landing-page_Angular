import {Component, OnInit, AfterViewInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('title', [
      state('start', style({
        transform: 'translateY(500px)',
        opacity: 0
      })),
      state('end', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('start => end', animate(450)),
    ])
  ]
})
export class AuthComponent implements OnInit, AfterViewInit {

  titleState = 'start'
  modalForm = false

  text: string = 'Sign in'

  animate() {
    this.titleState = this.titleState === 'start' ? 'end' : 'start'
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      offset: 200, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }

  ngAfterViewInit() {
    this.animate()
  }

  showModalForm() {
    this.modalForm = true
  }

  hideModalForm() {
    this.modalForm = false
  }
}
