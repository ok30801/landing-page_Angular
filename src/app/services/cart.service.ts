import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IProduct} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart:Array<IProduct> = []
  public cart$ = new BehaviorSubject<IProduct[]>([]);

  constructor() { }

  addProductCart(product: IProduct, id: number) {

    if (this.cart.find(item => item.id === id)) {
      this.cart.map(product => product.amount + 1)
    } else {
      this.cart.push(product);
    }
    this.cart$.next(this.cart)
  }
}
