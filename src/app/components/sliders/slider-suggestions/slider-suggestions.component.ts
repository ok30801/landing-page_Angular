import { Component, OnInit } from '@angular/core';
import SwiperCore, {FreeMode} from "swiper";

SwiperCore.use([FreeMode]);

@Component({
  selector: 'app-slider-suggestions',
  styleUrls: ['./slider-suggestions.component.scss'],
  template: `
    <swiper
      [slidesPerView]="1.3"
      [centeredSlides]="false"
      [freeMode]="true"
      [spaceBetween]="20"
      class="mySwiper"
    >
      <ng-template swiperSlide><img src="../../../../assets/img/suggestion/slider/martsipan.jpg" alt="">
      </ng-template>
      <ng-template swiperSlide><img src="../../../../assets/img/suggestion/slider/kedrovye-palochki.jpg" alt="">
      </ng-template>
      <ng-template swiperSlide><img src="../../../../assets/img/suggestion/slider/grilyazh.jpg" alt=""></ng-template>
    </swiper>
  `,
})
export class SliderSuggestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
