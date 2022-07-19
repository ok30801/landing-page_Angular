import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart:Array<Product> = []
  public cart$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addProductCart(product: Product) {
    this.cart.push(product);
    this.cart$.next(this.cart)
  }
}
