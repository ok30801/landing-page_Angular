import {Injectable} from '@angular/core';
import {BehaviorSubject, map, scan} from 'rxjs';
import {IProduct} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: IProduct[] = []
  public cart$ = new BehaviorSubject<IProduct[]>([]);

  public countProducts!: number
  public countProducts$ = new BehaviorSubject<number>(0);

  public allPrice: number
  public allPrice$ = new BehaviorSubject<number>(0)

  public totalPriceProductItem: number
  public totalPriceProductItem$ = new BehaviorSubject<number>(0)

  constructor() { }

  public addProductCart(product: IProduct, id: number) {
    if (this.cart.find(item => item.id === id)) {
      this.cart.map(product => product.amount + 1)
    } else {
      this.cart.push(product);
    }
    this.cart$.next(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  countProductInCart() {
    const localDataCart = JSON.parse(localStorage.getItem('cart') || '[]')

    this.cart$.subscribe(data => {
      let amountFull: any = null

      if (data.length) {
        data.forEach(item => {
          amountFull += item.amount
        })
      } else {
        localDataCart.forEach((item: any) => {
          amountFull += item.amount
        })
      }
      this.countProducts = amountFull
      this.countProducts$.next(this.countProducts)
    })
  }

  getDataLocalStorage() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
    this.cart$.next(this.cart)
  }

  countTotalPrice() {
    this.cart$.subscribe(data => {
      this.allPrice = data.reduce((acc, product) => acc + product.price * product.amount, 0)
      this.totalPriceProductItem = data.reduce((acc, product) => acc + product.price * product.amount, 0)

      console.log('this.totalPriceProductItem', this.totalPriceProductItem)

      this.totalPriceProductItem$.next(this.totalPriceProductItem)
      this.allPrice$.next(this.allPrice)
    })
  }

  countTotalPriceProductItem() {
    // this.cart.forEach(item => item.price = item.price * item.amount)
    // this.cart$.next(this.cart)
  }
}
