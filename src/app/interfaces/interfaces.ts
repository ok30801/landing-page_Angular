export interface IProduct {
  id: number,
  categoryName: string,
  productName: string
  img: string,
  stars: number,
  price: number,
  oldPrice?: number
  totalPrice?: number,
  discount: number,
  new: boolean,
  amount: number,
  newProduct: boolean,
}
