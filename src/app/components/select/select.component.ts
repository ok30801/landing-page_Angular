import {Component, Input, OnInit} from '@angular/core';
import {ISelectionOptions} from '../../interfaces/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options!: ISelectionOptions[]

  constructor() { }

  ngOnInit(): void {
  }

}
