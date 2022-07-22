import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  title: string = 'delivery'

  constructor() { }

  ngOnInit(): void { }
}
