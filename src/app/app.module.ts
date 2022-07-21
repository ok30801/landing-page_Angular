import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './shared/layouts/auth/auth.component';
import { MainComponent } from './shared/layouts/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { SwiperModule } from 'swiper/angular';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SpecialComponent } from './components/special/special.component';
import { ButtonComponent } from './components/button/button.component';
import { ManufactureComponent } from './components/manufacture/manufacture.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FEEDBACKComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { SliderSuggestionsComponent } from './components/sliders/slider-suggestions/slider-suggestions.component';
import { SliderReviewsComponent } from './components/sliders/slider-reviews/slider-reviews.component';
import { SliderManufactureOneComponent } from './components/sliders/sliders-manufacture/slider-one/slider-manufacture-one.component';
import { SliderManufactureTwoComponent } from './components/sliders/sliders-manufacture/slider-two/slider-manufacture-two.component';
import {LoaderComponent} from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    SuggestionsComponent,
    CatalogComponent,
    SpecialComponent,
    ButtonComponent,
    ManufactureComponent,
    DeliveryComponent,
    FaqComponent,
    ReviewsComponent,
    FEEDBACKComponent,
    FooterComponent,
    TitleComponent,
    SliderSuggestionsComponent,
    SliderReviewsComponent,
    SliderManufactureOneComponent,
    SliderManufactureTwoComponent,
    LoaderComponent,
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
