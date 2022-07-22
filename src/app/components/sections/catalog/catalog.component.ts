import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {CartService} from '../../../services/cart.service';
import {IProduct, ISelectionOptions} from '../../../interfaces/interfaces';
// import {Observable} from 'rxjs';
// import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  title: string = 'catalog'
  count: number = 1
  products: IProduct[] = []
  // products$!: Observable<IProduct[]>
  loading = false
  totalPage!: number
  page = 1
  options: ISelectionOptions[] = [
    { value: 1, label: 'Price' },
    { value: 2, label: 'Discount' },
    { value: 3, label: 'Category' },
    { value: 4, label: 'New product' }
  ]

  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.loading = true
    this.apiService.getProducts().subscribe(data => {
      this.products = data
      this.totalPage = data.length
      this.loading = false
    })
  }

  removeProduct(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index && item.amount > 1) {
        item.amount--
      }
    })

    // this.products$.pipe(
    //   map((item: any, index: number) => {
    //     if (idx === index && item.amount > 1) {
    //       item.amount--
    //     }
    //   })
    // )

  }

  addProduct(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index) {
        item.amount++
      }
    })

    // this.products$.pipe(
    //   map((item: any, index: number) => {
    //     if (idx === index) {
    //       console.log(index)
    //       item.amount++
    //     }
    //   })
    // )
  }

  inCart(idx: number) {
    this.products.map((item: IProduct, index: number) => {
      if (idx === index) {
        this.cartService.addProductCart(item)
      }
    })
    // this.products$.pipe(
    //   map((item: any, index: number) => {
    //
    //     if (idx === index) {
    //       console.log(item)
    //       this.cartService.addProductCart(item)
    //     }
    //   })
    // )
  }
}
