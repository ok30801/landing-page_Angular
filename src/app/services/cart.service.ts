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

  addProductCart(product: IProduct) {
    this.cart.push(product);
    this.cart$.next(this.cart)
  }
}
