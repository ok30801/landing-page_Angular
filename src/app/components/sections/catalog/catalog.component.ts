import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {CartService} from '../../../services/cart.service';
import {IProduct} from '../../../interfaces/interfaces';
import {delay, Observable} from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  page = 1
  loading = false
  count: number = 1
  selectedOption = ''
  typeComponent = 'catalog'
  title: string = 'catalog'
  textBtn: string = 'In cart'

  public products$!: Observable<IProduct[]>;

  options = [
    {label: 'price'},
    {label: 'rating'},
    {label: 'discount'},
    {label: 'category'},
    {label: 'new product'}
  ]

  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.apiService.allProducts$
    this.apiService.loading$
      .pipe(delay(500))
      .subscribe(data => this.loading = data)
    this.apiService.getProducts()
  }

  decreaseCountProduct(id: number) {
    this.apiService.allProducts
      .map((item: any) => {
          if (id === item.id && item.amount > 1) {
            item.amount--
          }
        }
      )
  }

  increaseCountProduct(id: number) {
    this.apiService.allProducts
    .map((item: any) => {
        if (id === item.id) {
          item.amount++
          item.totalPrice = item.price * item.amount
        }
      }
    )
  }

  inCart(id: number) {
    this.apiService.allProducts
      .map((item: any) => {
        if (id === item.id) {
          this.cartService.addProductCart(item, id)
        }
      }
    )
  }
}
