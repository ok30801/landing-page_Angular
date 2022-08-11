import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrder implements OnInit {

  formOrder: FormGroup
  submitted = false
  textBtn: string = 'checkout'
  typeComponent = 'cart'
  test = false

  constructor() {}

  ngOnInit(): void {
    this.formOrder = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      comment: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }



  getErrorMessage(control: string) {

    // console.log('this.phone.status', this.phone)
    //
    // if (control === 'name' && this.name.hasError('required')) {
    //   return 'Укажите Ваше имя';
    // }
    // if (control === 'email' && this.email.hasError('required')) {
    //   return 'Укажите Ваш Email';
    // }
    // if (control === 'phone' && this.phone.hasError('required')) {
    //   return 'Укажите Ваш телефон';
    // }
    // return this.phone.status === 'INVALID' || this.email.status === 'INVALID'
    //   ? 'Пожалуйста, введите корректные данные'
    //   : '';
  }

  onFocus() {
    this.test = true
  }


  submitOrder() {
    console.log(this.formOrder)
    // if (this.formOrder.invalid) return;
    // this.submitted = true;

  }
}
