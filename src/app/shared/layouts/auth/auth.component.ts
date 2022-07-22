import {Component, OnInit, AfterViewInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

  ngOnInit(): void { }

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
