import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  textBtn: string = 'check out'
  typeComponent: string = 'main'

  constructor() { }

  ngOnInit(): void {
  }

}
