import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  title: string = 'delivery'
  test = false

  constructor() { }

  ngOnInit(): void { }

  onEvent(e: any) {
    if(e.target.classList.contains('delivery__card')) {
      this.test = !this.test
    }
    console.log(this.test)
  }
  offEvent(e: any) {
    if(e.target.classList.contains('delivery__card')) {
      this.test = !this.test
    }
    console.log(this.test)
  }

}
