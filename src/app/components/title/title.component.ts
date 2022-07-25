import {Component, Input, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() text!: string

  constructor() { }

  ngOnInit(): void { }

}
