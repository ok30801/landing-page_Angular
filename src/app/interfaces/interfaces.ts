export interface IProduct {
  id: number,
  categoryName: string,
  productName: string
  img: string,
  stars: number,
  price: number,
  discount: number,
  new: boolean,
  amount: number,
  newProduct: boolean
}

export interface ISelectionOptions {
  value: number,
  label: string
}