import {Component, HostListener, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobileMenu: boolean = false
  public headerTop: boolean = false
  public countProducts!: number

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.cart$
      .subscribe(data => {
        let amountFull: any = null
        data.forEach(item => {
          amountFull += item.amount
        })
        return this.countProducts = amountFull
      })
  }

  showMobileMenu = () => {
    this.mobileMenu = !this.mobileMenu
  }

  @HostListener("document: scroll")
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.headerTop = true
    } else {
      this.headerTop = false
    }
  }
}
