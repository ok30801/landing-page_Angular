import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CartService} from '../../services/cart.service';
import {IProduct} from '../../interfaces/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  title: string = 'catalog'

  products: IProduct[] = []

  // products$: Observable<IProduct[]>

  public count: number = 1

  constructor(private data: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.data.getProducts().subscribe(data => {
      this.products = data
    })

    // this.products$ = this.data.getProducts()
  }

  removeProduct(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index && item.amount > 1) {
        item.amount--
      }
    })
  }

  addProduct(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index) {
        item.amount++
      }
    })
  }

  inCart(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index) {
        this.cart.addProductCart(item)
      }
    })
  }
}
