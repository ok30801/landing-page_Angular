import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {ProductComponent} from './pages/product/product.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component'
import {MainComponent} from './pages/main/main.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100],
};

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'product:id', component: ProductComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
