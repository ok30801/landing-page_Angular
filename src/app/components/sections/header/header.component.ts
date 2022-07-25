import {Component, HostListener, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ErrorService} from '../../../services/error.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('error', [
      state('start', style({
        transform: 'translateY(-50px)',
        opacity: 0
      })),
      state('end', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('start => end', animate(2000)),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  errorState = 'start'

  public mobileMenu: boolean = false
  public headerTop: boolean = false
  public countProducts!: number

  constructor(private cart: CartService, public errorService: ErrorService) { }

  animate() {
    this.errorState = this.errorState === 'start' ? 'end' : 'start'
  }

  ngOnInit(): void {
    this.cart.cart$
      .subscribe(data => {
        let amountFull: any = null
        data.forEach(item => {
          amountFull += item.amount
        })
        return this.countProducts = amountFull
      })
    this.animate()
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
