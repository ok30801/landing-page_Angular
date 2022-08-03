import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces/interfaces';
import {CartService} from '../../services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  typeComponent: string = 'cart'
  textBtn: string = 'Clear cart'

  public products$!: Observable<IProduct[]>;
  public allPrice$!: Observable<number>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$
    this.cartService.countTotalPrice()
    this.allPrice$ = this.cartService.allPrice$

    this.products$.subscribe(data => {
      if (!data.length) {
        this.cartService.getDataLocalStorage()
      }
    })
  }

  decreaseCountProduct(id: number) {
    this.cartService.cart
      .map((item: any) => {
        if (id === item.id && item.amount > 1) {
          item.amount--
        }
      })
    this.cartService.countProductInCart()
    this.cartService.countTotalPrice()
  }

  increaseCountProduct(id: number) {
    this.cartService.cart
      .map((item: any) => {
        if (id === item.id) {
          item.amount++
        }
      })
    this.cartService.countProductInCart()
    this.cartService.countTotalPrice()
    this.cartService.countTotalPriceProductItem()

  }

  trackBy(index: number, item: any) {

  }
}
