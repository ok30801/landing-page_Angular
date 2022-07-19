import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CartService} from '../../services/cart.service';
import {Product} from '../../interfaces/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  title: string = 'catalog'

  public products: any

  public count: number = 1

  constructor(private data: ApiService, private cart: CartService) {
  }

  ngOnInit(): void {
    this.data.getProducts().subscribe(data => {
      return this.products = data
    })
  }

  ngOnDestroy() {
    this.products.subscribe()
  }

  removeProduct(idx: number) {
    this.products.map((item: Product, index: number) => {
      if (idx === index && item.amount > 1) {
        item.amount--
      }
    })
  }

  addProduct(idx: number) {
    this.products.map((item: Product, index: number) => {
      if (idx === index) {
        item.amount++
      }
    })
  }

  inCart(idx: number) {
    this.products.map((item: Product, index: number) => {
      if (idx === index) {
        this.cart.addProductCart(item)
      }
    })
  }
}
