import {Component, HostListener, Input, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ErrorService} from '../../../services/error.service';
import {Observable} from 'rxjs';

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

  topScroll = 'top'
  errorState = 'start'
  // headerLinks: Array<any> = [
  //   { id: 'link_1', name: 'about us', url: 'about-us' },
  //   { id: 'link_2', name: 'catalog', url: 'catalog' },
  //   { id: 'link_2', name: 'special', url: 'special' },
  //   { id: 'link_2', name: 'manufacture', url: 'manufacture' },
  //   { id: 'link_3', name: 'delivery', url: 'delivery' },
  //   { id: 'link_4', name: 'faq', url: 'faq' },
  //   { id: 'link_5', name: 'reviews', url: 'reviews' },
  //   { id: 'link_6', name: 'feedback', url: 'feedback' },
  // ]


  headerLinks: Array<string> = [
    'about-us',
    'catalog',
    'special',
    'manufacture',
    'delivery',
    'faq',
    'reviews',
    'feedback',
  ]

  @Input() currentRout!: string

  public mobileMenu: boolean = false
  public headerTop: boolean = false
  public countProducts$!: Observable<number>;

  constructor(private cartService: CartService, public errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.countProducts$ = this.cartService.countProducts$
    this.cartService.countProductInCart()
    this.animate()
  }

  animate() {
    this.errorState = this.errorState === 'start' ? 'end' : 'start'
  }

  showMobileMenu() {
    this.mobileMenu = !this.mobileMenu
  }

  @HostListener("document: scroll")
  scrollFunction() {
    if (this.currentRout === '/') {
      document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0 ? this.headerTop = true : this.headerTop = false
    }
  }

  scrollPageTo(url: string) {
    const element = document.querySelector(`#${url}`);
    element?.classList.add('scrollActive');
    element?.scrollIntoView({behavior: 'smooth'});
  }
}
