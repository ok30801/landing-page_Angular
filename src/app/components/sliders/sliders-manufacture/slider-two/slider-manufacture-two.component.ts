import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-manufacture-two',
  styleUrls: ['./slider-manufacture-two.component.scss'],
  template: `
    <swiper
      [slidesPerView]="1.3"
      [centeredSlides]="false"
      [freeMode]="true"
      [spaceBetween]="20"
      class="mySwiper"
    >
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/DSC_2368_2_1x.jpg"
                                                 alt=""></ng-template>
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/3W1A4012_1x.jpg"
                                                 alt=""></ng-template>
      <ng-template swiperSlide><img src="../../../../../assets/img/manufacture/slider/3W1A3975_3_1x.jpg"
                                                 alt=""></ng-template>
    </swiper>
  `,
})
export class SliderManufactureTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
