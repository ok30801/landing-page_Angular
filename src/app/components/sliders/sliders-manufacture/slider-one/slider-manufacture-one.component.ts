import {Component, OnInit} from '@angular/core';
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider-manufacture-one',
  styleUrls: ['./slider-manufacture-one.component.scss'],
  template: `
    <swiper
      [slidesPerView]="2"
      [centeredSlides]="false"
      [freeMode]="true"
      [spaceBetween]="20"
      [navigation]="true"
      [pagination]="true"
      class="mySwiper"
    >
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/3W1A3975_1x.jpg"
                                                 alt=""></ng-template>
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/3W1A7387_1x.jpg"
                                                 alt=""></ng-template>
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/DSC_4767-2_1x.jpg"
                                                 alt=""></ng-template>
    </swiper>
  `,
})
export class SliderManufactureOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
