import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.scss']
})
export class ManufactureComponent implements OnInit {

  title: string = 'manufacture'

  constructor() { }

  ngOnInit(): void {
  }

}
