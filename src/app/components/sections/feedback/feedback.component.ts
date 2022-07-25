import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FEEDBACKComponent implements OnInit {

  title: string = 'our feedback to nature'
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
