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

  typeComponent: string = 'catalog'
  textBtn: string = 'In cart'

  public products$!: Observable<IProduct[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$
    this.products$.subscribe(data => {
      if (!data.length) {
        this.cartService.getDataLocalStorage()
      }
    })
  }

  decreaseCountProduct(id: number) {
    // this.products.map((item: IProduct) => {
    //   if (id === item.id && item.amount > 1) {
    //     item.amount--
    //   }
    // })

    // this.products$.pipe(
    //   map((item: any, index: number) => {
    //     if (idx === index && item.amount > 1) {
    //       item.amount--
    //     }
    //   })
    // )
  }

  increaseCountProduct(id: number) {
    // console.log(this.products)
    // this.products.map((item: IProduct) => {
    //   if (id === item.id) {
    //     item.amount++
    //   }
    // })

    // this.products$.pipe(
    //   map((item: any, index: number) => {
    //     if (idx === index) {
    //       console.log(index)
    //       item.amount++
    //     }
    //   })
    // )
  }
}
