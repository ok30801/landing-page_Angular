import {Component, OnInit} from '@angular/core';
import SwiperCore, {Autoplay, Pagination} from "swiper";

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-slider-reviews',
  styleUrls: ['./slider-reviews.component.scss'],
  templateUrl: './slider-reviews.component.html',
})
export class SliderReviewsComponent implements OnInit {

  swiperConfig: any = {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: true,
    breakpoints: {
      375: {
        slidesPerView: '1',
      },
      767: {
        slidesPerView: '2',
      },
      992: {
        slidesPerView: '3',
      }
    }
  }

  constructor() { }

  ngOnInit(): void { }
}
