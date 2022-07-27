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

  // @ViewChild('scroll') scroll!: Element

  public mobileMenu: boolean = false
  public headerTop: boolean = false
  public countProducts!: number

  topScroll = 'top'

  headerLinks = [
    { id: 'link_1', name: 'about us', url: 'about-us' },
    { id: 'link_2', name: 'catalog', url: 'catalog' },
    { id: 'link_2', name: 'special', url: 'special' },
    { id: 'link_2', name: 'manufacture', url: 'manufacture' },
    { id: 'link_3', name: 'delivery', url: 'delivery' },
    { id: 'link_4', name: 'faq', url: 'faq' },
    { id: 'link_5', name: 'reviews', url: 'reviews' },
    { id: 'link_6', name: 'feedback', url: 'feedback' },
  ]

  constructor(private cart: CartService, public errorService: ErrorService) { }

  animate() {
    this.errorState = this.errorState === 'start' ? 'end' : 'start'
  }

  ngOnInit(): void {
    this.cart.cart$
      .subscribe(data => {
        console.log('data', data)
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

  scrollPageTo = (url: string) => {
    const element = document.querySelector(`#${url}`);
    element?.classList.add('scrollActive');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
