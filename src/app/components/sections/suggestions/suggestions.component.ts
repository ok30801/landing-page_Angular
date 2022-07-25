import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {

  title: string = 'wat do we offer'

  public headerTop: boolean = false

  constructor() { }

  ngOnInit() { }

}
