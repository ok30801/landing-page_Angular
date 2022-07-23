import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../interfaces/interfaces';

@Pipe({
  name: 'sortedProducts'
})
export class SortedProductsPipe implements PipeTransform {

  transform(products: IProduct[], option: any): IProduct[] {
    console.log(option)
    let res: IProduct[] = []

    if (!option) res = products

    if (option === 'price') {
      res = products.sort((a: any, b: any) => a.price - b.price)
    }
    if (option === 'category') {
      res = products.sort((a: any, b: any) => {
        if (a.categoryName < b.categoryName) {
          return -1
        }
        return 0
      })
    }
    if (option === 'new product') {
      const filteredNewProducts = products.filter(p => p.newProduct)
      const othersProducts = products.filter(p => !p.newProduct)
      res = filteredNewProducts.concat(othersProducts)
    }
    if (option === 'discount') {
      const filteredDiscountProducts = products.filter(p => p.discount)
      const othersProducts = products.filter(p => !p.discount)
      res = filteredDiscountProducts.concat(othersProducts)
    }

    return res
  }
}
